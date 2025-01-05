import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { FacultyFormFields } from "./FacultyFormFields";
import { FacultyActionButtons } from "./FacultyActionButtons";

interface FacultyMember {
  id: string;
  name: string;
  email: string;
  department: string;
  phone: string;
  designation: string;
  joinDate: string;
}

interface FacultyProfileProps {
  faculty: FacultyMember;
  onUpdate: (faculty: FacultyMember) => void;
  onDelete: (id: string) => void;
}

export function FacultyProfile({ faculty, onUpdate, onDelete }: FacultyProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(faculty);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
    toast.success("Faculty profile updated successfully!");
  };

  const handleDelete = () => {
    onDelete(faculty.id);
    toast.success("Faculty member removed successfully!");
  };

  const handleContact = () => {
    window.location.href = `mailto:${faculty.email}`;
  };

  const handleFieldChange = (field: keyof FacultyMember, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Faculty Profile" : "Faculty Profile"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FacultyFormFields
            formData={formData}
            isEditing={isEditing}
            onChange={handleFieldChange}
          />
          <div className="flex justify-between gap-2">
            <FacultyActionButtons
              isEditing={isEditing}
              onEdit={() => setIsEditing(true)}
              onCancel={() => setIsEditing(false)}
              onContact={handleContact}
              onDelete={handleDelete}
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}