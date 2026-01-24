import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/25cs021-star",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/dharmi-italiya-81847037a",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:25cs021@charusat.edu.in",
    label: "Email",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <Link href="#home" className="text-2xl font-black tracking-tight">
            DHARMI
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center text-background/70 hover:text-background hover:border-background transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>2025 Dharmi Italiya. All rights reserved.</p>
            <p>Made in Gujarat, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
