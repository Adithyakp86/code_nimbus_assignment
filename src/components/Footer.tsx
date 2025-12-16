import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#3d3845] text-header-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* About Us */}
          <div>
            <h3 className="font-heading text-lg mb-5 text-white">About Us</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo errem partiendo ex cum.
            </p>
          </div>

          {/* Subscribe to Newsletter */}
          <div>
            <h3 className="font-heading text-lg mb-5 text-white">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter Your Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 pr-10 bg-transparent border-b border-white/25 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2.5 text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/10 bg-[#35303d]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            {/* Logo/Brand */}
            <div className="text-white font-heading text-xl italic tracking-wide">
              fleur<span className="text-rose">~</span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 items-center">
              <a href="#" className="text-white/55 hover:text-white text-xs transition-colors duration-300">Home</a>
              <a href="#features" className="text-white/55 hover:text-white text-xs transition-colors duration-300">About</a>
              <a href="#portfolio" className="text-white/55 hover:text-white text-xs transition-colors duration-300">Portfolio</a>
              <a href="#blog" className="text-white/55 hover:text-white text-xs transition-colors duration-300">Blog</a>
              <a href="#team" className="text-white/55 hover:text-white text-xs transition-colors duration-300">Contact</a>
            </nav>
            
            {/* Copyright */}
            <div className="text-white/45 text-xs text-center lg:text-right">
              Made with Ashrithn
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
