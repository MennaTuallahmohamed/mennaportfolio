import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";
import profileImage from "@/components/image/profile.jpg.jpg";// Updated image import path

const About: React.FC = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Database Management",
    "Object-Oriented Programming",
    "Software Engineering",
    "Operating Systems",
    "Computer Networks",
    "Mobile Development",
  ];

  const certifications = [
    {
      title: "IBM Certification in Front-End Development",
      year: "2023",
      issuer: "Coursera",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Flutter with Firebase Course",
      year: "2022",
      issuer: "Instant",
      skills: ["Flutter", "Firebase", "Authentication", "Cloud Firestore"],
    },
    {
      title: "Advanced Flutter Development",
      year: "2022",
      issuer: "Udemy - Tharwat Samy",
      skills: [
        "State Management",
        "Architecture Patterns",
        "Performance Optimization",
      ],
    },
    {
      title: "Advanced Flutter Development with BLoC",
      year: "2022",
      issuer: "Udemy",
      skills: [
        "State Management with BLoC",
        "Architecture Patterns",
        "Performance Optimization",
        "Flutter Development",
      ],
      instructors: ["Tharwat Samy", "Abdallah Yassin"],
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* صورة البروفايل بتصميم احترافي */}
          <div className="relative flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-brand-primary shadow-lg">

    <img 
                src={profileImage} // Using the imported image
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* دوائر زينة للخلفية */}
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-brand-primary rounded-full opacity-20"></div>
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-accent rounded-full opacity-10"></div>
          </div>

          {/* المحتوى النصي */}
          <div>
            <h4 className="text-brand-primary font-medium mb-2 uppercase tracking-wider">
              About Me
            </h4>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Mobile Developer & Computer Science Student
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a passionate <strong>Mobile Application Developer</strong> and a final-year
              <strong> Computer Science</strong> student at Arab Open University.
              I specialize in <strong>Flutter, Dart, Firebase</strong>, and cross-platform app development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Throughout my academic journey, I have studied various computer science subjects that enhanced my
              problem-solving and development skills.
            </p>

            {/* المواد الدراسية */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Subjects Studied:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {courses.map((course, index) => (
                <Badge key={index} className="bg-purple-100 text-brand-primary px-3 py-1 rounded-md">
                  {course}
                </Badge>
              ))}
            </div>

            {/* الشهادات بتصميم شبكي احترافي */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Certifications:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-brand-primary mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-500">{cert.year} - {cert.issuer}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* زر تحميل السيرة الذاتية */}
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white flex items-center gap-2 px-6 py-2.5 rounded-lg mt-6 shadow-md hover:shadow-lg transition-all duration-300">
              <FileDownIcon size={18} />
              <a href="/Menna-tuallah-mohamed.pdf" download="MennaTuallahMohamed-CV" className="text-white">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;