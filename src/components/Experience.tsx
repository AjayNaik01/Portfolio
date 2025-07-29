import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll(".timeline-item");

    if (items) {
      gsap.fromTo(
        items,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const experiences = [
    {
      position: "Web Developer",
      company: "St Joseph Engineering College, Mangaluru",
      period: "Oct 2024 – Nov 2024",
      location: "On-site",
      description:
        "Worked on the 'Academic Assignment Tracker' project using both frontend and backend technologies. Gained practical experience in full-stack development and received appreciation for the work.",
      highlights: [],
      technologies: [
        "React",
        "TailwindCSS",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            My professional journey and the exciting projects I've worked on
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item mb-12 relative ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background ${
                  index % 2 === 0
                    ? "left-6 md:right-0 md:left-auto md:transform md:translate-x-1/2"
                    : "left-6 md:left-0 md:transform md:-translate-x-1/2"
                } top-6`}
              ></div>

              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="bg-background-secondary/30 border border-border rounded-xl p-6 hover-lift group">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-foreground-secondary">
                      <span>{exp.period}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4 text-sm text-foreground-secondary">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-xs">▶</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
