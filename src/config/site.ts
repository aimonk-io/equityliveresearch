/**
 * Equity Live Research — single source of truth for company details and
 * all page content. Mirrors the approved Claude Design
 * (EquityLiveResearch.dc.html). Replace the placeholder contact
 * values (phone, email, office) before launch.
 *
 * Compliance rule for all copy: returns are always "expected" and
 * market-linked — never "guaranteed" or "assured".
 */

export const siteConfig = {
  name: "EquityLiveResearch",
  legalName: "EquityLiveResearch",
  url: "https://equityliveresearch.com",
  tagline: "Indian Equity Research",
  description:
    "Disciplined, research-driven equity investment and portfolio advisory for the Indian markets — institutional-grade research, transparent reporting and rigorous risk management.",

  // ── Contact (placeholders — fill before launch) ─────────────────────
  phone: "+919800000000",
  phoneDisplay: "+91 98XXX XXXXX",
  phoneHours: "Mon–Sat, 9:30 AM – 6:00 PM IST",
  email: "hello@equityliveresearch.com",
  websiteDisplay: "equityliveresearch.com",
  officeCity: "Mumbai, Maharashtra",
  officeCountry: "India",
} as const;

export const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "plans", label: "Plans", href: "/plans" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export const ticker = [
  { sym: "NIFTY 50", price: "24,318", chg: "+0.62%", up: true },
  { sym: "SENSEX", price: "79,940", chg: "+0.55%", up: true },
  { sym: "BANK NIFTY", price: "52,110", chg: "-0.21%", up: false },
  { sym: "RELIANCE", price: "2,984", chg: "+1.14%", up: true },
  { sym: "HDFC BANK", price: "1,678", chg: "+0.38%", up: true },
  { sym: "INFOSYS", price: "1,842", chg: "-0.44%", up: false },
  { sym: "TCS", price: "3,910", chg: "+0.27%", up: true },
  { sym: "ICICI BANK", price: "1,205", chg: "+0.71%", up: true },
  { sym: "ITC", price: "452", chg: "-0.12%", up: false },
  { sym: "L&T", price: "3,588", chg: "+0.93%", up: true },
] as const;

export const snapshot = [
  { name: "NIFTY 50", val: "24,318", chg: "+0.62%", up: true },
  { name: "Sensex", val: "79,940", chg: "+0.55%", up: true },
  { name: "India VIX", val: "12.8", chg: "-2.10%", up: false },
  { name: "Gold (10g)", val: "₹72,540", chg: "+0.34%", up: true },
] as const;

export const stats = [
  { target: 12, suffix: "+", label: "Years of market research", kind: "int" },
  { target: 3200, suffix: "+", label: "Investors served", kind: "int" },
  { target: 480, suffix: "+", label: "Research reports / year", kind: "int" },
  { target: 4.8, suffix: "/5", label: "Average client rating", kind: "float" },
] as const;

export const services = [
  {
    no: "01",
    title: "Indian Equity Market Research",
    desc: "Fundamental, bottom-up research on NSE & BSE listed companies — sector studies, earnings analysis and valuation-driven ideas.",
    points: [
      "Company & sector deep-dives",
      "Earnings and results tracking",
      "Valuation & thesis notes",
    ],
  },
  {
    no: "02",
    title: "Portfolio Strategy",
    desc: "A portfolio built around your goals, horizon and risk appetite — diversified across market caps and sectors.",
    points: [
      "Goal-based asset mix",
      "Diversification across caps",
      "Periodic rebalancing",
    ],
  },
  {
    no: "03",
    title: "Risk Management",
    desc: "Position sizing, stop-loss discipline and exposure limits so a single call never dictates your outcome.",
    points: [
      "Position sizing rules",
      "Downside & drawdown control",
      "Exposure monitoring",
    ],
  },
  {
    no: "04",
    title: "Investment Planning",
    desc: "A clear roadmap that aligns your equity investments with life goals, cash-flow needs and time horizon.",
    points: [
      "Goal & horizon mapping",
      "Systematic entry planning",
      "Review & course-correction",
    ],
  },
] as const;

export const whyUs = [
  { n: "01", title: "Research-driven", desc: "Every call backed by analysis, not tips or momentum." },
  { n: "02", title: "Risk-managed", desc: "Professional risk controls on every position." },
  { n: "03", title: "Transparent", desc: "Honest, jargon-free reporting you can verify." },
  { n: "04", title: "Dedicated support", desc: "A named advisor who knows your goals." },
] as const;

export const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "Finally a research firm that explains the why behind every call. My portfolio feels managed, not gambled.",
    name: "Ananya Iyer",
    role: "Retail investor, Bengaluru",
    initial: "A",
  },
  {
    stars: "★★★★★",
    quote:
      "The risk management is what won me over. Transparent reporting and no unrealistic promises.",
    name: "Vikram Desai",
    role: "HNI investor, Mumbai",
    initial: "V",
  },
  {
    stars: "★★★★★",
    quote:
      "As a first-time investor I never felt lost. The consultations are patient and genuinely educational.",
    name: "Priya Nair",
    role: "New investor, Pune",
    initial: "P",
  },
] as const;

export const values = [
  { n: "01", title: "Integrity first", desc: "No conflicts, no hidden incentives — your interest leads every decision." },
  { n: "02", title: "Radical transparency", desc: "Clear reporting on performance, costs and risks, always." },
  { n: "03", title: "Research over noise", desc: "Decisions come from analysis, never from market chatter." },
  { n: "04", title: "Long-term partnership", desc: "We measure success by client outcomes over cycles, not quarters." },
] as const;

export const process = [
  { step: "01", title: "Client Consultation", desc: "We understand your goals, income, existing holdings and expectations." },
  { step: "02", title: "Risk Assessment", desc: "We profile your risk appetite and capacity to define suitable exposure." },
  { step: "03", title: "Research & Analysis", desc: "Our desk shortlists opportunities through fundamental research." },
  { step: "04", title: "Portfolio Allocation", desc: "We construct a diversified portfolio aligned to your plan." },
  { step: "05", title: "Regular Monitoring", desc: "Positions are tracked continuously against our risk framework." },
  { step: "06", title: "Performance Review", desc: "Periodic reviews with transparent reporting and rebalancing." },
] as const;

export type PlanVariant = "light" | "soon" | "featured";

export const plans: {
  name: string;
  ret: string;
  duration: string;
  featured: boolean;
  disabled: boolean;
  note: string;
  cta: string;
  variant: PlanVariant;
}[] = [
  {
    name: "Monthly",
    ret: "3%",
    duration: "1 Month",
    featured: false,
    disabled: false,
    note: "Ideal for investors who want to start with a short commitment.",
    cta: "Enquire",
    variant: "light",
  },
  {
    name: "Quarterly",
    ret: "Soon",
    duration: "Coming soon",
    featured: false,
    disabled: true,
    note: "This plan is being restructured and will be available shortly.",
    cta: "Coming soon",
    variant: "soon",
  },
  {
    name: "Half-Yearly",
    ret: "4%",
    duration: "6 Months",
    featured: false,
    disabled: false,
    note: "A balanced horizon for compounding through market cycles.",
    cta: "Enquire",
    variant: "light",
  },
  {
    name: "Yearly",
    ret: "5%",
    duration: "12 Months",
    featured: true,
    disabled: false,
    note: "Our most popular plan — the full benefit of a disciplined annual strategy.",
    cta: "Enquire",
    variant: "featured",
  },
];

export const faqs = [
  {
    q: "Are the expected returns guaranteed?",
    a: "No. Expected returns are indicative figures based on historical market performance. They are not guaranteed and actual returns depend on prevailing market conditions. Investments in securities are subject to market risks.",
  },
  {
    q: "Are you SEBI Registered?",
    a: "No. We are currently not registered with SEBI. Our services are intended for educational and market research purposes only and do not constitute personalized investment advice.",
  },
  {
    q: "Who are your services suitable for?",
    a: "We work with retail investors, first-time investors, active traders and high-net-worth individuals across India. Every portfolio is tailored to your goals and risk profile.",
  },
  {
    q: "How do you manage risk?",
    a: "Through disciplined position sizing, exposure limits, diversification and continuous monitoring against a defined risk framework — so no single position dictates your outcome.",
  },
  {
    q: "How will I receive updates?",
    a: "You get regular portfolio reviews, transparent performance reporting and a dedicated advisor you can reach directly for any query.",
  },
] as const;

export const values_about = {
  lead: "EquityLiveResearch is an India-focused equity research and portfolio advisory firm. We serve retail investors, first-time investors, active traders and high-net-worth individuals who want their capital managed with an institutional standard of rigour.",
  body: "Our work begins and ends with research. Every recommendation is grounded in fundamental analysis, risk assessment and a clear investment thesis — never on tips, momentum chasing or unverified information. We believe the best returns come from a repeatable process, honest reporting, and staying invested through cycles.",
  mission:
    "To make institutional-quality equity research accessible to every serious Indian investor, and to grow client wealth responsibly through a transparent, process-driven approach.",
  vision:
    "To be India's most trusted independent equity research partner — known not for loud predictions, but for consistency, integrity and long-term client outcomes.",
  promise:
    "No hidden costs, no guaranteed-return claims, no conflicts of interest. Just clear research, honest risk disclosure and a portfolio built around your goals.",
} as const;

export const contactRows = [
  { label: "Phone", value: siteConfig.phoneDisplay, sub: siteConfig.phoneHours },
  { label: "Email", value: siteConfig.email, sub: "We reply within one business day" },
  { label: "Website", value: siteConfig.websiteDisplay, sub: "Research notes & client portal" },
  { label: "Office", value: siteConfig.officeCity, sub: siteConfig.officeCountry },
] as const;

export const riskDisclosures = [
  "Investments in securities are subject to market risks. Read all related documents carefully before investing.",
  "Past performance is not indicative of and does not guarantee future returns or performance.",
  "Expected returns depend on prevailing market conditions and are not assured. No profit is guaranteed.",
  "EquityLiveResearch is not currently SEBI registered. Content is for educational and market research purposes only and does not constitute personalized investment advice.",
] as const;

export const interestOptions = [
  "General consultation",
  "Monthly Plan",
  "Half-Yearly Plan",
  "Yearly Plan",
  "Portfolio review",
] as const;
