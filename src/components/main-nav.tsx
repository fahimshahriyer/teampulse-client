import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/teampulse/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="/teampulse/project"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </Link>
      <Link
        href="/teampulse/team"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Teams
      </Link>
      <Link
        href="/teampulse/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
