import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CourseFormFields } from "./CourseFormFields";
import { toast } from "sonner";
import { useState } from "react";

interface CourseProfileProps {
  course: {
    courseCode: string;
    courseName: string;
    credits: string;
    instructor: string;
    capacity: string;
  };
}

export function CourseProfile({ course }: CourseProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(course);

  const handleEdit = () => {
    // In a real application, this would make an API call to update the course
    setCurrentCourse(currentCourse);
    setIsOpen(false);
    toast.success("Course updated successfully!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Course Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <CourseFormFields onSubmit={handleEdit} initialData={currentCourse} />
        </div>
      </DialogContent>
    </Dialog>
  );
}