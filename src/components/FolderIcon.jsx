export default function FolderIcon({ isOpen, uid }) {
  return (
    <svg viewBox="0 0 100 80" width="100" height="80" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={`back-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B9FE2" />
          <stop offset="100%" stopColor="#3570BE" />
        </linearGradient>
        <linearGradient id={`front-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#93C8FC" />
          <stop offset="100%" stopColor="#5096DF" />
        </linearGradient>
        <linearGradient id={`tab-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5B9FE2" />
          <stop offset="100%" stopColor="#4A88D0" />
        </linearGradient>
      </defs>

      <path
        d="M15 20 L80 20 Q85 20 85 25 L85 70 Q85 75 80 75 L20 75 Q15 75 15 70 L15 20 Z"
        fill={`url(#back-${uid})`}
      />
      <path
        d="M15 20 L15 14 Q15 11 18 11 L29 11 Q33 11 34 14 L36 20 Z"
        fill={`url(#tab-${uid})`}
      />

      <g style={{
        transform: isOpen ? "translateY(-4px)" : "translateY(0px)",
        transition: "transform 0.28s ease-out",
      }}>
        <rect x="17" y="24" width="66" height="50" rx="3" fill="white" stroke="#CCCCCC" strokeWidth="0.5" />
        <line x1="22" y1="34" x2="78" y2="34" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="42" x2="78" y2="42" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="50" x2="62" y2="50" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      <g style={{
        transformOrigin: "50px 75px",
        transform: isOpen ? "scaleY(0.82)" : "scaleY(1)",
        transition: "transform 0.28s ease",
      }}>
        <rect x="15" y="25" width="70" height="50" rx="5" fill={`url(#front-${uid})`} />
        <rect x="17" y="26" width="66" height="7" rx="3" fill="rgba(255,255,255,0.3)" />
      </g>
    </svg>
  )
}
