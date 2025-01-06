import { Calendar as CalendarIcon, Clock, Users, BookOpen } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { AddEventDialog } from "@/components/schedule/AddEventDialog";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (event: any) => {
    setSelectedEvent(event);
    setIsDetailsOpen(true);
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
              <AddEventDialog />
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
                icon={<CalendarIcon className="w-6 h-6 text-primary" />}
                trend={{ value: 2, isPositive: true }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Calendar</h2>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
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
                      description: "Advanced calculus and linear algebra topics",
                      instructor: "Dr. Smith"
                    },
                    {
                      title: "Computer Science",
                      room: "203",
                      time: "11:00 AM - 12:30 PM",
                      description: "Introduction to algorithms and data structures",
                      instructor: "Prof. Johnson"
                    },
                    {
                      title: "Physics Lab",
                      room: "302",
                      time: "2:00 PM - 3:30 PM",
                      description: "Practical experiments in mechanics",
                      instructor: "Dr. Brown"
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
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewDetails(classItem)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Time</Label>
              <p className="text-sm text-muted-foreground">{selectedEvent?.time}</p>
            </div>
            <div>
              <Label>Room</Label>
              <p className="text-sm text-muted-foreground">Room {selectedEvent?.room}</p>
            </div>
            <div>
              <Label>Instructor</Label>
              <p className="text-sm text-muted-foreground">{selectedEvent?.instructor}</p>
            </div>
            <div>
              <Label>Description</Label>
              <p className="text-sm text-muted-foreground">{selectedEvent?.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
};

export default Schedule;