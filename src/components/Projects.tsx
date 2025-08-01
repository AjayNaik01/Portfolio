import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const projects = projectsRef.current?.querySelectorAll(".project-card");

    if (projects) {
      gsap.fromTo(
        projects,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

  const projects = [
    {
      title: "AI Code Review Tool",
      description:
        "Developed a full-stack code review app using Google’s Generative AI (Gemini).Built the frontend with React, featuring a live code editor and JSX syntax highlighting.",
      image: "/code-reviewer.png",
      technologies: [
        "React.js",
        "Express.js",
        "Tailwind CSS",
        "Gemini API",
        "Postman",
        "Vercel",
      ],
      liveUrl: "https://code-reviewer-tawny.vercel.app/",
      githubUrl: "https://github.com/AjayNaik01/",
    },
    {
      title: "URL Shortener",
      description:
        "Developed a full-stack URL shortener application to simplify long URLs into compact, shareable links.Built the frontend using React with a responsive UI and instant redirection preview.",
      image: "/shortUrl.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Vercel",
      ],
      liveUrl: "https://url-shortner-fonend.vercel.app/",
      githubUrl: "https://github.com/AjayNaik01/",
    },
    
    {
  title: "RentACar - Car Rental System",
  description:
    "A comprehensive web-based car rental system designed to streamline business operations. It includes a powerful admin panel for managing vehicles, users, bookings, and reviewing customer feedback. The user-facing side provides an intuitive interface for browsing cars, making reservations, and submitting feedback.",
  image: "/placeholder.svg",
  technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "SweetAlert"],
  liveUrl: "#",
  githubUrl: "https://github.com/AjayNaik01/RentACar.git",
},
    {
      title: "Weather App",
      description:
        "A modern weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features clean UI and smooth animations.",
      image: "/placeholder.svg",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      liveUrl: "https://ajaynaik01.github.io/WeatherApp/",
      githubUrl: "https://github.com/AjayNaik01/WeatherApp.git",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 bg-background-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            A showcase of my recent work and the innovative solutions I've built
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects
            .slice(0, showAll ? projects.length : 3)
            .map((project, index) => (
              <div
                key={index}
                className="project-card group bg-background-secondary/50 border border-border rounded-xl overflow-hidden hover-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-foreground-secondary leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      className="btn-gradient px-4 py-2 rounded-lg font-medium flex items-center gap-2 text-white text-sm flex-1 justify-center"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-2 bg-background-secondary/50 hover:bg-background-secondary border border-border rounded-lg hover-lift transition-all duration-300"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-gradient px-8 py-3 rounded-lg font-medium flex items-center gap-2 text-white mx-auto hover-lift"
            >
              {showAll ? (
                <>
                  <FaChevronUp className="text-sm" />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown className="text-sm" />
                  Show More
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
