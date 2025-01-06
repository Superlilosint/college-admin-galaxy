import { Calendar, Clock, Users, BookOpen } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Schedule = () => {
  const handleAddEvent = () => {
    toast.success("Opening event creation dialog");
    // Event creation dialog will be implemented in the next iteration
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-secondary">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-semibold">Schedule</h1>
                <p className="text-muted-foreground mt-1">
                  Manage classes and events schedule
                </p>
              </div>
              <Button onClick={handleAddEvent}>
                <Calendar className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DashboardCard
                title="Today's Classes"
                value="12"
                icon={<BookOpen className="w-6 h-6 text-primary" />}
              />
              <DashboardCard
                title="Active Sessions"
                value="4"
                icon={<Clock className="w-6 h-6 text-primary" />}
              />
              <DashboardCard
                title="Total Events"
                value="8"
                icon={<Calendar className="w-6 h-6 text-primary" />}
                trend={{ value: 2, isPositive: true }}
              />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Upcoming Classes</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Advanced Mathematics",
                    room: "101",
                    time: "9:00 AM - 10:30 AM",
                  },
                  {
                    title: "Computer Science",
                    room: "203",
                    time: "11:00 AM - 12:30 PM",
                  },
                  {
                    title: "Physics Lab",
                    room: "302",
                    time: "2:00 PM - 3:30 PM",
                  },
                ].map((classItem, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary animate-fadeIn hover:bg-primary-light transition-colors"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{classItem.title}</p>
                        <p className="text-sm text-muted-foreground">
                          Room {classItem.room} • {classItem.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
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

export default Schedule;