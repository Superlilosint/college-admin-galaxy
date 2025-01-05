import { useState } from "react";
import { GraduationCap, Users, BookOpen, Mail } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddFacultyDialog } from "@/components/faculty/AddFacultyDialog";
import { FacultyProfile } from "@/components/faculty/FacultyProfile";

interface FacultyMember {
  id: string;
  name: string;
  email: string;
  department: string;
  phone: string;
  designation: string;
  joinDate: string;
}

const Faculty = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [facultyMembers] = useState<FacultyMember[]>([
    {
      id: "FAC001",
      name: "Dr. Jane Smith",
      email: "jane.smith@example.com",
      department: "Computer Science",
      phone: "+977-9876543210",
      designation: "Professor",
      joinDate: "2024-01-15",
    },
    // Add more faculty members as needed
  ]);

  const handleUpdateFaculty = (updatedFaculty: FacultyMember) => {
    // In the future, this will be connected to the backend
    console.log("Updated faculty:", updatedFaculty);
  };

  const handleDeleteFaculty = (id: string) => {
    // In the future, this will be connected to the backend
    console.log("Deleted faculty:", id);
  };

  const filteredFaculty = facultyMembers.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-semibold">Faculty</h1>
                <p className="text-muted-foreground mt-1">
                  Manage faculty members and departments
                </p>
              </div>
              <AddFacultyDialog />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DashboardCard
                title="Total Faculty"
                value={facultyMembers.length.toString()}
                icon={<GraduationCap className="w-6 h-6 text-primary" />}
                trend={{ value: 4, isPositive: true }}
              />
              <DashboardCard
                title="Departments"
                value="12"
                icon={<Users className="w-6 h-6 text-primary" />}
              />
              <DashboardCard
                title="Active Courses"
                value="48"
                icon={<BookOpen className="w-6 h-6 text-primary" />}
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Faculty Members</h2>
                <Input
                  placeholder="Search faculty..."
                  className="max-w-xs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="space-y-4">
                {filteredFaculty.map((faculty, i) => (
                  <div
                    key={faculty.id}
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
                        <p className="font-medium">{faculty.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {faculty.department}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = `mailto:${faculty.email}`}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <FacultyProfile
                        faculty={faculty}
                        onUpdate={handleUpdateFaculty}
                        onDelete={handleDeleteFaculty}
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

export default Faculty;