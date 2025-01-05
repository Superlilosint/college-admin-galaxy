import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  phone: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  enrollDate: string;
}

interface StudentProfileProps {
  student: Student;
  onUpdate: (student: Student) => void;
  onDelete: (id: string) => void;
}

export function StudentProfile({ student, onUpdate, onDelete }: StudentProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(student);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
    toast.success("Student profile updated successfully!");
  };

  const handleDelete = () => {
    onDelete(student.id);
    toast.success("Student removed successfully!");
  };

  const handleContact = () => {
    window.location.href = `mailto:${student.email}`;
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
          <DialogTitle>{isEditing ? "Edit Student Profile" : "Student Profile"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="grade">Grade/Class</Label>
              <Input
                id="grade"
                value={formData.grade}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="guardianName">Guardian Name</Label>
              <Input
                id="guardianName"
                value={formData.guardianName}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="guardianPhone">Guardian Phone</Label>
              <Input
                id="guardianPhone"
                value={formData.guardianPhone}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="enrollDate">Enrollment Date</Label>
              <Input
                id="enrollDate"
                type="date"
                value={formData.enrollDate}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, enrollDate: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            {isEditing ? (
              <>
                <Button type="submit" className="flex-1">Save Changes</Button>
                <Button type="button" variant="outline" onClick={() => setIsEditing(false)} className="flex-1">
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button type="button" onClick={() => setIsEditing(true)} className="flex-1">
                  Edit Profile
                </Button>
                <Button type="button" variant="outline" onClick={handleContact} className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button type="button" variant="destructive" onClick={handleDelete} className="flex-1">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}