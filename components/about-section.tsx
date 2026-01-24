import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const experiences = [
  {
    title: "Computer Science Student",
    org: "CSPIT, CHARUSAT",
    period: "2025 - Present",
  },
  {
    title: "AI/ML Club Member",
    org: "CSPIT Technical Clubs",
    period: "2025 - Present",
  },
  {
    title: "Web Development Club",
    org: "CSPIT Technical Clubs",
    period: "2025 - Present",
  },
  {
    title: "Techathon Participant",
    org: "Hackathon Event",
    period: "2025",
  },
];

const activities = [
  {
    title: "Drawing Competition Winner",
    org: "Recognized for creativity",
  },
  {
    title: "MYSY Scholarship",
    org: "Academic excellence award",
  },
  {
    title: "Active in Sports",
    org: "Cricket, Volleyball, Football",
  },
];

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/25cs021-star",
    href: "https://github.com/25cs021-star",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dharmi-italiya-81847037a",
    href: "https://linkedin.com/in/dharmi-italiya-81847037a",
  },
  {
    icon: Mail,
    label: "Email",
    value: "25cs021@charusat.edu.in",
    href: "mailto:25cs021@charusat.edu.in",
  },
];

const skills = [
  { name: "C", color: "bg-blue-500" },
  { name: "C++", color: "bg-blue-600" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "MongoDB", color: "bg-green-600" },
  { name: "Git", color: "bg-orange-500" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left - ID Badge Style Photo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Lanyard */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-8 h-20 bg-muted rounded-b-full" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-2 h-6 bg-muted-foreground/30 rounded" />
              
              {/* ID Card */}
              <div className="w-48 bg-card border-2 border-border rounded-xl p-4 shadow-lg relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-muted-foreground/20 rounded-full" />
                <div className="w-full aspect-[4/5] rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 flex items-center justify-center mt-4">
                  <span className="text-4xl font-black text-foreground/70">DI</span>
                </div>
                <div className="text-center mt-4">
                  <p className="font-bold text-foreground text-sm">Dharmi Italiya</p>
                  <p className="text-xs text-muted-foreground">B.Tech CS | CSPIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center - About Text */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {"Hi, I'm"} <span className="italic">Dharmi</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {"I am a Computer Science undergraduate and I code because I love solving problems, questioning 'why,' and making things work right. Software isn't just about screens, it's about logic, efficiency, and the tiny details that make a product worth using. It's not just about writing code; it's about writing clean code. If it works and makes sense, I've done my job."}
            </p>

            {/* Experience Grid */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div>
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
                  Experience
                </h3>
                <div className="space-y-3">
                  {experiences.slice(0, 4).map((exp) => (
                    <div key={exp.title}>
                      <p className="font-medium text-foreground text-sm">
                        {exp.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.org} - {exp.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
                  Achievements
                </h3>
                <div className="space-y-3">
                  {activities.map((act) => (
                    <div key={act.title}>
                      <p className="font-medium text-foreground text-sm">
                        {act.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{act.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact & Skills */}
          <div className="lg:col-span-4">
            {/* Contact */}
            <div className="mb-8">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                      <contact.icon size={14} />
                    </div>
                    <span className="text-sm truncate">{contact.value}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Skills/Technologies */}
            <div>
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`w-10 h-10 rounded-lg ${skill.color} flex items-center justify-center text-white text-xs font-bold`}
                    title={skill.name}
                  >
                    {skill.name.slice(0, 2).toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
