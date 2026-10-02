export const developerInfo = {
  name: "Java Backend Developer",
  role: "Senior Java Backend Engineer & Architect",
  title: "Java Backend Developer",
  subtitle: "Building scalable, secure and production-ready backend systems with Java and Spring Boot.",
  bio: "Passionate software engineer specializing in resilient Java microservices, high-throughput REST APIs, Spring Boot architecture, relational database design, and cloud deployments. Proven track record of architecting mission-critical production backends supporting thousands of concurrent transactions.",
  status: "Available for Senior Roles & Architecture Consulting",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "backend.dev@example.com",
  location: "Remote / Worldwide",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Production Services", value: "30+" },
    { label: "API Requests / Day", value: "10M+" },
    { label: "Uptime Commitment", value: "99.99%" }
  ]
};

export const aboutData = {
  headline: "Architecting High-Performance, Production-Grade Java Backends",
  paragraphs: [
    "I am a specialized Java Backend Developer focused on designing and delivering enterprise-grade backend infrastructure. My core expertise centers on Java 21, Spring Boot, Spring Security, database optimization, and cloud-native containerized deployments.",
    "Over the years, I have architected and maintained end-to-end backend ecosystems handling complex financial transactions, real-time push notification pipelines, AI model integration workers, and subscription management platforms across iOS, Android, and Web clients.",
    "I prioritize clean architecture, domain-driven design, comprehensive unit/integration testing, strict security standards (OAuth2, JWT, RBAC), and robust automated CI/CD deployment pipelines."
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
      description: "Integrating Stripe, Apple In-App Purchases, Firebase, OpenAI API, and email providers."
    },
    {
      title: "Cloud & DevOps",
      description: "Dockerizing microservices, Nginx reverse proxying, systemd configuration, and AWS deployments."
    }
  ]
};

export const experienceData = [
  {
    company: "FinTech Systems Corp",
    position: "Senior Java Backend Engineer",
    duration: "2023 - Present",
    location: "San Francisco, CA (Remote)",
    responsibilities: [
      "Architected and deployed high-volume financial transaction processing service using Java 21 and Spring Boot 3.",
      "Engineered automated Stripe payment webhook handlers and Apple App Store receipt validation services.",
      "Optimized PostgreSQL query performance and connection pooling, reducing peak API p99 latency by 42%.",
      "Designed zero-downtime CI/CD deployment pipeline using Docker, Nginx reverse proxy, and AWS EC2."
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Stripe API", "Docker", "AWS"],
    achievements: [
      "Successfully processed over $12M in subscription revenue with zero transaction loss.",
      "Reduced system memory footprint by 35% through Virtual Threads (Project Loom) implementation."
    ]
  },
  {
    company: "NextGen Mobility & SaaS",
    position: "Backend Developer",
    duration: "2021 - 2023",
    location: "New York, NY",
    responsibilities: [
      "Built multi-tenant RESTful APIs for mobile and web applications serving 500k+ active users.",
      "Implemented secure JWT authentication with refresh token rotation and Spring Security filter chains.",
      "Integrated Firebase Cloud Messaging (FCM) for async push notification delivery with dead-letter queue retries.",
      "Maintained Linux server instances, Nginx load balancing, and systemd service management."
    ],
    technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Redis", "Firebase", "Nginx", "Linux"],
    achievements: [
      "Scaled push notification pipeline to deliver 2M+ notifications daily under 200ms latency.",
      "Refactored legacy monolith into modular Spring Boot starter services."
    ]
  },
  {
    company: "CloudData Solutions",
    position: "Junior Java Developer",
    duration: "2019 - 2021",
    location: "Austin, TX",
    responsibilities: [
      "Developed backend CRUD services and database migration scripts using Liquibase and Hibernate.",
      "Created automated integration test suites using JUnit 5, Testcontainers, and Mockito.",
      "Collaborated with frontend engineering teams to define OpenAPI/Swagger API contracts."
    ],
    technologies: ["Java 11", "Spring Boot", "Hibernate", "PostgreSQL", "JUnit 5", "REST APIs", "Git"],
    achievements: [
      "Achieved 90%+ backend unit test coverage across 15 core microservices."
    ]
  }
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
      "Stripe payment gateway integration for premium tiers",
      "Apple App Store In-App Purchase receipt validation",
      "Automated transaction summary email notifications",
      "AI-powered financial insights and spending anomaly alerts"
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Stripe API", "Apple App Store API", "OpenAI API", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/money-manager",
    highlightColor: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: "challenges-platform",
    title: "Challenges Platform",
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
    technologies: ["Java 21", "Spring Boot", "Redis", "Firebase FCM", "PostgreSQL", "Spring WebFlux", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/challenges",
    highlightColor: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: "watchcert-ai",
    title: "WatchCert AI",
    badge: "AI Document Engine",
    description: "Asynchronous compliance and certificate validation pipeline leveraging AI computer vision models to audit engineering documents automatically.",
    problemSolved: "Manual document compliance verification created a 48-hour audit backlog. WatchCert AI reduced processing time to under 3 seconds per document.",
    features: [
      "AI-powered image & PDF report document processing",
      "Asynchronous non-blocking Java Virtual Thread worker pool",
      "External AI Vision API integration with circuit breaker fault tolerance",
      "Containerized microservice architecture ready for Docker deployment"
    ],
    technologies: ["Java 21", "Spring Boot", "OpenAI Vision API", "Virtual Threads", "Docker", "S3 Storage", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.example.com/watchcert",
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
      title: "Spring Security / JWT",
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
    { name: "AI APIs (OpenAI)", role: "Async Intelligent Document Auditing", color: "text-emerald-400" },
    { name: "Apple App Store", role: "In-App Purchase Validation", color: "text-slate-300" },
    { name: "Email Services", role: "SMTP Transactional Mail Notifications", color: "text-cyan-400" }
  ]
};

export const productionCapabilities = [
  { title: "REST API Development", desc: "Designing clean, versioned, RESTful APIs following RFC specs and OpenAPI standards.", icon: "🌐" },
  { title: "Authentication & JWT", desc: "Stateless JWT auth, OAuth2 flows, password hashing, and Spring Security filters.", icon: "🔑" },
  { title: "Database Design", desc: "Relational schema modeling, index optimization, execution plan analysis, and ORM caching.", icon: "💾" },
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
