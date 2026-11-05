// Screen 7 of copy.md, verbatim. Slugs follow DESIGN_BRIEF.md §4.

export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "vdi-managed-services",
    title: "VDI Managed Services",
    description:
      "Ongoing management or retained engineering for Omnissa Horizon, Citrix, Azure Virtual Desktop, and Windows 365. Choose Full Managed Services or a Retainer, with a dedicated team that knows your environment.",
  },
  {
    slug: "free-vdi-health-check",
    title: "Free VDI Health Check",
    description:
      "A free engineering review of your virtual desktop environment. We assess platform health, configuration, performance, and capacity, then deliver prioritized findings and a readout with our engineers.",
  },
  {
    slug: "vdi-infrastructure",
    title: "VDI Infrastructure",
    description:
      "Design, deploy, migrate, and modernize virtual desktop environments across on-premises, cloud, and hybrid. Architecture is sized to your users and applications, and we finish with validation and operational handoff.",
  },
  {
    slug: "healthcare-sso-authentication",
    title: "Healthcare SSO and Authentication",
    description:
      "Imprivata Enterprise Access Management implemented around clinical workflows. We cover single sign-on, authentication, badge access, and shared workstations across clinical applications and virtual desktops.",
  },
  {
    slug: "igel-endpoint-solutions",
    title: "IGEL Endpoint Solutions",
    description:
      "Evaluate, deploy, and manage IGEL endpoints for virtual desktops and applications. We validate devices and workflows, reuse suitable hardware, and centralize configuration with IGEL Universal Management Suite.",
  },
  {
    slug: "nerdio-solutions",
    title: "Nerdio Solutions",
    description:
      "Evaluate, deploy, and configure Nerdio Manager for Enterprise for Azure Virtual Desktop, Windows 365, and Intune. We automate provisioning, image management, and AVD autoscaling for your Microsoft desktops.",
  },
  {
    slug: "hybrid-cloud-infrastructure-modernization",
    title: "Hybrid Cloud & Infrastructure Modernization",
    description:
      "Refresh infrastructure, integrate cloud services, and migrate workloads with confidence. We plan workload placement, connectivity, availability, and recovery around your applications and existing investments.",
  },
];

export const healthCheck = services[1];
export const serviceHref = (s: Service) => `/services/${s.slug}`;
