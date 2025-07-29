import { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiExpress,
} from "react-icons/si";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        iconsRef.current?.children,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.2"
      )
      .fromTo(
        techStackRef.current?.children,
        { opacity: 0, scale: 0.5, rotation: 180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.4"
      );
  }, []);

  const techStack = [
    { icon: SiHtml5, name: "HTML", color: "text-[#E34C26]" },
    { icon: SiCss3, name: "CSS", color: "text-[#264DE4]" },
    { icon: SiJavascript, name: "JavaScript", color: "text-[#F0DB4F]" },
    { icon: SiReact, name: "React.js", color: "text-[#61DAFB]" },
    { icon: SiExpress, name: "Express.js", color: "text-[#CCCCCC]" },
    { icon: SiMongodb, name: "Mongodb", color: "text-[#47A248]" },
  ];

  return (
    <section
      id="about"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="gradient-text">AJAY</span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-lg sm:text-xl md:text-2xl text-foreground-secondary font-medium"
              >
                Aspiring Web Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-foreground-secondary">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-sm sm:text-base">Udupi, Karnataka</span>
              </div>
            </div>

            <p
              ref={descriptionRef}
              className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              A highly motivated and curious individual with a strong passion
              for web development. As a fresher, I am eager to learn, grow, and
              contribute to real-world projects. I enjoy exploring new ideas,
              solving problems, and continuously improving my skills. Looking
              for an opportunity to begin my professional journey and make a
              meaningful impact as part of a dynamic team.
            </p>

            <div
              ref={iconsRef}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a
                href="https://docs.google.com/document/d/1c6bn3reOpmpCcHfcrzq2jFmBP2qQ66q7sgMKVcyMv2E/export?format=pdf"
                className="btn-gradient px-6 py-3 rounded-lg font-medium flex items-center gap-2 text-white text-sm sm:text-base"
              >
                <FaDownload className="text-sm" />
                Resume
              </a>

              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://github.com/AjayNaik01"
                  target="_blank"
                  className="p-2.5 sm:p-3 bg-background-secondary/50 hover:bg-background-secondary border border-border rounded-lg hover-lift transition-all duration-300"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajay-naik-36136323a"
                  target="_blank"
                  className="p-2.5 sm:p-3 bg-background-secondary/50 hover:bg-background-secondary border border-border rounded-lg hover-lift transition-all duration-300"
                >
                  <FaLinkedin className="text-lg sm:text-xl text-[#0077B5]" />
                </a>
                {/* <a
                  href="#"
                  className="p-2.5 sm:p-3 bg-background-secondary/50 hover:bg-background-secondary border border-border rounded-lg hover-lift transition-all duration-300"
                >
                  <FaTwitter className="text-lg sm:text-xl text-[#1DA1F2]" />
                </a> */}
              </div>
            </div>
          </div>

          <div
            ref={techStackRef}
            className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-xs sm:max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0"
          >
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="p-3 sm:p-4 lg:p-6 bg-background-secondary/30 border border-border rounded-xl hover-lift skill-icon group cursor-pointer"
              >
                <tech.icon
                  className={`text-2xl sm:text-3xl lg:text-4xl mx-auto ${tech.color} group-hover:animate-glow transition-all duration-300`}
                />
                <p className="text-xs sm:text-sm text-center mt-2 sm:mt-3 text-foreground-secondary group-hover:text-foreground transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
