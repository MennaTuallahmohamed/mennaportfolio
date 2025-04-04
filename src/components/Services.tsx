
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Database, Code } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services = () => {
  const [services] = useState<Service[]>([
    {
      id: 1,
      title: "Flutter App Development",
      description: "Creating high-performance, cross-platform mobile applications with a seamless user experience.",
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Backend Integration",
      description: "Building and managing backend solutions using Firebase for secure and scalable applications.",
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Debugging & Optimization",
      description: "Ensuring smooth performance by identifying and fixing bugs, enhancing app efficiency.",
      icon: <Code className="w-8 h-8" />
    }
  ]);

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h4 className="section-subtitle">My Expertise</h4>
          <h2 className="section-title">Providing a Wide Range of Mobile Development Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="border border-gray-100 shadow-sm overflow-hidden card-hover bg-white">
              <CardContent className="p-8">
                <div 
                  className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 text-brand-primary"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <a 
                  href="#portfolio" 
                  className="text-brand-primary font-medium inline-flex items-center hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    const portfolioSection = document.getElementById('portfolio');
                    if (portfolioSection) {
                      window.scrollTo({
                        top: portfolioSection.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  See Projects
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
