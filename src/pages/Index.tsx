import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { useNavigate } from "react-router-dom";
import {
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();

  const handleQuickAction = (path: string, action: string) => {
    toast.success(`Navigating to ${action}`);
    navigate(path);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-semibold">Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Welcome back, Admin
                </p>
              </div>
              <SidebarTrigger />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <DashboardCard
                title="Total Students"
                value="2,856"
                icon={<Users className="w-6 h-6 text-primary" />}
                trend={{ value: 12, isPositive: true }}
              />
              <DashboardCard
                title="Faculty Members"
                value="164"
                icon={<GraduationCap className="w-6 h-6 text-primary" />}
                trend={{ value: 4, isPositive: true }}
              />
              <DashboardCard
                title="Active Courses"
                value="48"
                icon={<BookOpen className="w-6 h-6 text-primary" />}
                trend={{ value: 2, isPositive: false }}
              />
              <DashboardCard
                title="Upcoming Events"
                value="8"
                icon={<Calendar className="w-6 h-6 text-primary" />}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary animate-fadeIn"
                      style={{
                        animationDelay: `${i * 100}ms`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">New student registration</p>
                        <p className="text-sm text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Add Student",
                      icon: <Users className="w-5 h-5" />,
                      path: "/students",
                    },
                    {
                      title: "Add Faculty",
                      icon: <GraduationCap className="w-5 h-5" />,
                      path: "/faculty",
                    },
                    {
                      title: "Create Course",
                      icon: <BookOpen className="w-5 h-5" />,
                      path: "/courses",
                    },
                    {
                      title: "Schedule Event",
                      icon: <Calendar className="w-5 h-5" />,
                      path: "/schedule",
                    },
                  ].map((action) => (
                    <button
                      key={action.title}
                      onClick={() => handleQuickAction(action.path, action.title)}
                      className="p-4 rounded-lg bg-secondary hover:bg-primary-light transition-colors flex flex-col items-center gap-2 animate-fadeIn"
                    >
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        {action.icon}
                      </div>
                      <span className="text-sm font-medium">{action.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;