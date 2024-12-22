"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import { Github, Link as LinkIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ProjectSlider />
    </motion.div>
  );
};

const ProjectSlider = () => {
  const projects: ProjectProps[] = [
    {
      title: "Wolfs Academy",
      description:
        "Kid's learning website for Wolfs Academy, have developed functionality point to currency for purchasing courses.",
      image: "/project-images/wolfs.png",
      technologies: ["LMS", "LearnPress", "Mycred", "Woocommerce"],
      githubLink: "#",
      liveLink: "https://wolfsacademy.com/",
    },
    {
      title: "Borbila",
      description: "E-commerce platform with real-time inventory management",
      image: "/project-images/borbila.png",
      technologies: ["TypeScript", "Node.js", "PostgreSQL", "Redis"],
      githubLink: "#",
      liveLink: "https://borbila.com",
    },
    {
      title: "Project Three",
      description: "Mobile-first social media dashboard with analytics",
      image: "/project-images/ctsw.png",
      technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
      githubLink: "https://github.com/username/project-three",
      liveLink: "https://project-three.com",
    },
    {
      title: "Project Four",
      description: "AI-powered content management system",
      image: "/project-images/prm.png",
      technologies: ["Python", "Django", "TensorFlow", "AWS"],
      githubLink: "https://github.com/username/project-four",
      liveLink: "https://project-four.com",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h1>

        <div className="max-w-3xl mx-auto">
          <Swiper
            effect="cube"
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectCube, Pagination, Autoplay]}
            className="w-full aspect-[4/3]"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-1/2 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github size={20} />
                        Code
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <LinkIcon size={20} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
