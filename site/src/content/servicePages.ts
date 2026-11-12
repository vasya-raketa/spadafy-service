import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Boxes,
  CalendarClock,
  ClipboardCheck,
  Cloud,
  Coins,
  DatabaseBackup,
  Fingerprint,
  Gauge,
  HardDrive,
  Headphones,
  Headset,
  Laptop,
  Layers,
  MonitorCheck,
  Network,
  Puzzle,
  RefreshCw,
  Route,
  Scale,
  Server,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  Timer,
  TrendingUp,
  UsersRound,
  Wallet,
} from "lucide-react";

// Service page content. Source: "service page.md" (lead, essence, customer pressures,
// details, CTA), verbatim; the overview line is copy.md Screen 7 (content/services.ts).
// Any string that starts with "[PLACEHOLDER" renders as a labelled placeholder block.
// Section headings are working titles: the source says its labels don't prescribe headings.

export type Item = { icon?: LucideIcon; title?: string; text: string };
export type Technology = { name: string; kind: "Platform" | "Partner"; note: string };
export type Option = { icon?: LucideIcon; title: string; text: string; bullets: string[] };

export type ServicePage = {
  slug: string;
  lead: string;
  essence: string;
  cta: string;
  /** Heading of the closing CTA row, when it differs from the CTA label */
  ctaHeadline?: string;
  /** Steps block straight under the hero (Health Check: the homepage CTA) */
  openingSteps?: { title: string; steps: Item[] };
  /** 2–3 recognizable problems ("Customer pressures") */
  pressures: Item[];
  capabilities: { title: string; items: Item[] };
  technologies: { title: string; intro?: string; items: Technology[]; placeholder?: string };
  options?: { title: string; items: Option[] };
  process?: { title: string; steps: Item[] };
  examples: { title: string; items: string[] };
  expect: { title: string; items: Item[]; note?: string };
  faqs?: { title: string; items: { q: string; a: string }[] };
};

export const isPlaceholder = (s: string) => s.startsWith("[PLACEHOLDER");

const techNote = "[PLACEHOLDER: what we cover with this technology, ~12 words]";
const placeholderOptions = (what: string) => ({
  title: "Service options", // working title, like the other section headings
  items: [1, 2].map((n) => ({
    title: `[PLACEHOLDER: option ${n} name]`,
    text: `[PLACEHOLDER: ${what} option ${n}, what it covers, ~20 words]`,
    bullets: ["[PLACEHOLDER: 3 inclusions, ~8 words each]"],
  })),
});
const placeholderExpect = {
  title: "What you can expect",
  items: [1, 2, 3, 4].map(() => ({ text: "[PLACEHOLDER: what customers can expect, ~15 words]" })),
};

const examples = (n: number) =>
  Array.from({ length: n }, () => "[PLACEHOLDER: approved project example: client type, challenge, outcome, ~25 words]");

export const servicePages: ServicePage[] = [
  {
    slug: "vdi-managed-services",
    lead: "Less time fixing. More time improving and building",
    essence: "IT needs a manageable way to support people, desktops and access, focusing on what’s next, not what’s broken.",
    cta: "Talk to a VDI expert",
    pressures: [
      { icon: RefreshCw, text: "Recurring desktop issues keep pulling the IT team away from strategic initiatives." },
      { icon: UsersRound, text: "Too much specialist knowledge depends on a few people." },
      { icon: Gauge, text: "Not enough engineering resources in general." },
    ],
    capabilities: {
      title: "What we take care of",
      items: [
        {
          icon: Layers,
          text: "Investigate issues across  the full stack not just VDI. E.g. desktop delivery, applications, profiles, endpoints, and supporting infrastructure.",
        },
        { text: "[PLACEHOLDER: capability from the Oct 30 technical document, ~20 words]" },
        { text: "[PLACEHOLDER: capability from the Oct 30 technical document, ~20 words]" },
      ],
    },
    technologies: {
      title: "Platforms we support",
      intro:
        "VDI platforms we support: Omnissa Horizon, Citrix, Azure Virtual Desktop, and Windows 365, with responsibilities matched to the platform.",
      items: [
        { name: "Omnissa Horizon", kind: "Platform", note: "[PLACEHOLDER: what we manage on this platform, ~12 words]" },
        { name: "Citrix", kind: "Platform", note: "[PLACEHOLDER: what we manage on this platform, ~12 words]" },
        { name: "Azure Virtual Desktop", kind: "Platform", note: "[PLACEHOLDER: what we manage on this platform, ~12 words]" },
        { name: "Windows 365", kind: "Platform", note: "[PLACEHOLDER: what we manage on this platform, ~12 words]" },
      ],
    },
    options: {
      title: "Two ways to work with us",
      items: [
        {
          icon: Headset,
          title: "Full Managed Services",
          text: "Full Managed Services covers agreed ongoing operations.",
          bullets: ["[PLACEHOLDER: 3 included operations from the other document, ~8 words each]"],
        },
        {
          icon: CalendarClock,
          title: "Retainer Services",
          text: "Retainer Services adds requested or scheduled engineering while the customer retains daily management.",
          bullets: ["[PLACEHOLDER: 3 typical retainer requests from the other document, ~8 words each]"],
        },
      ],
    },
    examples: { title: "In practice", items: examples(3) },
    expect: {
      title: "What you can expect",
      items: [
        { text: "[PLACEHOLDER: what customers can expect, e.g. onboarding, ~15 words]" },
        { text: "[PLACEHOLDER: what customers can expect, e.g. response and escalation, ~15 words]" },
        { text: "[PLACEHOLDER: what customers can expect, e.g. reporting cadence, ~15 words]" },
        { text: "[PLACEHOLDER: what customers can expect, e.g. dedicated team, ~15 words]" },
      ],
    },
    faqs: {
      title: "FAQs",
      items: Array.from({ length: 5 }, (_, i) => ({
        q: `[PLACEHOLDER: question ${i + 1}, ~10 words]`,
        a: "[PLACEHOLDER: answer from the Oct 30 technical document, ~40 words]",
      })),
    },
  },
  {
    slug: "free-vdi-health-check",
    lead: "Sometimes you just need another set of eyes.",
    essence:
      "We`ve spent years working in VDI and infrastructure environments of all shapes and sizes. Our free health check puts the experience to work with a quick review of your environment and the challenges you’re seeing.",
    cta: "Let’s talk",
    ctaHeadline: "It’s like they say, communication is key.",
    // "Top of page is the same as the health check CTA on the home page (three steps)":
    // copy.md Screen 10, verbatim.
    openingSteps: {
      title: "Are we good?", // the hero lead already carries "Sometimes you just need another set of eyes."
      steps: [
        {
          title: "Book a Free Consultation",
          text: "Let’s start with a conversation. We’ll learn about your environment, understand the challenges you’re facing and establish what you’d like to get out of the health check.",
        },
        {
          title: "Review Your Environment",
          text: "We’ll assess your existing VDI setup, looking at performance, configuration, capacity and potential areas of risk. We’ll document our findings so you have a clear picture of how things stand.",
        },
        {
          title: "Get a Clear View of What’s Next",
          text: "We’ll walk you through the findings, explain what’s working well and highlight the areas worth prioritizing. Then together we can discuss next steps!",
        },
      ],
    },
    pressures: [
      { icon: Timer, text: "Slow logons or failed connections are frustrating users." },
      { icon: Gauge, text: "Poor performance of desktops." },
    ],
    capabilities: {
      title: "What we review",
      items: [
        { icon: Activity, title: "Platform health", text: "Versions, compatibility, and component health." },
        { icon: SlidersHorizontal, title: "Desktop configuration", text: "Images, profiles, policies, and endpoint considerations." },
        {
          icon: MonitorCheck,
          title: "Performance and reliability",
          text: "Available monitoring, recurring alerts, connection failures, and reported performance issues.",
        },
        { icon: HardDrive, title: "Capacity and resources", text: "Observable capacity constraints and resource pressure." },
        {
          icon: ClipboardCheck,
          title: "Access and operations",
          text: "Maintenance practices and selected checks for desktop launch, logon, reconnect, and application availability.",
        },
      ],
    },
    technologies: {
      title: "Platforms in scope",
      items: [],
      placeholder: "[PLACEHOLDER: platforms the Health Check covers, one line each]",
    },
    process: {
      title: "How it works",
      steps: [
        {
          title: "Confirm the scope",
          text: "Agree on platforms, systems, priorities, available information, and access requirements before the review.",
        },
        { title: "Review the environment", text: "Examine the agreed configuration, monitoring data, and selected functions." },
        { title: "Discuss the findings", text: "Review priorities and next steps with our engineers." },
      ],
    },
    examples: { title: "In practice", items: examples(3) },
    expect: {
      title: "What you receive",
      items: [
        { text: "Environment summary and documented findings supported by available evidence." },
        { text: "Prioritized actions, including areas requiring further investigation." },
      ],
      note: "The Health Check uses available evidence within the agreed scope. Additional investigation or implementation is agreed separately.",
    },
  },
  {
    slug: "vdi-infrastructure",
    lead: "Work from anywhere. Stay connected everywhere.",
    essence:
      "A VDI refresh or new implementation affects everyone who relies on it. We help IT teams plan, build, and modernize the environment around their users, applications, and workspace.",
    cta: "Talk to a VDI infrastructure expert",
    pressures: [
      { icon: Server, text: "Growth or aging infrastructure is making the current environment harder to support." },
      { icon: Puzzle, text: "A platform change raises concerns about application compatibility or manufacturer support." },
      { icon: Network, text: "New VDI deployments can be complex." },
    ],
    capabilities: {
      title: "What we build",
      items: [
        { icon: Scale, text: "Design for workload demand, growth, availability, and the chosen on-premises or cloud model." },
        { icon: Layers, text: "Connect desktop delivery, images, profiles, and applications with compute, storage, and networking." },
        { icon: ClipboardCheck, text: "Plan pilots, validation, rollback or recovery, and administrator handoff." },
      ],
    },
    technologies: {
      title: "Platforms we support",
      items: [],
      placeholder: "[PLACEHOLDER: VDI platforms and on-premises / cloud models we design for, one line each]",
    },
    options: placeholderOptions("engagement"),
    examples: { title: "In practice", items: examples(3) },
    expect: placeholderExpect,
  },
  {
    slug: "healthcare-sso-authentication",
    lead: "Turn login time into patient time",
    essence:
      "Every login is a moment away from patient care. We design and implement Imprivata SSO around how clinicians actually work, reducing repeated logins and access steps so they can spend less time navigating technology and more time caring for patients.",
    cta: "Talk SSO with our experts",
    pressures: [
      { icon: Stethoscope, text: "Clinicians repeat sign-ins as they move between workstations and applications." },
      {
        icon: ShieldCheck,
        text: "IT must make access convenient across different systems while maintaining authentication requirements.",
      },
    ],
    capabilities: {
      title: "What we implement",
      items: [
        {
          icon: Fingerprint,
          text: "Implement Imprivata Enterprise Access Management for single sign-on and multifactor authentication.",
        },
        { icon: BadgeCheck, text: "Integrate supported badge access, desktop reconnect, and shared-workstation workflows." },
        { icon: ClipboardCheck, text: "Test workflows with clinical application owners and prepare administrators to support them." },
      ],
    },
    technologies: {
      title: "Technology we work with",
      items: [{ name: "Imprivata", kind: "Partner", note: techNote }],
      placeholder: "[PLACEHOLDER: supported clinical applications and VDI platforms, one line each]",
    },
    options: placeholderOptions("SSO"),
    examples: { title: "In practice", items: examples(3) },
    expect: placeholderExpect,
  },
  {
    slug: "igel-endpoint-solutions",
    lead: "Simplify the endpoint. Simplify the experience.",
    essence:
      "We help customers use IGEL to standardize endpoint management, extend the life of supported hardware, and keep the devices and peripherals people depend on working together.",
    cta: "Explore IGEL for your environment",
    pressures: [
      { icon: RefreshCw, text: "Routine updates and inconsistent settings consume time across a growing device fleet." },
      { icon: ShieldAlert, text: "Standard desktops are more vulnerable to security threats, IGEL is a hardened OS." },
      {
        icon: Wallet,
        text: "Clients want to save budget and extend the life of their endpoints, but they often struggle with peripherals like cameras, headsets, and printers.",
      },
    ],
    capabilities: {
      title: "What we deliver",
      items: [
        { icon: Laptop, text: "Evaluate IGEL OS on supported devices before a wider rollout." },
        { icon: Settings2, text: "Centralize configuration and updates through IGEL Universal Management Suite." },
        { icon: Headphones, text: "Validate desktop access, authentication, cameras, headsets, printers, and everyday workflows." },
      ],
    },
    technologies: {
      title: "Technology we work with",
      items: [
        { name: "IGEL OS", kind: "Platform", note: techNote },
        { name: "IGEL Universal Management Suite", kind: "Platform", note: techNote },
      ],
    },
    options: placeholderOptions("IGEL"),
    examples: { title: "In practice", items: examples(3) },
    expect: placeholderExpect,
  },
  {
    slug: "nerdio-solutions",
    lead: "Make AVD easier to manage and easier on your budget.",
    essence:
      "A growing AVD environment can put pressure on IT teams and budgets. We implement Nerdio to automate repetitive management tasks and scale capacity with demand, making the environment easier to support while helping control Azure compute costs.",
    cta: "Talk AVD + Nerdio with our experts",
    pressures: [
      {
        icon: Boxes,
        text: "Provisioning desktops, maintaining images, and managing applications leave little time for improvements.",
      },
      { icon: Coins, text: "Cloud resource use and costs are difficult to align with changing demand." },
    ],
    capabilities: {
      title: "What we set up",
      items: [
        {
          icon: Puzzle,
          text: "Implement Nerdio Manager for Enterprise with supported Azure Virtual Desktop, Windows 365, and Microsoft Intune integrations.",
        },
        { icon: TrendingUp, text: "Configure Azure Virtual Desktop autoscaling around demand and operating schedules." },
        {
          icon: Cloud,
          text: "Set up supported Cloud PC and application management, test the automation, and prepare administrators to run it.",
        },
      ],
    },
    technologies: {
      title: "Technology we work with",
      items: [
        { name: "Nerdio Manager for Enterprise", kind: "Partner", note: techNote },
        { name: "Azure Virtual Desktop", kind: "Platform", note: techNote },
        { name: "Windows 365", kind: "Platform", note: techNote },
        { name: "Microsoft Intune", kind: "Platform", note: techNote },
      ],
    },
    options: placeholderOptions("Nerdio"),
    examples: { title: "In practice", items: examples(3) },
    expect: placeholderExpect,
  },
  {
    slug: "hybrid-cloud-infrastructure-modernization",
    lead: "Modernize with purpose. Move forward with confidence.",
    essence:
      "We help IT leaders identify the right infrastructure changes, prioritize what matters, and create a practical path forward that protects business operations and maximizes existing investments.",
    cta: "Discuss your infrastructure modernization project",
    pressures: [
      { icon: TrendingUp, text: "Workloads are outgrowing existing infrastructure." },
      { icon: Coins, text: "Rapidly rising costs across hardware and software require optimization and consolidation." },
      { icon: Route, text: "Cloud, hardware, and recovery choices are complex and difficult to navigate." },
    ],
    capabilities: {
      title: "What we plan",
      items: [
        { icon: Scale, text: "Compare on-premises, cloud, and hybrid options against workload needs and existing investments." },
        { icon: Route, text: "Plan application dependencies, migration, validation, and rollback or recovery." },
        { icon: DatabaseBackup, text: "Design for capacity, availability, backup, and recovery requirements." },
      ],
    },
    technologies: {
      title: "Technology we work with",
      items: [],
      placeholder: "[PLACEHOLDER: cloud, hardware and recovery platforms we work with, one line each]",
    },
    options: placeholderOptions("modernization"),
    examples: { title: "In practice", items: examples(3) },
    expect: placeholderExpect,
  },
];

export const getServicePage = (slug: string) => servicePages.find((p) => p.slug === slug);
