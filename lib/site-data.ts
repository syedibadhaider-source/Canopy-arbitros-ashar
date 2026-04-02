export type NavItem = {
  label: string;
  href: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  overview: string;
  whyItMatters: string;
  includes: string[];
  process: ProcessStep[];
  forAudience: string[];
  faq: FAQ[];
  cta: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const credentials = [
  "ISA Certified Arborist",
  "TRAQ Qualified Professional",
  "ANSI A300 Aligned Practices",
  "Z133 Safety-Driven Operations",
  "Science-Based Diagnostics",
  "Detailed Reporting and Documentation",
];

export const methodologySteps: ProcessStep[] = [
  {
    title: "Site Evaluation",
    detail:
      "We review canopy condition, soil profile, structural form, and site constraints before defining scope.",
  },
  {
    title: "Diagnosis and Risk Review",
    detail:
      "Each recommendation is informed by species biology, defect analysis, target assessment, and hazard probability.",
  },
  {
    title: "Strategic Recommendations",
    detail:
      "You receive a clear, prioritized plan with preservation options, mitigation paths, and realistic timelines.",
  },
  {
    title: "Precision Arboriculture Work",
    detail:
      "Certified crews execute with modern techniques, disciplined safety protocols, and strict quality control.",
  },
  {
    title: "Ongoing Management",
    detail:
      "We monitor outcomes, adjust care cycles, and protect long-term tree performance across changing seasons.",
  },
];

export const whoWeServe = [
  "Residential properties and legacy homes",
  "Private estates and vineyard-adjacent grounds",
  "HOAs and managed communities",
  "Commercial campuses and hospitality sites",
  "Municipalities and public landscapes",
  "Construction and development teams",
];

export const serviceAreas = [
  {
    county: "Sonoma County",
    description:
      "Preservation-first care for residential, agricultural, and civic landscapes across diverse microclimates.",
    cities: ["Santa Rosa", "Healdsburg", "Sonoma", "Petaluma", "Sebastopol"],
  },
  {
    county: "Napa County",
    description:
      "High-touch arboricultural strategy for estates, vineyard properties, luxury hospitality, and heritage trees.",
    cities: ["Napa", "St. Helena", "Yountville", "Calistoga", "American Canyon"],
  },
  {
    county: "Marin County",
    description:
      "Advanced risk management and plant health care for premium residential neighborhoods and public sites.",
    cities: ["San Rafael", "Mill Valley", "Novato", "Larkspur", "Tiburon"],
  },
];

export const testimonials = [
  {
    quote:
      "Their report quality and risk communication were exceptional. We made better decisions with less uncertainty.",
    person: "Property Manager",
    context: "Historic Estate, Napa County",
  },
  {
    quote:
      "Canopy Arborists combines field precision with real scientific reasoning. It is a completely different level of service.",
    person: "HOA Board President",
    context: "Managed Community, Marin County",
  },
  {
    quote:
      "We appreciated the preservation-first mindset. The team protected major trees while reducing structural risk.",
    person: "Homeowner",
    context: "Residential Site, Sonoma County",
  },
];

export const globalFaq: FAQ[] = [
  {
    question: "Do you focus on removal or preservation?",
    answer:
      "Our default approach is preservation. Removal is recommended only when risk, decline, or project constraints make it the most responsible option.",
  },
  {
    question: "Do you provide written assessments and recommendations?",
    answer:
      "Yes. We provide clear documentation that can support owner decisions, permit pathways, and project planning.",
  },
  {
    question: "Can you coordinate with designers, contractors, or municipalities?",
    answer:
      "Absolutely. We routinely collaborate with project teams to align tree protection, safety, and long-term landscape objectives.",
  },
  {
    question: "Do you offer emergency response?",
    answer:
      "Yes. We provide priority response for hazardous tree conditions and storm-related incidents across our service area.",
  },
];

export const services: Service[] = [
  {
    slug: "tree-management-plans",
    title: "Tree Management Plans",
    kicker: "Long-range strategy",
    intro:
      "Portfolio-level planning for tree preservation, risk reduction, and measurable long-term stewardship.",
    overview:
      "We build practical, data-informed management plans that align biological needs with property priorities. Plans are structured for phased implementation and budget clarity.",
    whyItMatters:
      "Without a plan, tree decisions become reactive and expensive. A management roadmap protects canopy value while reducing avoidable failures and emergency costs.",
    includes: [
      "Inventory and condition profiling",
      "Priority ranking by risk and vitality",
      "Multi-year pruning and PHC scheduling",
      "Budget-conscious phasing strategy",
      "Documentation for owners and boards",
    ],
    process: [
      {
        title: "Baseline Inventory",
        detail: "Species, condition, age class, and immediate concerns are documented.",
      },
      {
        title: "Risk and Value Mapping",
        detail: "Trees are categorized by target exposure and landscape significance.",
      },
      {
        title: "Action Framework",
        detail: "Recommendations are sequenced into immediate, seasonal, and annual priorities.",
      },
    ],
    forAudience: [
      "Estate owners",
      "HOA boards",
      "Municipal managers",
      "Commercial portfolio operators",
    ],
    faq: [
      {
        question: "How often should management plans be updated?",
        answer:
          "Most sites benefit from annual review, with full updates every 2-3 years or after major weather events.",
      },
      {
        question: "Can plans support capital budgeting?",
        answer: "Yes. We structure recommendations with timeline tiers so costs can be phased responsibly.",
      },
    ],
    cta: "Plan your canopy strategy",
  },
  {
    slug: "tree-pruning-and-structural-training",
    title: "Tree Pruning and Structural Training",
    kicker: "Precision canopy architecture",
    intro:
      "Standards-aligned pruning for strength, clearance, longevity, and species-appropriate form.",
    overview:
      "Our pruning programs prioritize structural integrity and long-term vigor. Every cut is intentional, balancing immediate safety with future growth behavior.",
    whyItMatters:
      "Improper pruning can accelerate decline, create defects, and increase risk. Strategic structural training improves resilience and reduces future corrective work.",
    includes: [
      "Young tree structural training",
      "Crown cleaning and selective reduction",
      "Clearance and over-structure mitigation",
      "Restoration pruning for storm-damaged trees",
      "ANSI A300-aligned execution",
    ],
    process: [
      { title: "Crown Analysis", detail: "We identify competing leaders, weak attachments, and form defects." },
      {
        title: "Prescription",
        detail: "A pruning objective is defined by species, age, and site function.",
      },
      {
        title: "Precision Execution",
        detail: "Work is performed with strict cut quality and balanced canopy outcomes.",
      },
    ],
    forAudience: ["Residential clients", "Estates", "Commercial properties", "Municipal sites"],
    faq: [
      {
        question: "Do you top trees?",
        answer: "No. Topping is not a best practice and can significantly increase failure risk and decline.",
      },
      {
        question: "When is pruning season?",
        answer:
          "Timing depends on species, objective, and disease pressure. We schedule windows for best biological outcomes.",
      },
    ],
    cta: "Book a structural pruning consultation",
  },
  {
    slug: "plant-health-care-programs",
    title: "Plant Health Care Programs",
    kicker: "Preventive and corrective care",
    intro:
      "Science-based PHC programs designed to improve vigor, stress tolerance, and pest resilience.",
    overview:
      "Our PHC programs integrate monitoring, soil-informed nutrition strategy, and targeted interventions to sustain tree performance over time.",
    whyItMatters:
      "Most tree decline begins below the surface and progresses gradually. Proactive PHC catches stress early and protects long-term canopy value.",
    includes: [
      "Health diagnostics and trend tracking",
      "Nutrient and soil amendment strategy",
      "Integrated pest and disease management",
      "Seasonal care cycles",
      "Performance reporting",
    ],
    process: [
      {
        title: "Baseline Diagnostics",
        detail: "We assess canopy, trunk, root-zone indicators, and environmental stressors.",
      },
      {
        title: "Program Design",
        detail: "A seasonal plan is built around species biology and site conditions.",
      },
      {
        title: "Monitoring and Adjustment",
        detail: "Care actions are refined as tree response and climate conditions shift.",
      },
    ],
    forAudience: ["High-value residential sites", "Estates", "Commercial campuses", "Municipal grounds"],
    faq: [
      {
        question: "Is PHC only for unhealthy trees?",
        answer:
          "No. Preventive care is often the most effective way to avoid decline and protect mature trees.",
      },
      {
        question: "Do programs run year-round?",
        answer: "Yes. We align care windows with biological cycles and local seasonal stress patterns.",
      },
    ],
    cta: "Start a plant health care program",
  },
  {
    slug: "tree-risk-assessment",
    title: "Tree Risk Assessment",
    kicker: "Objective risk intelligence",
    intro:
      "Structured risk assessments for informed decisions, liability reduction, and targeted mitigation.",
    overview:
      "We evaluate failure likelihood, target exposure, and consequence potential using accepted arboricultural methodologies.",
    whyItMatters:
      "Risk cannot be eliminated, but it can be managed responsibly. Assessment-driven action reduces uncertainty and protects people, property, and assets.",
    includes: [
      "Defect and structural condition analysis",
      "Target occupancy review",
      "TRAQ-informed risk categorization",
      "Mitigation recommendations",
      "Documentation suitable for stakeholders",
    ],
    process: [
      {
        title: "Visual and Site Assessment",
        detail: "Observed defects and site context are documented in detail.",
      },
      {
        title: "Risk Categorization",
        detail: "Likelihood and consequence are evaluated through a structured framework.",
      },
      {
        title: "Mitigation Plan",
        detail: "Action options are ranked by urgency and impact.",
      },
    ],
    forAudience: ["Homeowners", "HOAs", "Commercial owners", "Municipal teams"],
    faq: [
      {
        question: "Can a risk assessment support insurance or legal documentation?",
        answer: "Yes. We provide clear professional reporting for decision records and risk discussions.",
      },
      {
        question: "How long does an assessment take?",
        answer:
          "Timelines vary by scope, but many site-level assessments are completed quickly with formal follow-up documentation.",
      },
    ],
    cta: "Request a risk assessment",
  },
  {
    slug: "tree-removal",
    title: "Tree Removal",
    kicker: "Responsible resolution",
    intro:
      "Safe, controlled removal for trees that present unacceptable risk or irreversible decline.",
    overview:
      "When preservation is no longer responsible, we execute removals with meticulous planning, safety discipline, and site protection.",
    whyItMatters:
      "Delayed removal of a compromised tree can escalate hazard and cost. Professional execution protects adjacent structures, utilities, and landscapes.",
    includes: [
      "Risk-based removal recommendations",
      "Technical dismantling and rigging",
      "Site and structure protection planning",
      "Debris management and cleanup",
      "Replanting guidance when appropriate",
    ],
    process: [
      {
        title: "Removal Feasibility Review",
        detail: "Access, hazards, and constraints are mapped before work starts.",
      },
      {
        title: "Safety and Rigging Plan",
        detail: "A controlled dismantling sequence is defined for minimal site impact.",
      },
      {
        title: "Execution and Closure",
        detail: "Removal is completed with full cleanup and post-work recommendations.",
      },
    ],
    forAudience: ["Residential properties", "Estates", "Commercial sites", "Municipal grounds"],
    faq: [
      {
        question: "Do you remove healthy trees?",
        answer:
          "Only when site constraints or project requirements justify removal. We prioritize alternatives whenever feasible.",
      },
      {
        question: "Can you assist with permit-related requirements?",
        answer: "Yes. We can support documentation and advisory input for applicable local review pathways.",
      },
    ],
    cta: "Discuss responsible removal options",
  },
  {
    slug: "root-zone-and-soil-management",
    title: "Root Zone and Soil Management",
    kicker: "Below-ground performance",
    intro:
      "Soil and root-zone interventions that directly support canopy stability, vigor, and drought resilience.",
    overview:
      "Healthy roots and functional soil structure are foundational to tree longevity. We address compaction, oxygen availability, and moisture dynamics through targeted remediation.",
    whyItMatters:
      "Many visible tree problems begin underground. Root-zone care often delivers the highest long-term return for mature tree preservation.",
    includes: [
      "Root-zone diagnostics",
      "Compaction mitigation strategies",
      "Organic matter and soil profile improvements",
      "Mulch and moisture management guidance",
      "Construction impact mitigation recommendations",
    ],
    process: [
      {
        title: "Root and Soil Assessment",
        detail: "We evaluate disturbance patterns, grade, texture, and moisture dynamics.",
      },
      {
        title: "Remediation Design",
        detail: "Interventions are selected to improve root function without unnecessary disruption.",
      },
      {
        title: "Implementation and Follow-Up",
        detail: "Work is phased and monitored to ensure measurable tree response.",
      },
    ],
    forAudience: ["Tree owners", "Landscape managers", "Construction teams", "Municipal planners"],
    faq: [
      {
        question: "Can soil issues really affect structural safety?",
        answer:
          "Yes. Root dysfunction can reduce anchorage and increase stress response, especially during weather events.",
      },
      {
        question: "Is root-zone care a one-time service?",
        answer: "It is often staged over time for best biological and structural outcomes.",
      },
    ],
    cta: "Assess your root-zone conditions",
  },
  {
    slug: "emergency-tree-services",
    title: "Emergency Tree Services",
    kicker: "Rapid hazard response",
    intro:
      "Urgent response for storm damage, partial failures, and high-risk tree conditions.",
    overview:
      "Our emergency team stabilizes hazardous situations quickly while protecting people, structures, and critical access points.",
    whyItMatters:
      "In emergency scenarios, speed without structure can increase danger. Professional triage and disciplined execution reduce exposure.",
    includes: [
      "Priority hazard triage",
      "Storm damage mitigation",
      "Temporary stabilization where viable",
      "Controlled emergency removals",
      "Post-event risk and recovery recommendations",
    ],
    process: [
      {
        title: "Rapid Intake",
        detail: "We gather critical site details and assess immediate hazards.",
      },
      {
        title: "On-Site Stabilization",
        detail: "Immediate actions focus on life safety and property protection.",
      },
      {
        title: "Recovery Planning",
        detail: "We define next-step restoration, pruning, or removal strategy.",
      },
    ],
    forAudience: ["Homeowners", "Property managers", "Commercial operators", "Municipal responders"],
    faq: [
      {
        question: "What qualifies as a tree emergency?",
        answer:
          "Any condition with immediate potential to harm people, structures, or access routes, including storm-compromised trees.",
      },
      {
        question: "Do you provide follow-up recommendations after emergency work?",
        answer:
          "Yes. We provide practical recovery guidance so urgent work transitions into a long-term management plan.",
      },
    ],
    cta: "Request emergency response",
  },
  {
    slug: "consulting-and-expert-services",
    title: "Consulting and Expert Services",
    kicker: "High-value advisory",
    intro:
      "Professional arboricultural consulting for projects requiring technical clarity and defensible recommendations.",
    overview:
      "We support clients, design teams, and legal or insurance stakeholders with evidence-based analysis and clear communication.",
    whyItMatters:
      "High-stakes decisions around trees affect safety, liability, permitting, and project outcomes. Expert guidance improves confidence and reduces costly missteps.",
    includes: [
      "Construction impact assessments",
      "Tree protection planning",
      "Permit and entitlement support",
      "Insurance-related evaluations",
      "Expert opinion and professional documentation",
    ],
    process: [
      {
        title: "Scope Alignment",
        detail: "We define objectives, audiences, and required documentation standards.",
      },
      {
        title: "Technical Evaluation",
        detail: "Site conditions and project implications are reviewed with professional rigor.",
      },
      {
        title: "Advisory Delivery",
        detail: "Recommendations are communicated in clear, decision-ready language.",
      },
    ],
    forAudience: ["Architects", "Developers", "Attorneys", "Insurance teams", "Municipal reviewers"],
    faq: [
      {
        question: "Can you coordinate with project consultants?",
        answer:
          "Yes. We collaborate closely with design, engineering, and entitlement teams to support practical outcomes.",
      },
      {
        question: "Do you provide neutral third-party evaluations?",
        answer: "Yes. We can provide objective technical assessments and recommendations.",
      },
    ],
    cta: "Schedule a consulting briefing",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
