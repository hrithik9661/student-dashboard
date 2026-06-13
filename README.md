# LearnX Dashboard

A modern educational dashboard built using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

### Dashboard UI

* Modern Bento Grid layout
* Responsive design for desktop and mobile
* Dark theme interface
* Collapsible sidebar navigation

### Dynamic Data

* Courses fetched from Supabase
* Dynamic course cards
* Dynamic icon rendering from database
* Real-time course progress display

### Animations

* Staggered page load animations
* Card hover interactions
* Spring-based motion effects
* Animated progress bars
* Sidebar active-item highlight using Framer Motion `layoutId`

### Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Supabase
* Lucide React Icons

---

## Project Structure

```text
app/
├── page.tsx
├── loading.tsx
└── error.tsx

components/
├── Sidebar.tsx
├── HeroTile.tsx
├── CourseCard.tsx
├── ActivityTile.tsx
├── BentoGrid.tsx
└── BentoItem.tsx

lib/
└── supabase.ts

types/
└── course.ts
```

---

## Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Database Schema

### courses

| Column    | Type    |
| --------- | ------- |
| id        | bigint  |
| title     | text    |
| progress  | integer |
| icon_name | text    |

Sample Data:

```sql
insert into courses (title, progress, icon_name)
values
('Advanced React Patterns', 75, 'Code'),
('Next.js Mastery', 50, 'Rocket'),
('TypeScript Pro', 90, 'FileCode'),
('Database Design', 35, 'Database');
```

---

## Assignment Requirements Covered

* Responsive Bento Grid Layout
* Dynamic Data Rendering
* Supabase Integration
* Server Component Data Fetching
* Framer Motion Animations
* Hover Interactions
* Sidebar Layout Animations
* Loading and Error States
* TypeScript Support
* Modern UI Design

---

## Author

Hrithik Kumar

Built as part of a Frontend Dashboard Assignment using Next.js and Supabase.
