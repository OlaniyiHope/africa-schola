import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navItems = [

  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "Network", href: "/network" },
  {
    label: "Advisory",
    href: "/advisory",
    children: [
      { label: "Overview", href: "/advisory", description: "Educational & University Advisory services" },
      { label: "Transcript Advisory", href: "/advisory/transcripts", description: "University transcript processing guidance" },
      { label: "Degree Programs", href: "/advisory/degrees", description: "Part-time, Master's & Doctoral pathways" },
      { label: "Study in Africa", href: "/advisory/study-in-africa", description: "Academic mobility opportunities" },
    ],
  },
  {
    label: "Publishing",
    href: "/publishing",
    children: [
      { label: "Submit Manuscript", href: "/publishing/submit", description: "Submit your research for publication" },
      { label: "Start a Journal", href: "/publishing/start-journal", description: "Launch a new academic journal" },
      { label: "Call for Papers", href: "/publishing/calls", description: "Open calls and special issues" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-section flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Afrika Scholar" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent",
                      isActive(item.href) && "text-accent"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={child.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent",
                                isActive(child.href) && "bg-accent/10 text-accent"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">
                                {child.label}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {child.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      isActive(item.href) && "text-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" asChild>
            <Link to="/network/apply">Join Network</Link>
          </Button>
          <Button className="bg-accent hover:bg-accent/90" asChild>
            <Link to="/publishing/submit">Publish Paper</Link>
          </Button>
            <Button className="bg-accent hover:bg-accent/90" asChild>
    <Link to="/publeesh">Publeesh</Link>
  </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container-section py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <MobileNavDropdown
                      item={item}
                      isActive={isActive}
                      onItemClick={() => setMobileMenuOpen(false)}
                    />
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block py-2 text-lg font-medium hover:text-accent",
                        isActive(item.href) && "text-accent"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/network/apply" onClick={() => setMobileMenuOpen(false)}>
                  Join Network
                </Link>
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <Link to="/publishing/submit" onClick={() => setMobileMenuOpen(false)}>
                  Publish Paper
                </Link>
              </Button>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
    <Link to="/publeesh" onClick={() => setMobileMenuOpen(false)}>
      Publeesh
    </Link>
  </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

interface MobileNavDropdownProps {
  item: {
    label: string;
    href: string;
    children?: { label: string; href: string; description: string }[];
  };
  isActive: (href: string) => boolean;
  onItemClick: () => void;
}

function MobileNavDropdown({ item, isActive, onItemClick }: MobileNavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className={cn(
          "flex w-full items-center justify-between py-2 text-lg font-medium hover:text-accent",
          isActive(item.href) && "text-accent"
        )}
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && item.children && (
        <ul className="ml-4 space-y-1 border-l-2 border-accent/20 pl-4">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                to={child.href}
                className={cn(
                  "block py-2 text-base hover:text-accent",
                  isActive(child.href) && "text-accent"
                )}
                onClick={onItemClick}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
