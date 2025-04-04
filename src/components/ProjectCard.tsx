import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  technologies: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  features,
  technologies,
  delay = 0,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* صورة المشروع */}
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* محتوى البطاقة */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* الميزات */}
        <ul className="text-sm text-gray-500 mb-4">
          {features.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>

        {/* التقنيات المستخدمة */}
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-purple-500 text-white px-3 py-1 rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
