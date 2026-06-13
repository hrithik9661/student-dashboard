import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";
import BentoGrid from "@/components/BentoGrid";
import BentoItem from "@/components/BentoItem";
import type { Course } from "@/types/course";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <h1 className="text-xl font-semibold">
          Failed to load courses
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1 p-6">
          <BentoGrid>
            {/* Hero */}
            <BentoItem className="md:col-span-2">
              <HeroTile />
            </BentoItem>

            {/* Dynamic Courses */}
            {courses?.map((course: Course) => (
              <BentoItem key={course.id}>
                <CourseCard
                  title={course.title}
                  progress={course.progress}
                  iconName={course.icon_name}
                />
              </BentoItem>
            ))}

            {/* Activity Tile */}
            <BentoItem>
              <ActivityTile />
            </BentoItem>
          </BentoGrid>
        </section>
      </div>
    </main>
  );
}