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
      title: "Simple Shop",
      description: "Simple shop woocommerce theme.",
      image: "/project-images/simpleshop.png",
      technologies: ["Woocommerce", "kirki", "Customizer", "WordPress"],
      githubLink: "https://github.com/ashrafbd1496/simpleshop",
      liveLink: "#",
    },
    {
      title: "React Quiz App",
      description: "Crazy animal slider using html, css and js.",
      image: "/project-images/quizapp.png",
      technologies: ["Html5", "Css3", "Js", "Vercel"],
      githubLink: "https://github.com/ashrafbd1496/Quiz-App",
      liveLink: "#",
    },
    {
      title: "Wp Meal Theme  Slider",
      description: "Food Receipe , selling website.",
      image: "/project-images/meal.jpg",
      technologies: ["Codestar", "Metabox", "isotop", "owlcarousel"],
      githubLink: "https://github.com/ashrafbd1496/Meal-WP",
      liveLink: "#",
    },
    {
      title: "Crazy  Slider",
      description: "Crazy animal slider using html, css and js.",
      image: "/project-images/crazyslider.png",
      technologies: ["Html5", "Css3", "Js", "Vercel"],
      githubLink: "https://github.com/ashrafbd1496/js-projects",
      liveLink: "https://crazy-slider-pi.vercel.app/",
    },
    {
      title: "Philosophy Theme",
      description:
        "Philosophy template converted into WordPress philosophy theme.",
      image: "/project-images/philosophy.png",
      technologies: ["Codestar", "Metabox", "Tgm", "WordPress"],
      githubLink: "https://github.com/ashrafbd1496/philosophy-theme",
      liveLink: "https://github.com/ashrafbd1496/philosophy-theme",
    },
    {
      title: "Wolfs Academy",
      description: "Kid's learning LMS website.",
      image: "/project-images/wolfs.png",
      technologies: ["LMS", "LearnPress", "Mycred", "Woocommerce"],
      githubLink: "#",
      liveLink: "https://wolfsacademy.com/",
    },
    {
      title: "Borbila",
      description: "E-commerce platform with real-time inventory management",
      image: "/project-images/borbila.png",
      technologies: ["Elementor", "Hello Theme", "Woocommerce", "WordPress"],
      githubLink: "#",
      liveLink: "https://borbila.com",
    },
    {
      title: "Prem Hospitality",
      description: "AI-powered content management system",
      image: "/project-images/prm.png",
      technologies: ["Elementor", "Woocommerce", "Booking", "Stripe"],
      githubLink: "#",
      liveLink: "https://www.prem-hospitality.com/en",
    },
    {
      title: "Aquila theme",
      description: "Advance wp theme developed.",
      image: "/project-images/Aquila.png",
      technologies: ["Php", "OOP", "React", "WordPress"],
      githubLink: "https://github.com/ashrafbd1496/Aquila-theme-dev",
      liveLink: "#",
    },
    {
      title: "Ezfil",
      description: "EzFill is a mobile fuel delivery service website.",
      image: "/project-images/ezfil.png",
      technologies: ["Astra", "Elementor", "slider Revolution", "Pojo"],
      githubLink: "#",
      liveLink: "https://ezfl.com/",
    },
    {
      title: "Kingindisguise",
      description: "Ecommerce website.",
      image: "/project-images/kingindisguise.png",
      technologies: ["Woocommerce", "Stripe", "Nivo Slider", "Storefront"],
      githubLink: "#",
      liveLink: "https://kingindisguise.com/",
    },
    {
      title: "Rescue-supply",
      description: "Optimized Rescue Supply LIVE Shopify website.",
      image: "/project-images/rescue.png",
      technologies: ["Shopify", "Rescue Supply", "Swiper", "Ajax"],
      githubLink: "#",
      liveLink: "https://rescue-supply.com/",
    },
    {
      title: "Noanstudio",
      description: "Noanstudio Shopify website.",
      image: "/project-images/nano.png",
      technologies: ["Shopify", "Live Search", "Pacific Theme", "Ajax"],
      githubLink: "#",
      liveLink: "https://noanstudio.com/",
    },
    {
      title: "Krishokdotcom",
      description: "Noanstudio Shopify website.",
      image: "/project-images/krishok.png",
      technologies: ["Elementro", "Woocommerce", "Astra Theme", "Bksh"],
      githubLink: "#",
      liveLink: "https://krishokdotcom.net/",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center mb-16 bg-gradient-to-r from-black-600 to-gray-600 bg-clip-text text-black">
          Featured <span className="font-extrabold">Projects</span>
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
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
              className="w-full aspect-[4/3] h-[500px] sm:h-[500px]"
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
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>

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

                      <div className="flex gap-4 pb-12 mb-16 sm:mb-4">
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
      </div>
    </section>
  );
};

export default Project;
