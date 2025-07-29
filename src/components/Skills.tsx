import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillGroupsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillGroups =
      skillGroupsRef.current?.querySelectorAll(".skill-group");

    if (skillGroups) {
      gsap.fromTo(
        skillGroups,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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

    // Animate individual skill items
    const skillItems = skillGroupsRef.current?.querySelectorAll(".skill-item");
    if (skillItems) {
      gsap.fromTo(
        skillItems,
        { opacity: 0, scale: 0.8, rotation: 10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "Express.js", icon: SiExpress, color: "text-[#CCCCCC]" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "VS Code", icon: VscCode, color: "text-[#007ACC]" },
        { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
        { name: "WordPress", icon: SiWordpress, color: "text-[#21759B]" },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Skills</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Technologies and tools I've worked with throughout my projects and
            experience
          </p>
        </div>

        <div ref={skillGroupsRef} className="grid gap-12 lg:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-group">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-item group bg-background-secondary/30 border border-border rounded-xl p-6 hover-lift cursor-pointer relative overflow-hidden"
                  >
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 text-center">
                      <div className="mb-4 flex justify-center">
                        <skill.icon
                          className={`text-4xl md:text-5xl ${skill.color} group-hover:scale-110 transition-all duration-300 skill-icon`}
                        />
                      </div>
                      <p className="text-sm md:text-base font-medium text-foreground-secondary group-hover:text-foreground transition-colors">
                        {skill.name}
                      </p>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 group-hover:animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
