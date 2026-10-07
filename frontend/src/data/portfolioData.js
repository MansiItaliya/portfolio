export const developerInfo = {
  name: "Mansi Italiya",
  role: "Java Backend Engineer & Architect",
  title: "Java Backend Developer",
  subtitle: "Building scalable, secure and production-ready backend systems with Java and Spring Boot.",
  bio: "Passionate software engineer specializing in resilient Java microservices, high-throughput REST APIs, Spring Boot architecture, relational database design, and cloud deployments. Proven track record of architecting mission-critical production backends supporting thousands of concurrent transactions.",
  status: "Available for Roles & Architecture Consulting",
  github: "https://github.com/MansiItaliya/",
  linkedin: "https://www.linkedin.com/in/mansiitaliya",
  email: "mansiitaliya001@gmail.com",
  location: "Remote / Worldwide",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Production Services", value: "3+" },
    { label: "API Requests / Day", value: "50k+" },
    { label: "Uptime Commitment", value: "99.99%" }
  ]
};

export const aboutData = {
  headline: "Architecting High-Performance, Production-Grade Java Backends",
  paragraphs: [
    "I am a specialized Java Backend Developer focused on designing and delivering enterprise-grade backend infrastructure. My core expertise centers on Java 21, Spring Boot, Spring Security, database optimization, and cloud-native containerized deployments.",
    "Over the years, I have architected and maintained end-to-end backend ecosystems handling complex financial transactions, real-time push notification pipelines, AI model integration workers, and subscription management platforms across iOS, Android, and Web clients.",
    "I prioritize clean architecture, domain-driven design, comprehensive unit/integration testing, strict security standards (OAuth2, JWT), and Handled production deployment."
  ],
  pillars: [
    {
      title: "Backend Development",
      description: "Building scalable, maintainable Java 21 & Spring Boot core backend services."
    },
    {
      title: "REST API & Performance",
      description: "Designing clean, versioned, high-throughput RESTful APIs with optimized JSON payloads."
    },
    {
      title: "Security Architecture",
      description: "Implementing stateless JWT auth, OAuth2, role-based access control, and password hashing."
    },
    {
      title: "Database Engineering",
      description: "PostgreSQL & MySQL schema design, indexing, transaction management, and ORM optimization."
    },
    {
      title: "Integrations & APIs",
      description: "Integrating Stripe, Apple In-App Purchases, Firebase, AI API, and email providers."
    },
    {
      title: "Cloud & DevOps",
      description: "Dockerizing microservices, Nginx reverse proxying, systemd configuration, and AWS deployments."
    }
  ]
};

export const experienceData = [
  {
    company: " Slash Star",
    position: "Java Backend Engineer",
    duration: "2025 - Present",
    location: "Surat, Gujarat (In-Office)",
    responsibilities: [
      "Architected and developed scalable, high-performance backend services using Java, Spring Boot, PostgreSQL, and MySQL.",
      "Engineered payment and subscription ecosystems integrating Stripe, Apple App Store, and Google Play with robust webhook processing and lifecycle management.",
      "Developed AI-powered backend workflows using Claude, Gemini, and OpenAI, implementing asynchronous processing, model fallback, scheduled recovery, and Firebase notifications.",
      "Optimized database queries, background processing, and API performance while ensuring data consistency through idempotency, optimistic locking, and reliable error handling.",
      "Managed production deployments, monitoring, and troubleshooting across Linux/AWS environments using Docker, Nginx, systemd, Git, and SSL."
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Stripe API", "Docker", "AWS", "Firebase", "Nginx", "Linux"],
    achievements: [
      "Successfully processed over $15k in subscription revenue with zero transaction loss.",
      "Reduced system memory footprint by 35% through Virtual Threads (Project Loom) implementation."
    ]
  }
  // {
  //   company: "NextGen Mobility & SaaS",
  //   position: "Backend Developer",
  //   duration: "2021 - 2023",
  //   location: "New York, NY",
  //   responsibilities: [
  //     "Built multi-tenant RESTful APIs for mobile and web applications serving 500k+ active users.",
  //     "Implemented secure JWT authentication with refresh token rotation and Spring Security filter chains.",
  //     "Integrated Firebase Cloud Messaging (FCM) for async push notification delivery with dead-letter queue retries.",
  //     "Maintained Linux server instances, Nginx load balancing, and systemd service management."
  //   ],
  //   technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Redis", "Firebase", "Nginx", "Linux"],
  //   achievements: [
  //     "Scaled push notification pipeline to deliver 2M+ notifications daily under 200ms latency.",
  //     "Refactored legacy monolith into modular Spring Boot starter services."
  //   ]
  // },
  // {
  //   company: "CloudData Solutions",
  //   position: "Junior Java Developer",
  //   duration: "2019 - 2021",
  //   location: "Austin, TX",
  //   responsibilities: [
  //     "Developed backend CRUD services and database migration scripts using Liquibase and Hibernate.",
  //     "Created automated integration test suites using JUnit 5, Testcontainers, and Mockito.",
  //     "Collaborated with frontend engineering teams to define OpenAPI/Swagger API contracts."
  //   ],
  //   technologies: ["Java 11", "Spring Boot", "Hibernate", "PostgreSQL", "JUnit 5", "REST APIs", "Git"],
  //   achievements: [
  //     "Achieved 90%+ backend unit test coverage across 15 core microservices."
  //   ]
  // }
];

export const skillsData = {
  backend: [
    { name: "Java 21", level: "Expert", icon: "☕" },
    { name: "Spring Boot", level: "Expert", icon: "🍃" },
    { name: "Spring Security", level: "Advanced", icon: "🔒" },
    { name: "REST APIs", level: "Expert", icon: "🌐" },
    { name: "JWT", level: "Advanced", icon: "🔑" },
    { name: "Hibernate / JPA", level: "Expert", icon: "🗄️" }
  ],
  database: [
    { name: "PostgreSQL", level: "Expert", icon: "🐘" },
    { name: "MySQL", level: "Advanced", icon: "🐬" },
    { name: "SQL & Indexing", level: "Expert", icon: "📊" },
    { name: "Redis Caching", level: "Advanced", icon: "⚡" }
  ],
  devops: [
    { name: "AWS (EC2, S3)", level: "Advanced", icon: "☁️" },
    { name: "Docker & Compose", level: "Advanced", icon: "🐳" },
    { name: "Linux & Shell", level: "Advanced", icon: "🐧" },
    { name: "Nginx", level: "Advanced", icon: "⚙️" },
    { name: "systemd", level: "Advanced", icon: "🛠️" },
    { name: "Git & GitHub", level: "Expert", icon: "🌿" }
  ],
  integrations: [
    { name: "Stripe SDK", level: "Advanced", icon: "💳" },
    { name: "Apple App Store", level: "Advanced", icon: "🍏" },
    { name: "Google Play Billing", level: "Advanced", icon: "▶️" },
    { name: "Firebase (FCM)", level: "Advanced", icon: "🔥" },
    { name: "Google OAuth", level: "Advanced", icon: "🔐" },
    { name: "AI APIs (OpenAI)", level: "Advanced", icon: "🤖" },
    { name: "Email Services (SMTP)", level: "Expert", icon: "✉️" }
  ]
};

export const projectsData = [
  {
    id: "money-manager",
    title: "Money Manager",
    badge: "Financial SaaS",
    description: "Enterprise personal finance management backend engine handling automated expense tracking, multi-account currency conversion, and recurring subscription billing.",
    problemSolved: "Users needed a secure unified engine to track multi-platform expenses and recurring subscriptions with real-time iOS/Android sync without losing data integrity.",
    features: [
      "Personal finance & category budget tracking",
      "Stateless JWT Authentication with Role-Based Access Control",
      "Automated monthly subscription management",
      "Connect your bank account and sync transactions automatically",
      "Apple App Store In-App Purchase receipt validation",
      "Automated transaction summary email notifications",
      "AI-powered financial insights and spending anomaly alerts"
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Plaid API", "Apple App Store API", "AI API"],
    githubUrl: "https://github.com",
    liveUrl: "https://themmanager.com/",
    highlightColor: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "stepper",
    title: "Stepper - Pedometer & Steps",
    badge: "High-Concurrency Social",
    description: "Gamified step-tracking and wellness competition backend supporting thousands of simultaneous step sync events, group leaderboards, and live notifications.",
    problemSolved: "Resolved high-concurrency database lock contention during daily step sync surges by implementing async Redis leaderboard queues.",
    features: [
      "Custom user challenge creation & invitation code generator",
      "Group participant management and permissions",
      "Automated daily step tracking data ingestion API",
      "Sub-millisecond real-time global leaderboards powered by Redis",
      "Firebase Cloud Messaging (FCM) push notification triggers for goal completion"
    ],
    technologies: ["Java 21", "Spring Boot", "Firebase FCM", "PostgreSQL", "Spring oauth2", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://play.google.com/store/apps/details?id=free.step.counter",
    highlightColor: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: "watchcert-ai",
    title: "WatchCert AI",
    badge: "AI Watch Authentication",
    description: "AI-powered watch identification and authentication backend that turns photos into detailed reports, with multi-LLM fallback, async processing, and Stripe/Apple subscriptions.",
    problemSolved: "Identifying and authenticating a watch normally needs an expert. WatchCert turns four photos into a structured report, and automatic model fallback keeps results flowing when an AI provider fails.",
    features: [
      "Watch identification from photos via a multi-LLM pipeline (Claude, Gemini, OpenAI) with automatic retry and fallback",
      "Async report generation on a dedicated thread pool, with FCM push notifications on completion",
      "Scheduled recovery job re-queues pending reports after restarts using images saved on disk",
      "Stripe and Apple App Store subscriptions and credit packs with idempotent, event-logged webhooks",
      "Google and Apple Sign-In with stateless JWT sessions",
      "Apple Search Ads sync every 30 minutes with retry, backoff and PostgreSQL upserts"
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Claude API", "Gemini API", "OpenAI API", "Stripe", "Apple App Store API", "Apple Search Ads API", "Firebase FCM", "Swagger/OpenAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://apps.apple.com/us/app/watchpoint-watch-check/id6775457953",
    highlightColor: "from-emerald-500/20 to-teal-500/20"
  }
];

export const architectureData = {
  title: "Backend Architecture Overview",
  subtitle: "Production-proven, layered architecture designed for modularity, security, and scalability.",
  flowSteps: [
    {
      step: "01",
      title: "React Frontend",
      tech: "Single Page App",
      desc: "Serves static HTML/JS/CSS via Nginx and dispatches async REST API fetch calls over HTTPS."
    },
    {
      step: "02",
      title: "REST API Layer",
      tech: "Spring Controllers",
      desc: "Handles HTTP routing, request validation (@Valid), DTO mapping, and response serialization."
    },
    {
      step: "03",
      title: "Spring Security / JWT / OAuth2",
      tech: "Filter Chain",
      desc: "Intercepts requests, validates Bearer JWT tokens, enforces RBAC roles, and blocks malicious traffic."
    },
    {
      step: "04",
      title: "Service Layer",
      tech: "Business Logic",
      desc: "Encapsulates transaction boundaries (@Transactional), domain rules, and external service orchestration."
    },
    {
      step: "05",
      title: "Repository Layer",
      tech: "Spring Data JPA / Hibernate",
      desc: "Executes type-safe database queries, manages ORM mapping, and optimizes connection pools (HikariCP)."
    },
    {
      step: "06",
      title: "Database Layer",
      tech: "PostgreSQL / MySQL",
      desc: "Stores persistent relational data with strict constraints, indexes, and ACID compliance."
    }
  ],
  externalIntegrations: [
    { name: "Stripe", role: "Payment Processing & Webhooks", color: "text-indigo-400" },
    { name: "Firebase FCM", role: "Mobile Push Notifications", color: "text-amber-400" },
    { name: "AWS Infrastructure", role: "EC2, S3 Storage & Route53", color: "text-orange-400" },
    { name: "AI APIs (OpenAI, Gemini,CLAUDE)", role: "Async Intelligent Document Auditing", color: "text-emerald-400" },
    { name: "Apple App Store", role: "In-App Purchase Validation", color: "text-slate-300" },
    { name: "Email Services", role: "SMTP Transactional Mail Notifications", color: "text-cyan-400" }
  ]
};

export const productionCapabilities = [
  { title: "REST API Development", desc: "Designing clean, versioned, RESTful APIs following RFC specs and OpenAPI standards.", icon: "🌐" },
  { title: "Authentication & JWT", desc: "Stateless JWT auth, OAuth2 flows, password hashing, and Spring Security filters.", icon: "🔑" },
  { title: "Database Design", desc: "Relational schema modeling, index optimization, execution plan analysis, and ORM caching.", icon: "🗄️" },
  { title: "Payment Integrations", desc: "Stripe payment intents, subscriptions, webhooks, and failure retries.", icon: "💳" },
  { title: "Subscription Systems", desc: "Handling tier upgrades, grace periods, dunning logic, and entitlement management.", icon: "🔄" },
  { title: "Email Notification Systems", desc: "Transactional HTML email dispatching using JavaMailSender with resilient fallback logging.", icon: "✉️" },
  { title: "Push Notification Pipelines", desc: "Integrating Firebase Admin SDK for asynchronous bulk push notifications to mobile devices.", icon: "📲" },
  { title: "Third-Party API Integration", desc: "Building resilient REST clients with RestTemplate / WebClient, timeout management, and retry logic.", icon: "🔌" },
  { title: "Docker Deployment", desc: "Writing multi-stage Dockerfiles for minimal production JVM container footprints.", icon: "🐳" },
  { title: "Linux Server Deployment", desc: "Configuring Ubuntu server environments, SSH security, firewall rules, and directory permissions.", icon: "🐧" },
  { title: "Nginx Reverse Proxy", desc: "Setting up single-domain Nginx proxying for SPA routing, SSL termination, and rate limiting.", icon: "⚡" },
  { title: "SSL / HTTPS Setup", desc: "Configuring Let's Encrypt SSL certificates, TLS 1.3 encryption, and automatic renewal.", icon: "🔒" },
  { title: "AWS Infrastructure", desc: "Deploying production workloads on EC2, S3 static/file storage, and Route53 DNS.", icon: "☁️" },
  { title: "systemd Service Management", desc: "Configuring Linux systemd daemons for automated backend process restart and logging.", icon: "⚙️" }
];
