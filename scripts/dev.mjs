import net from "node:net";
import { spawn } from "node:child_process";

/**
 * Checks if a port is in use either by active TCP listeners (e.g. Docker, WSL2)
 * or by testing binding.
 */
function isPortInUse(port) {
  return new Promise((resolve) => {
    // 1. First probe if something is actively listening and accepts connections
    const socket = new net.Socket();
    let hasConnected = false;

    socket.setTimeout(250);

    socket.on("connect", () => {
      hasConnected = true;
      socket.destroy();
      resolve(true); // Connected -> Port is IN USE
    });

    socket.on("timeout", () => {
      socket.destroy();
    });

    socket.on("error", () => {
      socket.destroy();
    });

    socket.on("close", () => {
      if (hasConnected) return;

      // 2. If no active connection accepted, test binding with exclusive: true
      const server = net.createServer();
      server.unref();

      server.once("error", () => {
        resolve(true); // Binding error -> Port is IN USE
      });

      server.once("listening", () => {
        server.close(() => {
          resolve(false); // Successfully bound and closed -> Port is FREE
        });
      });

      try {
        server.listen({ port, host: "0.0.0.0", exclusive: true });
      } catch {
        resolve(true);
      }
    });

    socket.connect(port, "127.0.0.1");
  });
}

async function findAvailablePort(startPort = 3000, maxAttempts = 50) {
  for (let port = startPort; port < startPort + maxAttempts; port++) {
    const inUse = await isPortInUse(port);
    if (!inUse) {
      return port;
    }
  }
  throw new Error(`Could not find an available port starting from ${startPort}`);
}

async function start() {
  const initialPort = Number(process.env.PORT) || 3000;
  const port = await findAvailablePort(initialPort);

  if (port !== initialPort) {
    console.log(`\x1b[33m⚡ Notice: Port ${initialPort} is in use (e.g. Docker container).`);
    console.log(`\x1b[32m✔ Automatically running Next.js on free port: http://localhost:${port}\x1b[0m\n`);
  }

  const isWindows = process.platform === "win32";
  const cmd = isWindows ? "npx.cmd" : "npx";
  const args = ["next", "dev", "-p", String(port), "-H", "0.0.0.0"];

  const child = spawn(cmd, args, {
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      PORT: String(port),
    },
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
    } else {
      process.exit(code ?? 0);
    }
  });

  const handleSignal = (signal) => {
    if (child && !child.killed) {
      child.kill(signal);
    }
  };

  process.on("SIGINT", () => handleSignal("SIGINT"));
  process.on("SIGTERM", () => handleSignal("SIGTERM"));
}

start().catch((err) => {
  console.error("Failed to start dev server:", err);
  process.exit(1);
});
