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
  const handleEdit = () => {
    // TODO: Implement edit logic
    toast.success("Course updated successfully!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Course Details</DialogTitle>
        </DialogHeader>
        <CourseFormFields onSubmit={handleEdit} initialData={course} />
      </DialogContent>
    </Dialog>
  );
}