// Lightweight inline SVG icons (stroke style, currentColor).

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ size = 20, children, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
      {children}
    </svg>
  );
}

export const IconHome = (p) => (
  <Svg {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
  </Svg>
);

export const IconMenu = (p) => (
  <Svg {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Svg>
);

export const IconClose = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const IconSpeaker = (p) => (
  <Svg {...p}>
    <path d="M11 5 6 9H3v6h3l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
  </Svg>
);

export const IconBook = (p) => (
  <Svg {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5z" />
    <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5" />
  </Svg>
);

export const IconUsers = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" />
    <path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M17.5 15.4c2 .7 3.5 2.3 4 4.6" />
  </Svg>
);

export const IconSubject = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M7 9h6M7 12.5h10" />
  </Svg>
);

export const IconExam = (p) => (
  <Svg {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 3.5V2h6v1.5" />
    <path d="m8.5 12 2 2 4-4.5" />
  </Svg>
);

export const IconQuestion = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.8.3-.9.9-.9 1.7" />
    <path d="M12 17h.01" />
  </Svg>
);

export const IconPlay = (p) => (
  <Svg {...p}>
    <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" strokeWidth="0" />
  </Svg>
);

export const IconChevronRight = (p) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

export const IconArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Svg>
);

export const IconArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" />
  </Svg>
);

export const IconStar = (p) => (
  <Svg {...p}>
    <path
      d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6L3.2 9.4l6.1-.9L12 3z"
      fill="currentColor"
      strokeWidth="0"
    />
  </Svg>
);

export const IconCheckCircle = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" fill="currentColor" strokeWidth="0" />
    <path d="m8.2 12.2 2.4 2.4 5-5" stroke="#fff" strokeWidth="2.2" />
  </Svg>
);

export const IconMail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Svg>
);

export const IconPhone = (p) => (
  <Svg {...p}>
    <path d="M5 3.8h3.2l1.5 4-2 1.4a12 12 0 0 0 5.1 5.1l1.4-2 4 1.5V17c0 1.8-1.5 3.2-3.3 3A15.5 15.5 0 0 1 4.8 7.1C4.7 5.3 5.5 3.8 5 3.8z" />
  </Svg>
);

export const IconMapPin = (p) => (
  <Svg {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const IconFacebook = (p) => (
  <Svg {...p}>
    <path
      d="M14 8.5V7c0-.8.4-1.2 1.3-1.2H17V3h-2.3C11.9 3 11 4.6 11 6.8v1.7H9V11h2v10h3V11h2.2l.4-2.5H14z"
      fill="currentColor"
      strokeWidth="0"
    />
  </Svg>
);

export const IconYouTube = (p) => (
  <Svg {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="currentColor" strokeWidth="0" />
    <path d="M10.2 9.4v5.2l4.6-2.6-4.6-2.6z" fill="#0b1329" strokeWidth="0" />
  </Svg>
);

export const IconChat = (p) => (
  <Svg {...p}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-5 4V5.5z" />
    <path d="M8 9h8M8 12h5" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 3 5 6v5.5c0 4.4 3 7.7 7 9.5 4-1.8 7-5.1 7-9.5V6l-7-3z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const IconCalendar = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Svg>
);

export const IconEye = (p) => (
  <Svg {...p}>
    <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="2.8" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const IconFolder = (p) => (
  <Svg {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </Svg>
);

export const IconTag = (p) => (
  <Svg {...p}>
    <path d="M3 11.5V4.5A1.5 1.5 0 0 1 4.5 3h7l9 9-8.5 8.5-9-9z" />
    <circle cx="7.8" cy="7.8" r="1.4" fill="currentColor" strokeWidth="0" />
  </Svg>
);

export const IconPhoneAndroid = (p) => (
  <Svg {...p}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M10.8 18.6h2.4" />
  </Svg>
);

export const IconDownload = (p) => (
  <Svg {...p}>
    <path d="M12 4v10M8 10.5l4 4 4-4" />
    <path d="M4.5 19.5h15" />
  </Svg>
);

export const IconBolt = (p) => (
  <Svg {...p}>
    <path d="M13 2.5 5 13.5h6L10.5 21.5 19 10.5h-6l.5-8z" fill="currentColor" strokeWidth="0" />
  </Svg>
);

export const IconUser = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5c1-3.6 3.9-5.5 7.5-5.5s6.5 1.9 7.5 5.5" />
  </Svg>
);

export const IconLock = (p) => (
  <Svg {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
  </Svg>
);
