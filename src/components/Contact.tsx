import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll(
      ".contact-item, .contact-form"
    );

    if (elements) {
      gsap.fromTo(
        elements,
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
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });
    } catch (error: any) {
      console.error("Email error:", error.text || error.message);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "naikajay952@gmail.com",
      link: "mailto:naikajay952@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 82960 88022",
      link: "tel:+918296088022",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Udupi, Karnataka",
      link: null,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/ajay-naik-36136323a",
      link: "https://www.linkedin.com/in/ajay-naik-36136323a",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Let's connect and discuss how we can work together on your next
            project
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="contact-item space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary font-medium">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-background-secondary/50 border border-border rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h3>

              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-foreground-secondary/60"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-foreground-secondary/60"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background-tertiary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder-foreground-secondary/60 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-gradient px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-white ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Submit Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
