import {EXPERIENCES} from "../constants"
import {motion} from "framer-motion"
import {
    DiJava,
    DiJavascript,
    DiHtml5,
    DiCss3,
    DiDatabase,
    DiMysql,
    DiReact,
    DiNodejs,
    DiPostgresql
} from "react-icons/di";
import {SiPostgresql, SiSpringboot} from "react-icons/si";
import {FaStrava} from "react-icons/fa";

const Experience = () => {

    const skills = [
        {
            icon: <DiPostgresql/>,
            label: "Postgresql",
            color: "#336791"

        }, {
            icon: <DiJava/>,
            label: "Java",
            color: "#007396"
        }, {
            icon: <DiJavascript/>,
            label: "JavaScript",
            color: "#F7DF1E"
        }, {
            icon: <DiHtml5/>,
            label: "HTML",
            color: "#E34F26"
        }, {
            icon: <DiCss3/>,
            label: "CSS",
            color: "#1572B6"
        }, {
            icon: <DiDatabase/>,
            label: "SQL",
            color: "#f29111"
        }, {
            icon: <DiMysql/>,
            label: "mySQL",
            color: "#00758F"
        }, {
            icon: <SiPostgresql/>,
            label: "Postgres",
            color: "#336791"
        }, {
            icon: <FaStrava/>,
            label: "Struts",
            color: "#fc4c02"
        }, {
            icon: <SiSpringboot/>,
            label: "Spring Boot",
            color: "#6DB33F"
        }, {
            icon: <DiReact/>,
            label: "React.js",
            color: "#61DAFB"
        }, {
            icon: <DiNodejs/>,
            label: "Node.js",
            color: "#339933"
        }
    ];

    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{
                opacity: 1,
                y: 0
            }}
                initial={{
                opacity: 0,
                y: -100
            }}
                transition={{
                duration: 0.5
            }}
                className="my-20 text-center text-4xl">Experience</motion.h2>
            <div>
                <div>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div
                                whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                                initial={{
                                opacity: 0,
                                x: -100
                            }}
                                transition={{
                                duration: 1
                            }}
                                className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-stone-400">
                                    {experience.year}
                                </p>
                            </motion.div>
                            <motion.div
                                whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                                initial={{
                                opacity: 0,
                                x: 100
                            }}
                                transition={{
                                duration: 1
                            }}
                                className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold">
                                    {experience.role}
                                    - {" "}
                                    <span className="text-sm text-stone-500">
                                        {experience.company}
                                    </span>
                                </h3>
                                <p className="mb-4 text-stone-400" dangerouslySetInnerHTML={{ __html: experience.description }}></p>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    {experience
                                        .technologies
                                        .map((techLabel, index) => {
                                            const skill = skills.find(s => s.label.toLowerCase() === techLabel.toLowerCase());

                                            return skill
                                                ? (

                                                    <span
                                                        key={index}
                                                        className="bg-stone-700 text-white text-xs px-2 py-1 rounded-md hover:bg-white hover:text-black">{techLabel}</span>

                                                )
                                                : (
                                                    <span
                                                        key={index}
                                                        className="bg-stone-700 text-white text-xs px-2 py-1 hover:bg-white hover:text-black rounded-md">{techLabel}</span>

                                                );
                                        })}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Experience
