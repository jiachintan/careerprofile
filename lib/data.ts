export const personalInfo = {
  name: "Tan Jia Chin",
  preferredName: "Jerry",
  title: "Software Engineer",
  tagline: "Building reliable software for enterprise and industrial operations.",
  email: "jerry_5777@hotmail.com",
  phone: "+65 8153 4289",
  location: "Singapore",
  linkedin: "https://www.linkedin.com/in/jia-chin-tan/",
  linkedinHandle: "jia-chin-tan",
  github: "https://github.com/jiachintan",
  githubHandle: "jiachintan",
};

export const about = {
  summary: `Software engineer with 9 years of experience delivering high-impact solutions across enterprise, industrial, and consulting domains. I specialize in .NET ecosystems, cloud delivery, intelligent automation, and building the kind of software that quietly keeps things running.

From SCADA systems at Yokogawa to AI-driven automation at Accenture, I've consistently shipped work that reduced costs, accelerated delivery, and eliminated manual toil — often by significant margins.

I care deeply about code quality, system reliability, and the craft of engineering. I'm at my best when working on complex problems that require both technical depth and business judgement.`,
  highlights: [
    "9 years across enterprise, industrial automation, and consulting",
    "Reduced high-risk security vulnerabilities by 40% at Accenture",
    "Cut product licensing costs by 25% at Yokogawa with a custom diagram engine",
    "Accelerated CI/CD delivery by 50% through Azure DevOps automation",
    "AI-driven monitoring system that eliminated manual browser tracking effort entirely",
  ],
};

export const experiences = [
  {
    id: "accenture",
    company: "Accenture Pte Ltd",
    location: "Singapore",
    roles: [
      {
        title: "Analyst Programmer",
        period: "December 2023 — Present",
        start: "2023-12",
        end: null,
      },
    ],
    description:
      "Working at Accenture's technology consulting arm, delivering software solutions and security improvements for enterprise clients.",
    achievements: [
      {
        text: "Managed remediation of Web Application Penetration Testing (WAPT) findings — performing impact analysis, coordinating with application owners, and providing remediation guidance.",
        metric: "40% reduction in high-risk findings",
      },
      {
        text: "Designed and implemented an AI-driven browser release monitoring system that automatically tracks stable browser releases, validates version changes against official sources, and generates stakeholder reports.",
        metric: "Reduced manual effort to zero",
      },
      {
        text: "Designed and implemented IBM DataStage workflows to validate data synchronization between legacy and target databases, automatically detecting synchronization failures.",
        metric: "50% reduction in manual validation effort",
      },
      {
        text: "Investigated and resolved production issues in C#/.NET applications through root cause analysis, code fixes, and cross-functional collaboration.",
        metric: "Maintained system stability",
      },
    ],
    technologies: ["C#", ".NET", "IBM DataStage", "WAPT", "AI/ML", "Python", "SQL"],
    color: "purple",
  },
  {
    id: "yokogawa",
    company: "Yokogawa Engineering Asia Pte Ltd",
    location: "Singapore",
    roles: [
      {
        title: "Software Engineer II",
        period: "July 2022 — December 2023",
        start: "2022-07",
        end: "2023-12",
      },
      {
        title: "Software Engineer I",
        period: "June 2018 — June 2022",
        start: "2018-06",
        end: "2022-07",
      },
    ],
    description:
      "Yokogawa is a global leader in industrial automation and control. As a software engineer on their product team, I built mission-critical desktop applications used in SCADA and process control environments.",
    achievements: [
      {
        text: "Developed a custom diagram control using DevExpress in a C#/.NET WPF application, eliminating Microsoft Visio licensing requirements for end customers.",
        metric: "25% reduction in product costs",
      },
      {
        text: "Designed and implemented Azure DevOps CI/CD pipelines, automating build and deployment processes across product releases.",
        metric: "50% faster integration and delivery",
      },
      {
        text: "Developed UI automation tests for .NET applications using TestStack.White and SpecFlow BDD framework, enabling rapid regression validation.",
        metric: "40% reduction in regression testing time",
      },
    ],
    technologies: [
      "C#",
      ".NET",
      "WPF",
      "DevExpress",
      "Azure DevOps",
      "SpecFlow",
      "TestStack.White",
      "SQL Server",
    ],
    color: "blue",
  },
  {
    id: "tverve",
    company: "Tverve Sdn Bhd",
    location: "Malaysia",
    roles: [
      {
        title: "Associate Solution Developer",
        period: "May 2017 — March 2018",
        start: "2017-05",
        end: "2018-03",
      },
    ],
    description:
      "Early-career role at a software consultancy, building custom solutions across web and mobile platforms for regional clients.",
    achievements: [
      {
        text: "Developed a SharePoint Online web application to digitize and streamline a client's change management process, delivering a solution that met all business requirements within the project timeline.",
        metric: "Full digitization of change management",
      },
      {
        text: "Developed a cross-platform e-commerce mobile application using Xamarin, integrating backend APIs to support product browsing, order placement, and order tracking across Android and iOS.",
        metric: "Android & iOS coverage",
      },
    ],
    technologies: ["C#", "Xamarin", "SharePoint Online", "JavaScript", "REST APIs"],
    color: "teal",
  },
];

export const skills = {
  Languages: ["C#", "Java", "JavaScript", "TypeScript", "SQL", "Python"],
  Frameworks: [".NET", "ASP.NET Core", "WPF", "Xamarin", "React", "Next.js"],
  Cloud: ["Azure", "Azure DevOps", "CI/CD Pipelines"],
  Databases: ["SQL Server", "MongoDB"],
  Testing: ["SpecFlow", "TestStack.White", "BDD"],
  Security: ["WAPT", "Penetration Testing Remediation", "Secure Development"],
  Tools: ["Git", "DevExpress", "IBM DataStage", "SharePoint Online"],
};

export const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "May 2026",
    icon: "aws",
    color: "orange",
    credential:
      "https://www.credly.com/badges/cdd36479-3fde-4814-a13b-6a275a113fc1/linked_in_profile",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issued: "May 2026",
    icon: "aws",
    color: "orange",
    credential:
      "https://www.credly.com/badges/9ccf2213-09cd-437c-8343-dc40385f5d82/linked_in_profile",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    issued: "August 2025",
    icon: "azure",
    color: "blue",
    credential:
      "https://learn.microsoft.com/api/credentials/share/en-us/JiaChinTan-4295/FCEF8FEAEB96AB3B?sharingId",
  },
  {
    name: "MongoDB Associate Developer",
    issuer: "MongoDB",
    issued: "November 2023",
    icon: "mongodb",
    color: "green",
    credential:
      "https://www.credly.com/badges/7d349dd6-9823-4337-8edb-31c3e0c8af49/linked_in_profile",
  },
  {
    name: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    issued: "February 2022",
    icon: "oracle",
    color: "red",
    credential:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7FA36E2FE2B41B32FA776767D0EDFB41B9ECF33451C463CEAA23DE0C428BF6F6",
  },
];

export const featuredCertifications = certifications;

export const education = {
  institution: "Universiti Malaysia Pahang",
  degree: "Bachelor of Computer Science (Software Engineering)",
  period: "September 2013 — February 2017",
  gpa: "3.78 / 4.00",
};

export const portfolioProjects = [
  {
    title: "Knowledge Base Q&A Bot",
    repo: "knowledgebase_qa_bot_ai",
    description:
      "A FastAPI-powered Q&A system comparing two retrieval strategies side-by-side — BM25 keyword search vs. vector embeddings via OpenAI + FAISS — with streaming responses over SSE.",
    technologies: ["Python", "FastAPI", "OpenAI", "FAISS", "BM25", "SSE"],
    github: "https://github.com/jiachintan/knowledgebase_qa_bot_ai",
    demo: null,
    status: "live",
  },
  {
    title: "Prelegal",
    repo: "prelegal",
    description:
      "A platform for drafting common legal agreements programmatically. Full-stack TypeScript and Python architecture with template-driven document generation and a clean web interface.",
    technologies: ["TypeScript", "Python", "Docker", "FastAPI"],
    github: "https://github.com/jiachintan/prelegal",
    demo: null,
    status: "live",
  },
];
