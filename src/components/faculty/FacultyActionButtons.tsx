import { Button } from "@/components/ui/button";
import { Mail, Trash2 } from "lucide-react";

interface FacultyActionButtonsProps {
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onContact: () => void;
  onDelete: () => void;
}

export function FacultyActionButtons({
  isEditing,
  onEdit,
  onCancel,
  onContact,
  onDelete,
}: FacultyActionButtonsProps) {
  if (isEditing) {
    return (
      <>
        <Button type="submit" className="flex-1">Save Changes</Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
      </>
    );
  }

  return (
    <>
      <Button type="button" onClick={onEdit} className="flex-1">
        Edit Profile
      </Button>
      <Button type="button" variant="outline" onClick={onContact} className="flex-1">
        <Mail className="w-4 h-4 mr-2" />
        Contact
      </Button>
      <Button type="button" variant="destructive" onClick={onDelete} className="flex-1">
        <Trash2 className="w-4 h-4 mr-2" />
        Delete
      </Button>
    </>
  );
}