import { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Sample project data structure
const sampleProject = {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online stores with real-time analytics, inventory tracking, and order management.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Tailwind CSS", "Redux", "Firebase"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.com"
};

export function ProjectCard({ project }: { project: any }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className=" w-80 m-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
                <Image
                    height={2160}
                    width={3840}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-3">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <Github size={18} />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project?.tags?.map((tag: any, index: number) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* View Details Button */}
                <button className="flex items-center font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    View Details
                    <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
                </button>
            </div>
        </div>
    );
}
