import React from "react";

export function YoutubeIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function WhatsappIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.2.3-.776.979-.952 1.18-.175.2-.351.226-.652.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.672-2.08-.175-.3-.019-.462.132-.612.136-.135.301-.351.451-.527.151-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.633-.927-2.235-.244-.587-.492-.507-.677-.517l-.577-.01c-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.507 0 1.479 1.078 2.908 1.228 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.9.12.58-.087 1.78-.727 2.03-1.429.251-.702.251-1.304.176-1.429-.076-.126-.276-.201-.577-.352zm-5.467 7.618h-.005a9.92 9.92 0 0 1-5.06-1.39l-.363-.215-3.76.986 1.003-3.665-.236-.375a9.927 9.927 0 0 1-1.521-5.266c0-5.485 4.464-9.948 9.953-9.948 2.656 0 5.153 1.035 7.03 2.911a9.882 9.882 0 0 1 2.91 7.037c0 5.487-4.464 9.951-9.951 9.951zm8.435-18.384A11.85 11.85 0 0 0 12.005 0C5.385 0 0 5.385 0 12.007c0 2.116.553 4.184 1.603 6.007L0 24l6.168-1.618a11.97 11.97 0 0 0 5.837 1.503h.005c6.62 0 12.005-5.385 12.005-12.007 0-3.208-1.25-6.223-3.575-8.502z" />
    </svg>
  );
}

export function XIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
