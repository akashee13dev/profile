import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants/index.js";
import {
  DiJava,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiDatabase,
  DiMysql,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPostgresql,
  DiPython
} from "react-icons/di";
import { SiExpress, SiHibernate, SiPostgresql, SiSocketdotio, SiSpringboot, SiSpringsecurity } from "react-icons/si";
import { FaCode, FaStrava } from "react-icons/fa";
import { GiGemini } from "react-icons/gi";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedMap, setExpandedMap] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const project = PROJECTS[currentIndex];
  const expanded = expandedMap[currentIndex] || false;
  const DESCRIPTION_WORD_LIMIT = 90;
  const shouldShowMore = project.description.split(" ").length > DESCRIPTION_WORD_LIMIT;

  const skills = [
    
    
    { icon: <SiSpringsecurity />, label: "SpringSecurity", color: "#6DB33F" },
    { icon: <SiSocketdotio />, label: "Socket", color: "white" },
    { icon: <FaCode />, label: "DSA", color: "#4B8BBE" },
    { icon: <SiHibernate />, label: "Hybernate", color: "#59666C" },
    { icon: <DiNodejs />, label: "Node", color: "#68A063" },
    { icon: <SiExpress />, label: "Express", color: "white" },
    { icon: <SiPostgresql />, label: "Postgresql", color: "#336791" },
    { icon: <DiJava />, label: "Java", color: "#007396" },
    { icon: <DiJavascript />, label: "JavaScript", color: "#F7DF1E" },
    { icon: <DiHtml5 />, label: "HTML", color: "#E34F26" },
    { icon: <DiCss3 />, label: "CSS", color: "#1572B6" },
    { icon: <DiDatabase />, label: "SQL", color: "#f29111" },
    { icon: <DiMysql />, label: "MySQL", color: "#00758F" },
    { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
    { icon: <FaStrava />, label: "Struts", color: "#fc4c02" },
    { icon: <SiSpringboot />, label: "Spring Boot", color: "#6DB33F" },
    { icon: <DiReact />, label: "React", color: "#61DAFB" },
    { icon: <DiNodejs />, label: "Node.js", color: "#339933" },
    { icon: <DiMongodb />, label: "MongoDB", color: "green" },
    { icon: <DiPython />, label: "Python", color: "#3776AB" },  
    { icon: <GiGemini />, label: "Gemini", color: "#FFC107" }
  ];

  const toggleExpanded = () => {
    setExpandedMap((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const showNext = () => {
    if (currentIndex < PROJECTS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="pb-10 px-4 bg-transparent ">
      <h2 className="my-10 text-center text-4xl text-stone-300">Projects</h2>

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row gap-6 bg-transparent p-6 rounded-lg shadow-md border border-stone-700">
              {/* Left side (Image + Tech icons) */}
              <div className="w-full md:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg mb-4 hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => {
                    setModalProject(project);
                    setModalOpen(true);
                  }}
                />

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((techLabel, i) => {
                    const tech = skills.find((skill) => skill.label === techLabel);
                    return tech ? (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-lg rounded p-3"
                        style={{ color: tech.color }}
                      >
                        <div className="relative group inline-block">
  <span className="text-2xl">{tech.icon}</span>
  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap z-10">
    {tech.label}
  </div>
</div>

                      </div>
                    ) : (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-lg rounded p-3 text-stone-300"
                      >
                        <span className="text-sm">{techLabel}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right side (description + title) */}
              <div className="w-full md:w-3/4 relative">
              <h3 className="text-2xl font-bold text-white mb-2">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {project.title}
            </a>
            </h3>

                <div
                  className={`text-stone-300 text-lg leading-relaxed transition-all duration-300 ${
                    !expanded ? "max-h-80 overflow-hidden relative pr-2" : ""
                  }`}
                >
                  {project.description}
                </div>
                {shouldShowMore && (
                  <button
                    onClick={toggleExpanded}
                    className="mt-3 font-bold text-stone-50 text-sm hover:underline"
                  >
                    {expanded ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8 text-white px-4">
          <button
            onClick={showPrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 bg-stone-700 rounded hover:bg-white hover:text-black transition ${
              currentIndex === 0 && "opacity-40 cursor-not-allowed"
            }`}
          >
            ◀ Prev
          </button>
          <button
            onClick={showNext}
            disabled={currentIndex === PROJECTS.length - 1}
            className={`px-4 py-2 bg-stone-700 rounded hover:bg-white hover:text-black transition ${
              currentIndex === PROJECTS.length - 1 && "opacity-40 cursor-not-allowed"
            }`}
          >
            Next ▶
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="bg-stone-900 text-white max-w-3xl w-full max-h-[70vh] overflow-y-auto p-6 rounded-lg shadow-lg relative">

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full rounded mb-4 max-w-[50vw] max-h-[50vh]"
            />
            <h2 className="text-2xl font-bold mb-2"><a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {project.title}
            </a></h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
