import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const footerLinks = {
  platform: [
    { label: "About Us", href: "/about" },

    { label: "Blog", href: "/blog" },
    { label: "Publeesh", href: "/publeesh" },
    { label: "Compliance", href: "/compliance" },
   
  ],
  publications: [
    { label: "Browse Publications", href: "/publications" },
    { label: "Submit Manuscript", href: "/publishing/submit" },
    { label: "Start a Journal", href: "/publishing/start-journal" },
    { label: "Call for Papers", href: "/publishing/calls" },
  ],
  advisory: [
    { label: "Transcript Advisory", href: "/advisory/transcripts" },
    { label: "Degree Programs", href: "/advisory/degrees" },
    { label: "Study in Africa", href: "/advisory/study-in-africa" },
 
  ],
  network: [

    { label: "Join Network", href: "/network/apply" },
    { label: "For Institutions", href: "/network#institutions" },
    { label: "Publish", href: "/publishing/submit" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-section py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Get the latest research, publications, and opportunities
                delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-block">
              <img
                src={logo}
                alt="Afrika Scholar"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Pan-African Academic Publishing, Research & University Enablement
              Infrastructure. Empowering African scholarship and bridging
              knowledge gaps across the continent.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@afrikascholar.org"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@afrikascholar.org
              </a>
              <a
                href="tel:+2341234567890"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                +234 123 456 7890
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications Links */}
          <div>
            <h4 className="font-semibold mb-4">Publications</h4>
            <ul className="space-y-2">
              {footerLinks.publications.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory Links */}
          <div>
            <h4 className="font-semibold mb-4">Advisory</h4>
            <ul className="space-y-2">
              {footerLinks.advisory.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.network.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-section py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/60">
              <span>
                © {new Date().getFullYear()} Afrika Scholar. All rights
                reserved.
              </span>
              <span className="hidden md:inline">•</span>
              <Link
                to="/privacy"
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/60">
                Powered by
              </span>
              <a
                href="https://cyclebreeze.com"
              
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                CycleBreeze
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
              href="https://instagram.com/afrika_scholar"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
  aria-label="Instagram"
>
  <Instagram className="h-5 w-5" />
</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
