import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface CourseFormFieldsProps {
  onSubmit: () => void;
  initialData?: {
    courseCode: string;
    courseName: string;
    credits: string;
    instructor: string;
    capacity: string;
  };
}

export function CourseFormFields({ onSubmit, initialData }: CourseFormFieldsProps) {
  const [formData, setFormData] = useState({
    courseCode: initialData?.courseCode || "",
    courseName: initialData?.courseName || "",
    credits: initialData?.credits || "",
    instructor: initialData?.instructor || "",
    capacity: initialData?.capacity || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="courseCode">Course Code</Label>
        <Input
          id="courseCode"
          value={formData.courseCode}
          onChange={(e) =>
            setFormData({ ...formData, courseCode: e.target.value })
          }
          placeholder="e.g., CS101"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="courseName">Course Name</Label>
        <Input
          id="courseName"
          value={formData.courseName}
          onChange={(e) =>
            setFormData({ ...formData, courseName: e.target.value })
          }
          placeholder="Introduction to Computer Science"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="credits">Credits</Label>
        <Input
          id="credits"
          type="number"
          value={formData.credits}
          onChange={(e) => setFormData({ ...formData, credits: e.target.value })}
          placeholder="3"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="instructor">Instructor</Label>
        <Input
          id="instructor"
          value={formData.instructor}
          onChange={(e) =>
            setFormData({ ...formData, instructor: e.target.value })
          }
          placeholder="Dr. John Doe"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="capacity">Capacity</Label>
        <Input
          id="capacity"
          type="number"
          value={formData.capacity}
          onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
          placeholder="30"
        />
      </div>
      <Button type="submit" className="w-full">
        Save Course
      </Button>
    </form>
  );
}