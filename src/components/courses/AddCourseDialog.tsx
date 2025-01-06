import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CourseFormFields } from "./CourseFormFields";
import { BookOpen } from "lucide-react";
import { toast } from "sonner";

export function AddCourseDialog() {
  const handleAddCourse = () => {
    // TODO: Implement course addition logic
    toast.success("Course added successfully!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <BookOpen className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
        </DialogHeader>
        <CourseFormFields onSubmit={handleAddCourse} />
      </DialogContent>
    </Dialog>
  );
}