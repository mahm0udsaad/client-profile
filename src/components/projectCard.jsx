import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="rounded-md shadow-md p-4 mb-4 h-full">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-auto rounded-t-md object-cover lg:w-1/2 lg:mx-auto"
    />
    <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
    <p className="text-gray-600 mb-3">{project.description}</p>
    <ul className="flex space-x-2">
      {project.technologies.map((tech, index) => (
        <li
          key={index}
          className="text-gray-600 px-2 py-1 rounded"
        >
          {tech}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ProjectCard;