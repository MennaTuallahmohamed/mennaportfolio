
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-primary text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              Mobile Application Developer and Flutter Specialist creating seamless, high-performance apps.
            </p>
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-brand-primary transition-colors"
              onClick={scrollToTop}
            >
              Back to Top
            </Button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Skills', 'Portfolio', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Nasr City, Cairo, Egypt</li>
              <li>+20 101 044 7361</li>
              <li>menna15sadek@gmail.com</li>
            </ul>
            
            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              
              <a 
                href="https://github.com/MennaTuallahmohamed" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Menna Tuallah Mohamed | All Rights Reserved</p>
        </div>
      </div>
      
      {/* Back to top button */}
      <Button 
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 rounded-full bg-brand-primary border-white/20 text-white hover:bg-purple-800 shadow-lg z-50"
        onClick={scrollToTop}
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};

export default Footer;
