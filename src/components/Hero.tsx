import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import myImage from "@/components/image/me.gif"; // استيراد الصورة

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-purple-50 to-transparent -z-10 opacity-50"></div>
      
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            Hello! I Am <br />
            <span className="text-brand-accent">Menna Tuallah Mohamed</span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            I am a Mobile Application Developer and Flutter Specialist with 2 years of experience in building fully responsive and high-performance apps. Skilled in Flutter, Dart, and Firebase, I focus on creating user-friendly and scalable mobile solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="primary-button text-base"
              onClick={scrollToContact}
            >
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              className="secondary-button text-base"
              onClick={scrollToPortfolio}
            >
              See My Work
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-scale-in">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src={myImage} 
              alt="Menna Tuallah Mohamed" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full border border-gray-300"
          onClick={() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              window.scrollTo({
                top: servicesSection.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
        >
          <ArrowDown size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
