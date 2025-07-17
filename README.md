# MediMeet - Connect with the best

[Live Demo](https://medi-meet-gules.vercel.app)
🚀 **Next-Gen Telehealth Platform** | **Secure Doctor-Patient Video Consultations**

MediConnect is a full-stack telehealth platform built with modern web technologies to facilitate seamless video consultations between patients and doctors. It features role-based dashboards (Admin, Doctor, Patient), secure WebRTC video calling, appointment scheduling, and digital health records.

## ✨ Key Features

### 👨‍⚕️ For Doctors
- **Video Consultations**: High-quality, low-latency video calls powered by Vonage
- **Appointment Management**: View, accept, or reschedule appointments
- **E-Prescriptions**: Generate and share digital prescriptions
- **Patient Profiles**: Access medical history securely

### 👩‍⚕️ For Patients
- **Book Appointments**: Find and schedule consultations with verified doctors
- **Join Video Calls**: One-click access to virtual consultations
- **Medical Records**: View past consultations and prescriptions
- **Secure Payments**: Integrated payment gateway

### 🛡️ For Admins
- **Doctor Verification**: Approve/reject doctor registrations
- **Analytics Dashboard**: Monitor platform usage & consultations
- **User Management**: Manage patients, doctors, and system settings

## 🛠️ Tech Stack

| Category       | Technology |
|----------------|------------|
| **Frontend**   | Next.js, React, ShadCN UI, Tailwind CSS |
| **Backend**    | Next.js API Routes |
| **Database**   | PostgreSQL (Neon Serverless) |
| **ORM**        | Prisma |
| **Video**      | Vonage Video API (WebRTC) |
| **Auth**       | Clerk / NextAuth |
| **Deployment** | Vercel (Frontend), Railway (Backend) |

## 🚀 Getting Started

### Prerequisites
- Node.js ≥18.x
- PostgreSQL (Neon recommended)
- Vonage API account

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mediconnect.git
   cd mediconnect

2. **🛠️ Environment Setup**

Create a `.env` file at the root of your project and add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
DATABASE_URL=your_neon_postgres_connection_string
NEXT_PUBLIC_VONAGE_APPLICATION_ID=your_vonage_app_id
VONAGE_PRIVATE_KEY=your_vonage_private_key
```

3. ***Install dependencies**

```
npm install
npx prisma migrate dev
```
