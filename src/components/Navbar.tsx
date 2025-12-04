import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall } from "lucide-react";
import Topbar from "@/components/Topbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#appointment" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-border"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      {!isScrolled && <Topbar />}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 lg:h-18">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/media/logo.png"
              alt="The Tooth Co. Logo"
              className="h-16 lg:h-[75px] w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Book Appointment Button */}
          {/* <div className="hidden md:block">
            <Button
              variant="ghost"
              size="default"
              onClick={() =>
                document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-semibold"
            >
              Book Appointment
            </Button>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-sm border-t border-border shadow-lg px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <Button
              variant="dental"
              size="sm"
              className="w-full"
              onClick={() => {
                setIsOpen(false);
                document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
