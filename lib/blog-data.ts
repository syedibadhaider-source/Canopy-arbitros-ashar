export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: Array<{
    heading: string;
    content: string;
  }>;
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "tree-risk-assessment-guide-sonoma-napa-marin",
    title: "Tree Risk Assessment Guide for Sonoma, Napa, and Marin Properties",
    excerpt:
      "A practical decision framework for evaluating tree risk without overreacting to normal defects.",
    category: "Risk Management",
    publishedAt: "April 2, 2026",
    readTime: "7 min read",
    image: "/tree-risk-assessment-card.png",
    imageAlt: "Arborist assessing mature tree structure in a residential setting",
    intro:
      "Most owners ask the same question: Is this tree dangerous right now? The right answer comes from structured assessment, not visual guesswork. Risk is the relationship between defect severity, target exposure, and likely failure mode.",
    sections: [
      {
        heading: "Start with target exposure",
        content:
          "A tree over a low-use landscape is managed differently than a tree over a driveway, play area, or occupied structure. Before deciding on removal or mitigation, evaluate what can be hit, how often, and with what consequence.",
      },
      {
        heading: "Differentiate defect from emergency",
        content:
          "Included bark, deadwood, or a cavity may be concerning, but concern does not always equal immediate failure risk. A qualified TRAQ-informed assessment distinguishes manageable conditions from urgent hazards.",
      },
      {
        heading: "Use phased mitigation where possible",
        content:
          "Many high-concern trees can be stabilized with canopy load reduction, pruning strategy, cable/bracing options, or occupancy management. Preservation-first planning often reduces risk while retaining long-term canopy value.",
      },
    ],
    takeaways: [
      "Assess risk by condition plus target exposure.",
      "Avoid emergency decisions without structured evaluation.",
      "Use mitigation-first options before removal when appropriate.",
    ],
  },
  {
    slug: "structural-pruning-standards-homeowners-guide",
    title: "Structural Pruning Standards: A Homeowner and Estate Manager Guide",
    excerpt:
      "How ANSI-aligned pruning protects tree architecture, lowers liability, and reduces future costs.",
    category: "Structural Pruning",
    publishedAt: "March 24, 2026",
    readTime: "6 min read",
    image: "/pruning-closeup.png",
    imageAlt: "Precision pruning cut made with professional hand pruners",
    intro:
      "Pruning quality determines future risk profile. Strategic cuts improve structure and clearance while preserving biological function. Poor cuts can accelerate decay and create recurring hazard conditions.",
    sections: [
      {
        heading: "Define objective before cutting",
        content:
          "Every pruning scope should answer a single question first: what are we improving? Structural integrity, clearance, restoration, and growth direction each require different decisions.",
      },
      {
        heading: "Protect branch collars and species form",
        content:
          "Correct cut placement supports compartmentalization and wound closure. Species-appropriate architecture should guide reduction and selection, especially in mature landscape trees.",
      },
      {
        heading: "Plan pruning as a cycle, not a one-off",
        content:
          "Canopy management is strongest when performed as a recurring program. Scheduled training and maintenance reduce major interventions later and improve long-term outcomes.",
      },
    ],
    takeaways: [
      "Good pruning is objective-driven, not cosmetic.",
      "Cut placement has long-term biological consequences.",
      "Recurring care reduces future corrective cost.",
    ],
  },
  {
    slug: "plant-health-care-program-design-for-urban-canopy",
    title: "Designing a Plant Health Care Program for Urban Canopy Performance",
    excerpt:
      "A science-based approach to diagnostics, monitoring, and treatment timing for lasting vigor.",
    category: "Plant Health Care",
    publishedAt: "March 15, 2026",
    readTime: "8 min read",
    image: "/plant-health-care-card.png",
    imageAlt: "Arboriculture professional inspecting leaf tissue and plant condition",
    intro:
      "Plant Health Care (PHC) is most effective when it is diagnostic-led and seasonally structured. Generic applications rarely deliver consistent results across high-value properties.",
    sections: [
      {
        heading: "Baseline diagnostics first",
        content:
          "Document canopy density, shoot growth, leaf condition, root-zone stressors, and irrigation patterns. Diagnosis should drive treatment, not the other way around.",
      },
      {
        heading: "Match treatment windows to biology",
        content:
          "Timing is as important as treatment selection. Nutrient support, pest interventions, and stress mitigation should align with species cycles and local climate pressure.",
      },
      {
        heading: "Measure and adjust",
        content:
          "Programs should include measurable indicators and regular reassessment. Monitoring converts PHC from routine service into a performance strategy.",
      },
    ],
    takeaways: [
      "Diagnostics should guide all PHC decisions.",
      "Seasonal timing improves treatment effectiveness.",
      "Track performance and refine every cycle.",
    ],
  },
  {
    slug: "root-zone-soil-management-for-long-term-tree-stability",
    title: "Root-Zone and Soil Management for Long-Term Tree Stability",
    excerpt:
      "Why below-ground conditions are the leading indicator of canopy decline and failure risk.",
    category: "Soil and Root Zone",
    publishedAt: "March 7, 2026",
    readTime: "7 min read",
    image: "/root-zone-soil-card.png",
    imageAlt: "Technician performing root-zone intervention near tree base",
    intro:
      "When trees struggle, the cause is often below grade. Compaction, drainage, and chronic root disturbance can undermine canopy performance before visual symptoms become obvious.",
    sections: [
      {
        heading: "Identify compaction and oxygen stress",
        content:
          "Compacted soils reduce pore space and root function. Early identification allows corrective actions before decline becomes structural.",
      },
      {
        heading: "Address irrigation and drainage interactions",
        content:
          "Overwatering and poor drainage can be as harmful as drought cycles. Water strategy should match site conditions, not fixed schedules.",
      },
      {
        heading: "Protect root zones during site work",
        content:
          "Construction staging and grade changes can trigger long-term decline. Protection plans should be in place before project mobilization.",
      },
    ],
    takeaways: [
      "Root-zone condition predicts canopy resilience.",
      "Water and soil structure must be managed together.",
      "Construction protection reduces hidden future losses.",
    ],
  },
  {
    slug: "emergency-tree-response-storm-damage-playbook",
    title: "Emergency Tree Response: Storm Damage Playbook for Property Teams",
    excerpt:
      "What to do in the first hours after a tree incident to protect people and reduce secondary damage.",
    category: "Emergency Services",
    publishedAt: "February 26, 2026",
    readTime: "5 min read",
    image: "/emergency-tree-services-card.png",
    imageAlt: "Emergency crew managing a fallen tree with rigging lines",
    intro:
      "Urgent tree incidents demand speed and discipline together. The first response window determines whether risk is stabilized or unintentionally increased.",
    sections: [
      {
        heading: "Secure and isolate the hazard zone",
        content:
          "Keep occupants and vehicles clear. Define exclusion boundaries before any cutting begins to avoid secondary injuries.",
      },
      {
        heading: "Stabilize before full removal when feasible",
        content:
          "Temporary stabilization can create safer conditions for controlled dismantling. Not every emergency requires immediate full removal in the first pass.",
      },
      {
        heading: "Document post-event recommendations",
        content:
          "Emergency work should end with a written recovery plan covering adjacent tree checks, follow-up pruning, and residual risk notes.",
      },
    ],
    takeaways: [
      "Scene control is the first safety action.",
      "Structured triage improves emergency outcomes.",
      "Recovery planning is part of emergency service quality.",
    ],
  },
  {
    slug: "consulting-services-for-construction-and-permit-support",
    title: "Arboricultural Consulting for Construction Impact and Permit Support",
    excerpt:
      "How technical tree consulting reduces project friction, delays, and avoidable conflicts.",
    category: "Consulting",
    publishedAt: "February 14, 2026",
    readTime: "6 min read",
    image: "/consulting-expert-services-card.png",
    imageAlt: "Arborist consultant discussing tree strategy with property owner",
    intro:
      "Projects move faster when tree constraints are addressed early. Consulting aligns design, permitting, and field execution around defensible arboricultural recommendations.",
    sections: [
      {
        heading: "Engage consulting at pre-design stage",
        content:
          "Early tree review identifies conflict points before plans are locked. This helps teams avoid costly redesign and permit setbacks.",
      },
      {
        heading: "Create practical tree protection plans",
        content:
          "Protection plans should be implementable on real job sites, with clear fencing limits, access controls, and monitoring milestones.",
      },
      {
        heading: "Support permit and stakeholder communication",
        content:
          "Well-structured reporting gives owners, agencies, and project teams a common technical basis for decisions.",
      },
    ],
    takeaways: [
      "Early consulting reduces downstream project risk.",
      "Protection plans must be field-practical.",
      "Documentation improves permit confidence.",
    ],
  },
  {
    slug: "tree-management-plans-for-estates-and-hoas",
    title: "Tree Management Plans for Estates and HOAs",
    excerpt:
      "A repeatable planning model for balancing canopy preservation, budget control, and safety priorities.",
    category: "Management Planning",
    publishedAt: "February 3, 2026",
    readTime: "7 min read",
    image: "/tree-management-card.png",
    imageAlt: "Field planning documents used for long-term tree management",
    intro:
      "Large properties need portfolio-level tree planning, not one-off tasks. A management plan sets priorities, schedules interventions, and supports predictable budgeting.",
    sections: [
      {
        heading: "Inventory and prioritize by risk and value",
        content:
          "Tree populations should be categorized by exposure, condition, and significance to property function. This creates a clear action hierarchy.",
      },
      {
        heading: "Phase work across seasons and fiscal cycles",
        content:
          "Phased execution prevents budget shocks and ensures high-priority issues are addressed first.",
      },
      {
        heading: "Use documentation for governance decisions",
        content:
          "HOA boards and estate managers make better decisions with clear written recommendations and timeline options.",
      },
    ],
    takeaways: [
      "Portfolio planning outperforms reactive service calls.",
      "Prioritization improves both safety and budget outcomes.",
      "Governance teams need clear reporting to act confidently.",
    ],
  },
  {
    slug: "when-tree-removal-is-the-responsible-choice",
    title: "When Tree Removal Is the Responsible Choice",
    excerpt:
      "A preservation-first framework for deciding when removal is necessary and how to execute it safely.",
    category: "Tree Removal",
    publishedAt: "January 22, 2026",
    readTime: "5 min read",
    image: "/tree-removal-card.png",
    imageAlt: "Professional climbing and rigging equipment for controlled tree removal",
    intro:
      "Preservation remains the preferred path whenever practical. But when risk, decline, or structural failure potential crosses acceptable thresholds, responsible removal protects people and property.",
    sections: [
      {
        heading: "Use objective thresholds for removal decisions",
        content:
          "Severe structural instability, irrecoverable decline, or high-consequence target exposure may justify removal when mitigation cannot reasonably control risk.",
      },
      {
        heading: "Plan controlled dismantling",
        content:
          "Removal quality depends on pre-job planning, rigging strategy, and site protection discipline, especially in tight residential or estate environments.",
      },
      {
        heading: "Pair removal with replacement strategy",
        content:
          "Long-term canopy stewardship should include replacement planning where appropriate to maintain landscape function and value.",
      },
    ],
    takeaways: [
      "Removal should follow structured evaluation, not fear.",
      "Execution planning drives safety outcomes.",
      "Replacement strategy supports long-term canopy goals.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
