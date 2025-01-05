import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={formData.department}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
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
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                value={formData.designation}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="joinDate">Join Date</Label>
              <Input
                id="joinDate"
                type="date"
                value={formData.joinDate}
                disabled={!isEditing}
                onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
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