import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    number: "1",
    title: "ROBOTICS",
    subtitle: "Track Tracing Robot",
    description: "Autonomous line-following robot with real-time navigation",
    bgColor: "bg-teal-500",
    textColor: "text-white",
    repoUrl: "https://github.com/25cs021-star/robotics-track-tracer",
  },
  {
    number: "2",
    title: "DSA",
    subtitle: "Data Structures Practice",
    description: "Comprehensive DSA problem solving and algorithms",
    bgColor: "bg-amber-600",
    textColor: "text-white",
    repoUrl: "https://github.com/25cs021-star/dsa-problems",
  },
  {
    number: "3",
    title: "WEB DEV",
    subtitle: "Web Projects",
    description: "Frontend and backend development projects",
    bgColor: "bg-green-500",
    textColor: "text-white",
    repoUrl: "https://github.com/25cs021-star/web-projects",
  },
  {
    number: "4",
    title: "PYTHON",
    subtitle: "Python Applications",
    description: "Automation and scripting projects",
    bgColor: "bg-red-500",
    textColor: "text-white",
    repoUrl: "https://github.com/25cs021-star/python-projects",
  },
  {
    number: "5",
    title: "ARDUINO",
    subtitle: "Hardware Projects",
    description: "Embedded systems and IoT projects",
    bgColor: "bg-blue-500",
    textColor: "text-white",
    repoUrl: "https://github.com/25cs021-star/arduino-projects",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Content Header - Large Typography */}
        <div className="relative mb-16 overflow-hidden">
          <div className="text-center">
            <div className="relative inline-block">
              <span className="text-[20vw] md:text-[15vw] font-black text-transparent [-webkit-text-stroke:2px_currentColor] text-foreground/10 leading-none tracking-tighter">
                CONTENT
              </span>
              {/* Overlapping numbers */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-8">
                <span className="text-4xl md:text-6xl font-black text-foreground/20">01</span>
                <span className="text-4xl md:text-6xl font-black text-foreground/30">02</span>
                <span className="text-5xl md:text-7xl font-black text-foreground/40">03</span>
                <span className="text-4xl md:text-6xl font-black text-foreground/30">04</span>
                <span className="text-4xl md:text-6xl font-black text-foreground/20">05</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${project.bgColor} rounded-2xl overflow-hidden aspect-[3/4] flex flex-col justify-end p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              aria-label={`View ${project.title} project on GitHub`}
            >
              {/* Project Preview Area */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                <div className="w-16 h-20 md:w-20 md:h-24 bg-white/20 rounded-lg" />
              </div>

              {/* Large Number */}
              <span
                className={`text-[8rem] md:text-[10rem] font-black ${project.textColor} opacity-30 absolute bottom-0 right-2 leading-none transition-transform duration-300 group-hover:scale-110`}
              >
                {project.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className={`text-sm font-bold ${project.textColor} uppercase tracking-wider`}
                >
                  {project.title}
                </h3>
                <p className={`text-xs ${project.textColor} opacity-80 mt-1`}>
                  {project.subtitle}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ExternalLink className="text-white transition-transform duration-300 group-hover:scale-110" size={24} />
              </div>
            </Link>
          ))}
        </div>

        {/* Project descriptions below */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {projects.map((project) => (
            <div key={`desc-${project.number}`} className="text-center">
              <p className="font-bold text-foreground text-xs uppercase">
                {project.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
