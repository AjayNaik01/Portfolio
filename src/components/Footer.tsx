import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-foreground-secondary">
            <span>© 2025 Ajay. Made with</span>
            <FaHeart className="text-red-500 text-sm animate-pulse" />
            <span>and lots of coffee</span>
          </div>
          <p className="text-sm text-foreground-secondary/80 mt-2">
            Built with React, Tailwind CSS & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
