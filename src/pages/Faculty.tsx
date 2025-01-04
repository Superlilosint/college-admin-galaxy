import { GraduationCap, Users, BookOpen, Mail } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";

const Faculty = () => {
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
              <Button>
                <Users className="w-4 h-4 mr-2" />
                Add Faculty Member
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DashboardCard
                title="Total Faculty"
                value="164"
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
              <h2 className="text-lg font-semibold mb-4">Faculty Members</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
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
                        <p className="font-medium">Dr. Jane Smith</p>
                        <p className="text-sm text-muted-foreground">
                          Computer Science Department
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
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