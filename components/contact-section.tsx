"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "25cs021@charusat.edu.in",
    href: "mailto:25cs021@charusat.edu.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9023620742",
    href: "tel:+919023620742",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhavnagar, Gujarat",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/25cs021-star",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dharmi-italiya-81847037a",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:25cs021@charusat.edu.in",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:25cs021@charusat.edu.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {"I'm currently looking for entry-level software developer opportunities. Feel free to reach out!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <Link
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-foreground/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="rounded-lg border-2 border-border focus:border-foreground"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="rounded-lg border-2 border-border focus:border-foreground"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="rounded-lg border-2 border-border focus:border-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="rounded-lg resize-none border-2 border-border focus:border-foreground"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
