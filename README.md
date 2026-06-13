# LearnX Dashboard

LearnX Dashboard is a modern educational dashboard built using Next.js, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

Features

Responsive Bento Grid Layout

Dynamic Course Cards

Supabase Database Integration

Server-Side Data Fetching

Animated Progress Bars

Collapsible Sidebar

Sidebar Active Item Animation

Staggered Page Load Animations

Hover Effects with Spring Physics

Tech Stack

Next.js

TypeScript

Tailwind CSS

Framer Motion

Supabase

Lucide React

Environment Variables

Create a `.env.local` file in the project root.

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Installation

npm install

npm run dev

Open the application at:

http://localhost:3000

Database Table

Table Name: courses

Columns:

id

title

progress

icon_name

Sample Data

insert into courses (title, progress, icon_name)
values
('Advanced React Patterns',75,'Code'),
('Next.js Mastery',50,'Rocket'),
('TypeScript Pro',90,'FileCode'),
('Database Design',35,'Database');

Assignment Requirements Covered

Responsive Layout

Dynamic Data Rendering

Supabase Integration

Server Components

Framer Motion Animations

Loading State

Error State

TypeScript Support

Author

Hrithik kumar
