# Java Backend Developer Portfolio

A modern, professional **single-page portfolio website for a Java Backend Developer** built with **React.js (Frontend)** and **Java 21 / Spring Boot (Backend)**.

---

## 🏗️ 1. Architecture & Project Structure

The repository maintains a clean separation between the frontend single-page application and the Spring Boot API backend:

```text
portfolio/
│
├── frontend/                 # React.js SPA (Vite + JavaScript + Tailwind CSS)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar.jsx    # Sticky navigation with active highlight & mobile drawer
│   │   │   ├── Hero.jsx      # Hero section with interactive terminal & CTA
│   │   │   ├── About.jsx     # 2-column professional profile & engineering pillars
│   │   │   ├── Experience.jsx# Vertical timeline with key achievements
│   │   │   ├── Skills.jsx    # Categorized skill cards with filter tabs
│   │   │   ├── Projects.jsx  # Detailed cards for Money Manager, Challenges Platform, etc.
│   │   │   ├── Architecture.jsx # Interactive backend request flow & external integrations
│   │   │   ├── ProductionCapabilities.jsx # 14 real-world engineering capabilities
│   │   │   ├── Contact.jsx   # Contact form integrated with Spring Boot REST API
│   │   │   └── Footer.jsx    # Footer with social links & smooth back-to-top
│   │   ├── data/
│   │   │   └── portfolioData.js # Centralized portfolio content & technical specs
│   │   ├── App.jsx           # Main single-page application assembler
│   │   ├── main.jsx          # React DOM entry point
│   │   └── index.css         # Theme stylesheet & glassmorphism system
│   ├── public/
│   ├── package.json
│   └── vite.config.js        # Vite config with /api proxy to Spring Boot
│
├── backend/                  # Java 21 + Spring Boot 3 REST API
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/portfolio/portfolio/
│   │   │   │   ├── config/      # CorsConfig.java
│   │   │   │   ├── controller/  # ContactController.java, HealthController.java
│   │   │   │   ├── dto/         # ContactRequest.java, ContactResponse.java, ApiResponse.java
│   │   │   │   ├── exception/   # GlobalExceptionHandler.java, ContactException.java
│   │   │   │   ├── service/     # ContactService.java, ContactServiceImpl.java
│   │   │   │   └── PortfolioApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties # Mail, CORS & Port configurations
│   │   └── test/
│   └── pom.xml               # Maven dependencies (Web, Validation, Mail, Lombok)
│
├── nginx.conf                # Nginx single-domain proxy & static asset configuration
├── portfolio-backend.service # Linux systemd service unit file for Spring Boot
├── .env.example              # Environment variables template
├── .gitignore
└── README.md
```

---

## ⚡ 2. Features

- **Single-Page Navigation**: Smooth scrolling between sections (`#home`, `#about`, `#experience`, `#skills`, `#projects`, `#architecture`, `#production`, `#contact`) with sticky header active section highlighting and responsive mobile drawer.
- **Java 21 & Spring Boot 3 Backend**: Clean architecture using Controller-Service-DTO pattern, DTO validation via `@Valid`, `@NotBlank`, `@Email`, `@Size`, and centralized `@RestControllerAdvice` exception handling.
- **Resilient Email Dispatch**: Contact form sends `POST /api/contact` to Spring Boot. Mail service dispatches HTML/text emails via `JavaMailSender` and gracefully logs fallback output if SMTP credentials are not active locally.
- **Interactive Backend Architecture**: Interactive visualization of request lifecycle (`React Frontend` &rarr; `Nginx` &rarr; `Spring Boot REST API` &rarr; `Spring Security / JWT` &rarr; `Service` &rarr; `Repository` &rarr; `PostgreSQL`) and external integrations (Stripe, Firebase FCM, AWS, OpenAI, Apple App Store, SMTP).
- **Single Domain Ready**: Configured for production under one single domain (`https://yourdomain.com/` for React SPA and `https://yourdomain.com/api/*` proxied to Spring Boot port 8080).

---

## 🚀 3. Local Development Setup

### Prerequisites

- Node.js (v18+) & npm
- JDK 21+ & Maven

### Running the Frontend

```bash
cd portfolio/frontend
npm install
npm run dev
```

The frontend will start at `http://localhost:5173`. API calls to `/api/*` are automatically proxied to `http://localhost:8080` via `vite.config.js`.

### Running the Backend

```bash
cd portfolio/backend
./mvnw spring-boot:run
```

The backend server will run on `http://localhost:8080`.

You can test backend health at:

```bash
curl http://localhost:8080/api/health
```

---

## 📩 4. API Specification

### Submit Contact Form

- **Endpoint**: `POST /api/contact`
- **Content-Type**: `application/json`
- **Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Job Opportunity",
  "message": "I would like to discuss a Java backend role..."
}
```

- **Success Response (200 OK)**:

```json
{
  "success": true,
  "message": "Thank you! Your message has been received successfully. I will get back to you shortly.",
  "timestamp": "2026-10-02T15:00:00"
}
```

- **Validation Failure (400 Bad Request)**:

```json
{
  "success": false,
  "message": "Validation failed. Please check your input fields.",
  "data": {
    "email": "Please provide a valid email address",
    "message": "Message must be between 10 and 3000 characters"
  }
}
```

---

## 🌐 5. Production Deployment Guide (Ubuntu + Nginx + systemd)

### 1. Build the Frontend Static Bundle

```bash
cd portfolio/frontend
npm run build
```

This generates production static files in `frontend/dist/`. Copy them to `/var/www/portfolio/frontend/dist`.

### 2. Package the Spring Boot Backend Jar

```bash
cd portfolio/backend
./mvnw clean package -DskipTests
```

This generates `target/portfolio-0.0.1-SNAPSHOT.jar`. Copy the jar to `/var/www/portfolio/backend/target/`.

### 3. Setup systemd Service

Copy `portfolio-backend.service` to `/etc/systemd/system/`:

```bash
sudo cp portfolio-backend.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable portfolio-backend
sudo systemctl start portfolio-backend
```

### 4. Configure Nginx Single Domain Reverse Proxy

Copy `nginx.conf` to `/etc/nginx/sites-available/portfolio.conf`:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/portfolio.conf
sudo ln -s /etc/nginx/sites-available/portfolio.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Now `https://yourdomain.com/` serves the React SPA and `https://yourdomain.com/api/` forwards directly to Spring Boot on port 8080!
