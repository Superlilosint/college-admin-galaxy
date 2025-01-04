import { Users, UserPlus, FileSpreadsheet, Search } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";

const Students = () => {
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
                  Manage student information and records
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Student
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DashboardCard
                title="Total Students"
                value="2,856"
                icon={<Users className="w-6 h-6 text-primary" />}
                trend={{ value: 12, isPositive: true }}
              />
              <DashboardCard
                title="New Admissions"
                value="156"
                icon={<UserPlus className="w-6 h-6 text-primary" />}
                trend={{ value: 8, isPositive: true }}
              />
              <DashboardCard
                title="Graduation Rate"
                value="94%"
                icon={<FileSpreadsheet className="w-6 h-6 text-primary" />}
                trend={{ value: 2, isPositive: true }}
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Recent Students</h2>
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
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">
                          Computer Science
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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