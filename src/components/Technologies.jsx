import {
    DiJava,
    DiJavascript,
    DiHtml5,
    DiCss3,
    DiDatabase,
    DiMysql,
    DiReact,
    DiNodejs
  } from "react-icons/di";
  import { FaStrava } from "react-icons/fa";
  import { SiSpringboot, SiPostgresql } from "react-icons/si";
  import {animate, motion} from "framer-motion"
import { eases } from "animejs";
  
const iconVariants = (duration) =>({
    intial : {y : -10},
    animate:{
        y : [10,-10],
        transition:{
            duration : duration,
            eases : "linear",
            repeat : Infinity,
            repeatType : "reverse"

        }
    }
})

  const skills = [
    { icon: <DiJava />, label: "Java", color: "#007396" },
    { icon: <DiJavascript />, label: "JavaScript", color: "#F7DF1E" },
    { icon: <DiHtml5 />, label: "HTML5", color: "#E34F26" },
    { icon: <DiCss3 />, label: "CSS3", color: "#1572B6" },
    { icon: <DiDatabase />, label: "SQL", color: "#f29111" },
    { icon: <DiMysql />, label: "MySQL", color: "#00758F" },
    { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
    { icon: <FaStrava />, label: "Struts", color: "#fc4c02" },
    { icon: <SiSpringboot />, label: "Spring Boot", color: "#6DB33F" },
    { icon: <DiReact />, label: "React", color: "#61DAFB" },
    { icon: <DiNodejs />, label: "Node.js", color: "#339933" }
  ];
  
  const Technologies = () => {
    return (
      <div className="py-20 ">
        <motion.h2 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y : -100}} transition={{duration: 0.5}} className="text-center text-4xl my-20">Technologies</motion.h2>
        <div className="flex justify-center items-center gap-8 flex-wrap px-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-auto h-24 transition-transform duration-300 transform group"
              style={{
                color: skill.color, // Default icon color is white
              }}
            >
              <div className="text-7xl transition-transform transform group-hover:scale-150 ease-in-out duration-100">
                {skill.icon}
              </div>
              <span className="mt-2 text-xs opacity-100 group-hover:opacity-100 transition-opacity duration-500 text-white">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Technologies;
  