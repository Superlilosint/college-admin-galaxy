import { BookOpen, Search, Users } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddCourseDialog } from "@/components/courses/AddCourseDialog";
import { CourseProfile } from "@/components/courses/CourseProfile";

const mockCourses = [
  {
    courseCode: "CS101",
    courseName: "Introduction to Computer Science",
    credits: "3",
    instructor: "Dr. Jane Smith",
    capacity: "30",
  },
  {
    courseCode: "MATH201",
    courseName: "Advanced Mathematics",
    credits: "4",
    instructor: "Prof. John Doe",
    capacity: "25",
  },
  {
    courseCode: "PHY301",
    courseName: "Physics III",
    credits: "4",
    instructor: "Dr. Robert Johnson",
    capacity: "20",
  },
];

const Courses = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-semibold">Courses</h1>
                <p className="text-muted-foreground mt-1">
                  Manage courses and academic programs
                </p>
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-8 w-[250px]"
                  />
                </div>
                <AddCourseDialog />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DashboardCard
                title="Active Courses"
                value="48"
                icon={<BookOpen className="w-6 h-6 text-primary" />}
                trend={{ value: 4, isPositive: true }}
              />
              <DashboardCard
                title="Total Students"
                value="1,248"
                icon={<Users className="w-6 h-6 text-primary" />}
                trend={{ value: 8, isPositive: true }}
              />
              <DashboardCard
                title="Average Class Size"
                value="26"
                icon={<Users className="w-6 h-6 text-primary" />}
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Course List</h2>
              <div className="space-y-4">
                {mockCourses.map((course) => (
                  <div
                    key={course.courseCode}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary animate-fadeIn hover:bg-primary-light transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{course.courseName}</p>
                        <p className="text-sm text-muted-foreground">
                          {course.instructor} • {course.credits} Credits
                        </p>
                      </div>
                    </div>
                    <CourseProfile course={course} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Courses;