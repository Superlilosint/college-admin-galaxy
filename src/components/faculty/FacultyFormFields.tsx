import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FacultyMember {
  id: string;
  name: string;
  email: string;
  department: string;
  phone: string;
  designation: string;
  joinDate: string;
}

interface FacultyFormFieldsProps {
  formData: FacultyMember;
  isEditing: boolean;
  onChange: (field: keyof FacultyMember, value: string) => void;
}

export function FacultyFormFields({ formData, isEditing, onChange }: FacultyFormFieldsProps) {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          disabled={!isEditing}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          disabled={!isEditing}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="department">Department</Label>
        <Input
          id="department"
          value={formData.department}
          disabled={!isEditing}
          onChange={(e) => onChange("department", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          value={formData.phone}
          disabled={!isEditing}
          onChange={(e) => onChange("phone", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="designation">Designation</Label>
        <Input
          id="designation"
          value={formData.designation}
          disabled={!isEditing}
          onChange={(e) => onChange("designation", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="joinDate">Join Date</Label>
        <Input
          id="joinDate"
          type="date"
          value={formData.joinDate}
          disabled={!isEditing}
          onChange={(e) => onChange("joinDate", e.target.value)}
        />
      </div>
    </div>
  );
}