
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    id: 1,
    title: "MindBalance App",
    description: "A comprehensive app for mental wellbeing and productivity.",
    features: ["To-do list", "Notes", "AI chatbot", "Fitness notifications", "Screen time tracking"],
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Tunes App",
    description: "Music streaming application with personalized playlist creation.",
    features: ["Music streaming", "Personalized playlist creation", "User profiles", "Search functionality"],
    technologies: ["Flutter", "API integration", "Dart"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    color: "from-blue-500 to-purple-500"
  },
  {
    id: 3,
    title: "News App",
    description: "Real-time news aggregation with user customization options.",
    features: ["Real-time news", "User customization", "Bookmarks", "Categories"],
    technologies: ["Flutter", "Dart", "News API"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    title: "Chat App",
    description: "Real-time messaging application with advanced functionalities.",
    features: ["Real-time messaging", "User profiles", "Media sharing", "Read receipts"],
    technologies: ["Flutter", "Firebase", "Cloud Functions"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 5,
    title: "Notes App",
    description: "Feature-rich application to organize and categorize notes seamlessly.",
    features: ["Note creation", "Categories", "Search", "Export options"],
    technologies: ["Flutter", "Dart", "Local storage"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 6,
    title: "Weather App",
    description: "Live weather updates with a clean, user-friendly interface.",
    features: ["Live weather updates", "Forecast", "Location-based", "Weather maps"],
    technologies: ["Flutter", "Weather API", "Geolocation"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    color: "from-sky-500 to-indigo-500"
  },
  {
    id: 7,
    title: "Quiz App",
    description: "Interactive quiz application with scoring and progress tracking.",
    features: ["Interactive quizzes", "Scoring", "Progress tracking", "Multiple categories"],
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    color: "from-pink-500 to-rose-500"
  },
  {
  id: 8,
    title: "Meals App",
    description: "Discover and save delicious recipes with step-by-step guides.",
    features: ["Recipe search", "Step-by-step cooking", "Favorites", "Shopping list"],
    technologies: ["Flutter", "Dart", "API Integration"],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 9,
    title: "Bookly App",
    description: "Track and organize your reading habits with Bookly.",
    features: ["Reading tracker", "Book library", "Bookmarks", "Notes"],
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80",
    color: "from-purple-500 to-indigo-500",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="text-3xl font-bold mb-8 text-center gradient-heading">PROFESSIONAL PROJECTS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Card key={project.id} className="project-card overflow-hidden border border-gray-200">
            <div className="h-48 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center`}>
                  <h3 className="text-white text-2xl font-bold px-4 text-center">{project.title}</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm text-portfolio-primary mb-2">FEATURES:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <h4 className="font-semibold text-sm text-portfolio-primary mb-2">TECHNOLOGIES:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="skill-tag bg-portfolio-accent text-portfolio-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Projects;


