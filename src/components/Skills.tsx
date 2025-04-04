
import CircularProgress from './CircularProgress';
import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Flutter", percentage: 70 },
    { name: "Dart", percentage: 75 },
    { name: "Firebase", percentage: 80 },
    { name: "Git & GitHub", percentage: 75 },
    { name: "SQL", percentage: 70 },
    { name: "Problem-Solving", percentage: 60 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <CircularProgress
                    percentage={skill.percentage}
                    label={skill.name}
                    progressColor={
                      index % 3 === 0 ? '#8b5cf6' : 
                      index % 3 === 1 ? '#6366f1' : 
                      '#a855f7'
                    }
                    animate={true}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h4 className="section-subtitle">My Skills</h4>
            <h2 className="section-title mb-6">Creating Scalable & Efficient Mobile Apps</h2>
            
            <p className="text-gray-600 mb-4">
              Passionate about developing high-quality mobile applications using Flutter, ensuring smooth user experience and seamless functionality.
            </p>
            
            <p className="text-gray-600 mb-6">
              Expertise in Firebase integration, state management, and problem-solving to deliver optimized solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="primary-button flex items-center gap-2">
                <FileDownIcon size={18} />
                <a
                  href="/Menna-tuallah-mohamed.pdf"
                  download="MennaTuallahMohamed-CV"
                  className="text-white"
                >
                  Download CV
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="secondary-button"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    window.scrollTo({
                      top: aboutSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
