import { MainNav } from "@/components/main-nav";
import UserNav from "@/components/user-nav";
import Link from "next/link";

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/teampulse/dashboard",
  },
  {
    title: "Projects",
    href: "/teampulse/project",
  },
  {
    title: "Teams",
    href: "/teampulse/team",
  },
];

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="flex-col">
        <div className="border-b">
          <div className="flex h-14 items-center px-4">
            <div>
              <Link
                href="/teampulse/"
                className="text-lg font-bold tracking-tight"
              >
                TeamPulse
              </Link>
            </div>
            <MainNav className="mx-6" items={mainNavItems} />
            <div className="ml-auto flex items-center space-x-4 pr-4">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50" style={{ minHeight: "calc(100vh - 60px)" }}>
        {children}
      </div>
    </div>
  );
}
