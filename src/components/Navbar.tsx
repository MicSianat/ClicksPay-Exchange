import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/landing" },
  { name: "Calculator", href: "/calculator" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-secondary">
              ClicksPay<span className="text-primary">Agency</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Button
              render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="sm"
              className="bg-primary hover:bg-primary/90 rounded-full px-6"
            >
              WhatsApp Us
            </Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="sm"
            className="h-8 px-3 rounded-full"
          >
            WhatsApp
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              nativeButton={true}
              render={
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button
                    render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} />}
                    nativeButton={false}
                    className="w-full bg-primary rounded-full"
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
