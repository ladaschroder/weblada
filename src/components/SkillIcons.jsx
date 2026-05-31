import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiShopify,
  SiWix,
  SiMailchimp,
  SiMeta,
} from "react-icons/si"

export function PhotoshopIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="8" fill="#001E36" />
      <text x="25" y="34" fontSize="18" fontWeight="bold" fill="#31A8FF" textAnchor="middle" fontFamily="Arial, sans-serif">Ps</text>
    </svg>
  )
}

export function AnimateIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="8" fill="#00005B" />
      <text x="25" y="34" fontSize="18" fontWeight="bold" fill="#9DB8FF" textAnchor="middle" fontFamily="Arial, sans-serif">An</text>
    </svg>
  )
}

export function InDesignIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="8" fill="#49021F" />
      <text x="25" y="34" fontSize="18" fontWeight="bold" fill="#FF3366" textAnchor="middle" fontFamily="Arial, sans-serif">Id</text>
    </svg>
  )
}

export function IllustratorIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="8" fill="#310000" />
      <text x="25" y="34" fontSize="18" fontWeight="bold" fill="#FF9A00" textAnchor="middle" fontFamily="Arial, sans-serif">Ai</text>
    </svg>
  )
}

export function WordIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="6" fill="#2B579A" />
      <text x="26" y="35" fontSize="26" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">W</text>
    </svg>
  )
}

export function ExcelIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="6" fill="#217346" />
      <text x="25" y="35" fontSize="26" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">X</text>
    </svg>
  )
}

export function PowerPointIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <rect width="50" height="50" rx="6" fill="#B7472A" />
      <text x="25" y="35" fontSize="26" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">P</text>
    </svg>
  )
}

export function FigmaIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 38 57">
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#A259FF" />
      <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE" />
    </svg>
  )
}

export function WixIcon() {
  return <SiWix size={50} color="#000000" />
}

export function ShopifyIcon() {
  return <SiShopify size={50} color="#96BF48" />
}

export function VSCodeIcon() {
  return (
    <svg width="50" height="50" viewBox="-3 -3 30 30" fill="none">
      <rect x="-3" y="-3" width="30" height="30" rx="4" fill="#007ACC" />
      <path
        fillRule="evenodd"
        d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zM20.13 18.5L12.625 12 20.13 5.5V18.5z"
        fill="white"
      />
    </svg>
  )
}

export function HTMLIcon() {
  return <SiHtml5 size={50} color="#E34F26" />
}

export function CSSIcon() {
  return <SiCss size={50} color="#1572B6" />
}

export function JavaScriptIcon() {
  return <SiJavascript size={50} color="#F7DF1E" />
}

export function MailChimpIcon() {
  return <SiMailchimp size={50} color="#FFE01B" />
}

export function ReactIcon() {
  return <SiReact size={50} color="#61DAFB" />
}

export function MetaIcon() {
  return <SiMeta size={50} color="#0082FB" />
}
