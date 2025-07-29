import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".education-card");

    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "St. Joseph Engineering College, Vamanjoor, Mangalore",
      period: "Jan 2023 - Aug 2025",
      cgpa: "7.7/10",
      description:
        "Strong foundation in programming, database management, and computer fundamentals.",
      icon: FaGraduationCap,
    },
    {
      degree: "Bachelor of Computer Applications",
      institution:
        "Smt. Rukmini Shedthi Memorial National Government First Grade College",
      period: "Aug 2020 - Jun 2023",
      cgpa: "6.9/10",
      description:
        "Focused on software engineering principles, data structures, algorithms, and web development technologies.",
      icon: FaGraduationCap,
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-6 bg-background-secondary/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
            My academic journey and the knowledge foundation that drives my
            passion for technology
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:gap-12">
          {education
            .slice(0, showAll ? education.length : 2)
            .map((edu, index) => (
              <div
                key={index}
                className="education-card bg-background-secondary/50 border border-border rounded-xl p-8 hover-lift group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <edu.icon className="text-2xl text-primary" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary font-medium mt-1">
                          {edu.institution}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-foreground-secondary">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-primary text-sm" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">CGPA:</span>
                          <span className="text-sm font-bold text-primary">
                            {edu.cgpa}
                          </span>
                        </div>
                      </div>

                      <p className="text-foreground-secondary leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {education.length > 2 && (
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

export default Education;
