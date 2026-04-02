import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, BookOpen, Eye, Pencil } from "lucide-react";
import type { UserRole } from "@/context/AuthContext";

const roleLabels: Record<UserRole, string> = {
  researcher:   "Researcher",
  student:      "Student",
  academic:     "Academic",
  professional: "Professional",
  institution:  "Institution",
};

const roleColors: Record<UserRole, string> = {
  researcher:   "bg-accent/10 text-accent",
  student:      "bg-primary/10 text-primary",
  academic:     "bg-afrika-green/10 text-afrika-green",
  professional: "bg-amber-500/10 text-amber-600",
  institution:  "bg-blue-500/10 text-blue-600",
};

export default function ResearchIdentityCard() {
  const { user } = useAuth();

  const displayName = user?.username || "Researcher";
  const role        = user?.role;
  const initial     = displayName.charAt(0).toUpperCase();

  return (
    <div className="bg-card rounded-xl border border-border p-5">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xl font-bold shrink-0">
          {initial}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-lg font-bold text-foreground">{displayName}</h2>
            {role && (
              <Badge className={`text-[10px] ${roleColors[role]}`}>
                {roleLabels[role]}
              </Badge>
            )}
          </div>

          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{user?.email || "No email"}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 shrink-0">
          <Link to="/dashboard/profile">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs w-full">
              <Eye className="h-3 w-3" /> View
            </Button>
          </Link>
          <Link to="/dashboard/settings">
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs w-full">
              <Pencil className="h-3 w-3" /> Edit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}