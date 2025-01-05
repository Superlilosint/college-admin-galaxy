import { useState } from "react";
import { GraduationCap, Users, BookOpen, Search } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddStudentDialog } from "@/components/students/AddStudentDialog";
import { StudentProfile } from "@/components/students/StudentProfile";

interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  phone: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  enrollDate: string;
}

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [students] = useState<Student[]>([
    {
      id: "STU001",
      name: "John Doe",
      email: "john.doe@example.com",
      grade: "10th Grade",
      phone: "+977-9876543210",
      address: "Kathmandu, Nepal",
      guardianName: "Jane Doe",
      guardianPhone: "+977-9876543211",
      enrollDate: "2024-01-15",
    },
    // Add more students as needed
  ]);

  const handleUpdateStudent = (updatedStudent: Student) => {
    // In the future, this will be connected to the backend
    console.log("Updated student:", updatedStudent);
  };

  const handleDeleteStudent = (id: string) => {
    // In the future, this will be connected to the backend
    console.log("Deleted student:", id);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-semibold">Students</h1>
                <p className="text-muted-foreground mt-1">
                  Manage students and their information
                </p>
              </div>
              <AddStudentDialog />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DashboardCard
                title="Total Students"
                value={students.length.toString()}
                icon={<Users className="w-6 h-6 text-primary" />}
                trend={{ value: 5, isPositive: true }}
              />
              <DashboardCard
                title="Active Students"
                value={students.length.toString()}
                icon={<GraduationCap className="w-6 h-6 text-primary" />}
              />
              <DashboardCard
                title="Average Grade"
                value="A"
                icon={<BookOpen className="w-6 h-6 text-primary" />}
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Student List</h2>
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    className="max-w-xs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                {filteredStudents.map((student, i) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary animate-fadeIn hover:bg-primary-light transition-colors"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {student.grade} • ID: {student.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = `mailto:${student.email}`}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <StudentProfile
                        student={student}
                        onUpdate={handleUpdateStudent}
                        onDelete={handleDeleteStudent}
                      />
                    </div>
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

export default Students;