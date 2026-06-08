# SafeVision AI

AI-powered Industrial Worker Safety Monitoring System using Computer Vision and Edge AI for PPE compliance detection.

## Project Overview

SafeVision AI is a modern, production-ready full-stack web application that monitors CCTV video streams, detects workers, helmets, and safety vests using YOLOv8, identifies violations, and generates real-time alerts.

## Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **ShadCN UI**
- **Lucide Icons**
- **Recharts**

### Backend
- **Next.js API Routes**
- **Server Actions**
- **REST APIs**

### Database
- **PostgreSQL** (Neon DB)
- **Prisma ORM**

### Authentication
- **NextAuth.js**
- **Google Login**
- **Email Login**

### Deployment
- **Vercel**
- **Environment Variables Support**
- **Production Ready**

## Project Structure

```
SafeVision AI/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   ├── contact/
│   │   ├── demo-request/
│   │   ├── reports/
│   │   ├── violations/
│   │   └── dashboard/
│   │       └── stats/
│   ├── about/
│   ├── architecture/
│   ├── contact/
│   ├── dashboard/
│   ├── features/
│   ├── monitoring/
│   ├── reports/
│   ├── roadmap/
│   ├── technology/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── ui/
├── lib/
│   ├── prisma.ts
│   ├── utils.ts
│   └── auth.ts
├── prisma/
│   └── schema.prisma
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.mjs
├── .env.example
├── vercel.json
└── README.md
```

## Features

### Public Pages
- **Home**: Hero section with AI monitoring animation, statistics, and feature overview
- **About**: Problem and solution explanation with impact statistics
- **Features**: Comprehensive feature cards with animations
- **Architecture**: Interactive 6-step system architecture diagram
- **Technology**: Technology stack overview and system architecture
- **Dashboard**: Professional admin dashboard with widgets
- **Monitoring**: Live CCTV feed simulation with AI detection overlay
- **Reports**: Report generation and download (PDF, CSV)
- **Roadmap**: Future enhancements timeline
- **Contact**: Contact form with team information

### Admin Dashboard
- **Dashboard**: Overview with statistics and charts
- **Cameras**: Multi-camera management
- **Violations**: PPE violation tracking
- **Workers**: Worker management
- **Reports**: Compliance reports
- **Settings**: Configuration options

## Database Schema

### Tables
- `User`: Authentication and user management
- `Account`: OAuth account linking
- `Session`: User sessions
- `VerificationToken`: Email verification
- `Worker`: Worker information
- `Violation`: PPE violation records
- `Report`: Compliance reports
- `Contact`: Contact form submissions
- `DemoRequest`: Demo request submissions

## Installation

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (Neon DB recommended)
- Google OAuth credentials (optional)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd safevision-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your values:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/safevision?schema=public"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up Prisma**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - http://localhost:3000

## API Endpoints

### POST /api/contact
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Corp",
  "phone": "+1234567890",
  "message": "Your message"
}
```

### POST /api/demo-request
Submit demo request
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Corp",
  "phone": "+1234567890",
  "message": "I'm interested in a demo"
}
```

### GET /api/reports
Get all reports
```bash
GET /api/reports?limit=50
```

### POST /api/reports
Generate new report
```json
{
  "reportType": "daily",
  "data": { ... }
}
```

### GET /api/violations
Get all violations
```bash
GET /api/violations?limit=100&status=pending
```

### GET /api/dashboard/stats
Get dashboard statistics
```bash
GET /api/dashboard/stats
```

## Design System

### Colors
- Primary: #0EA5E9
- Secondary: #2563EB
- Accent: #22C55E
- Background: #0F172A
- Text: #F8FAFC

### UI Components
- Glassmorphism cards with backdrop blur
- Gradient text and buttons
- Smooth animations with Framer Motion
- Fully responsive design

## Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Environment Variables**
   Set these in Vercel project settings:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `NEXTAUTH_SECRET` - Random secret for NextAuth
   - `NEXTAUTH_URL` - Your Vercel domain
   - `GOOGLE_CLIENT_ID` - Google OAuth client ID (optional)
   - `GOOGLE_CLIENT_SECRET` - Google OAuth secret (optional)

### Database Setup (Neon DB)

1. **Create Neon account**
   - Go to [Neon](https://neon.tech)
   - Create a new project
   - Copy the connection string

2. **Update DATABASE_URL**
   ```env
   DATABASE_URL="postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require"
   ```

3. **Run Prisma migrations**
   ```bash
   npx prisma db push
   ```

## Performance Optimization

- Lighthouse Score > 95
- Mobile responsive design
- Lazy loading for images
- Code splitting with Next.js
- Optimized API responses
- Fast loading times

## SEO Optimization

- Metadata API for dynamic meta tags
- OpenGraph tags for social sharing
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## Security

- NextAuth.js for authentication
- Input validation with Zod
- SQL injection prevention with Prisma
- CSRF protection
- Environment variables for secrets
- Rate limiting (recommended for production)

## Team

**Team TECH ARKA**

- **Leader**: Shashank Kumar Gupta
- **Members**: Ayush Raj, Suharsh Kumar, Akanksha Yadav, Palak Agarwal

**Institute**: GL Bajaj Group of Institutions, Mathura

**Competition**: Tata Technologies InnoVent Competition

## Future Roadmap

### 2026 Features
- Gloves Detection
- Goggles Detection
- Mobile Application
- IoT Sensor Integration
- AI Analytics
- Predictive Safety Monitoring

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check PostgreSQL server is running
- Ensure SSL mode is correct for production

### Build Errors
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

### Authentication Issues
- Verify NEXTAUTH_SECRET is set
- Check NEXTAUTH_URL matches your domain
- Ensure Google OAuth credentials are correct

## License

This project is developed for the Tata Technologies InnoVent Competition.

## Support

For questions or support, contact:
- Email: contact@safevision.ai
- Team: Team TECH ARKA

---

**SafeVision AI** - Transforming Workplace Safety with AI
