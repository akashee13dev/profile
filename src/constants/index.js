import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I specialize in building robust, scalable, and user-centric web applications that solve real-world problems. With over 5 years of experience in both front-end and back-end development, I bring deep expertise in technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. Whether it's crafting sleek interfaces or architecting powerful APIs, I’m passionate about delivering solutions that fuel growth and elevate user experiences.

Let’s build something great together.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "FullStack Developer",
    company: "Zoho",
    description: `<strong>Working on AI features in Zoho CRM Product</strong><br><br>
I have been working on various AI Features in ZOHO CRM since my ZS Trainee time. Proven talent and fast releases led to feature ownership within the first year.<br><br>

<strong><a href="https://help.zoho.com/portal/en/kb/crm-nextgen/zia-artificial-intelligence/prediction/articles/nextgen-zia-s-field-prediction" target="_blank">Prediction Feature:</a></strong> 
Developed a feature to predict field values for salespeople based on existing won records, quickly becoming the feature owner.<br><br>

<strong><a href="https://help.zoho.com/portal/en/kb/crm-nextgen/zia-artificial-intelligence/recommendation/articles/nextgen-zia-next-best-experience-new" target="_blank">Next Best Experience:</a></strong> 
Led the development of a feature suggesting the next action for salespeople to move deals forward, completed within a tight one-month deadline.<br><br>

<strong><a href="https://help.zoho.com/portal/en/kb/crm-nextgen/zia-artificial-intelligence/prediction/articles/nextgen-zia-scores" target="_blank">Zia Score Feature:</a></strong> 
Developed the Zia AI health score for records, helping salespeople prioritize their efforts.<br><br>

<strong>Other AI Features:</strong> 
Worked on <a href="https://help.zoho.com/portal/en/kb/crm-nextgen/zia-artificial-intelligence/data-enrichment/articles/nextgen-zia-data-enrichment" target="_blank">Data Enrichment</a> (auto-populating fields), 
<a href="https://help.zoho.com/portal/en/kb/crm-nextgen/zia-artificial-intelligence/prediction/articles/nextgen-predict-customer-churn-using-zia-1-11-2022" target="_blank">Churn Prediction</a> (predicting churn likelihood), 
<a href="https://help.zoho.com/portal/en/kb/crm-nextgen/zia-artificial-intelligence/recommendation/articles/nextgen-zia-recommendation" target="_blank">Recommendations</a> (recommending items), 
<a href="https://help.zoho.com/portal/en/kb/crm-nextgen/zia-artificial-intelligence/recommendation/articles/nextgen-zia-similarity-recommender" target="_blank">Similarity</a> (showing similar records), and Anomaly Detection (sending auto notifications on anomalies).<br><br>

<strong>Mentorship & Collaboration:</strong> 
Mentored by Jagannath, whom I deeply respect and consider a brother and a trusted guide and mentor who shaped my approach to leadership and solution design. Together, we developed shared solutions for all feature components such as Feature Permission, Configuration, Data Retrieval, Integration, and Result Calculation, reducing repetitive work for developers. I will follow his guidance if I get the opportunity to lead and guarantee the same success and growth.<br><br>

<strong>Growth in Team Responsibility:</strong> 
Became a key player in the team due to my ability to think in terms of design patterns and reusable solutions. Focused on making solutions scalable and efficient for all team members, increasing development speed.<br><br>

<strong>Experience in Real-Time Development:</strong> 
Gained valuable experience handling multiple features at once and addressing sudden tasks from customer demands. Continuously improved as a developer by applying design thinking and creating reusable components.
`,
    technologies: ["AI Features", "ZohoCRM Feature Knowledge","CI/CD","Real Time Product Development", "Kafka", "MySql","Postgresql", "Java" , "JavaScript" , "Design Patterns" , "Microservice" , "Frameworks" ],
  },
  {
    year: "June 2021 – June 2022 ",
    role: "ZS Trainee ",
    company: "Zoho",
    description: `After completing training at Zoho at 17, I joined the AI Integrated  Feature Team in Zoho CRM. Despite being the youngest, I quickly  handled feature releases and outperformed my seniors. My  performance led to a permanent role after one year. `,
    technologies: ["Real Time Product Development", "Kafka", "MySql","Postgresql", "Java" , "Struts","ORM", "JavaScript"],
  },
  {
    year: "June 2020 – June 2021",
    role: "ZS Student ",
    company: "Zoho",
    description: `After completing school, I had planned to pursue a BTech, but an  extraordinary opportunity at Zoho came up, where my talent was  recognized, and I was offered a chance to work in real-time  software development without a degree. Given my family situation  and the faster route into the industry, I chose Zoho over college. At  17, I joined the company and, over the course of a year, proved my  skills. I was then placed in Zoho’s top product, Zoho CRM, where I’ve  been making significant contributions ever since. `,
    technologies: ["Java", "Python", "HTML", "CSS","JavaScript","Sql","English"],
  },
];

export const PROJECTS = [
  {
    link:"https://github.com/akashee13dev/alarm",
    title: "Simple Alarm",
    image: project1,
    description:
      "I used to struggle with how to start a project. One morning, I woke up, looked at my alarm, and decided on the spot to build a simple alarm application within a day. I focused on implementing just the basic functionality—and I did it. Through this, I learned that the key to starting a project is to stop hesitating and just begin.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    link:"https://github.com/akashee13dev/ToDo",
    title: "A Simple TO DO",
    image: project2,
    description:
      "A basic yet functional To-Do app built to track my project journey. Despite its simplicity, the project gave me a strong sense of accomplishment. It features PostgreSQL database integration and Gmail-based authentication via headers. This project helped reinforce my understanding of full-stack development.",
    technologies: ["HTML", "CSS", "JavaScript", "Spring Boot","Postgresql"],
  },
  {
    link:"https://github.com/akashee13dev/Akashee_X",
    title: "Simple Authentication",
    image: project4,
    description:
      "As part of a bootcamp, I set out to build a Twitter clone to gain hands-on experience with the MERN stack (MongoDB, Express, React, Node.js). I spent a focused weekend developing the application, implementing core features such as user authentication, posting, liking, commenting, profile management, and follow/unfollow functionalities using Express APIs. For the client side, I used React with Tailwind CSS, as recommended by the bootcamp—and it turned out to be a great choice.I even skipped the CSK vs RCB match on 3rd May 2025 to complete this project, but the learning was well worth it ",
    technologies: ["Express", "React", "Node" , "MongoDB" ],
  },
  {
    link:"https://github.com/akashee13dev/AI-Chatbot",
    title: "AI ChatBot",
    image: project3,
    description:
      "I planned to work on a real-time open-source model and integrate it with Spring, which led to the creation of an AI Driver chatbot. The initial implementation worked as expected. I’m now planning further enhancements. I referred to design styles from CodePen for the frontend. For the backend, I used Ollama to run the open-source DeepSeek model and connected it to a Spring-based server. The core functionality is now operational, though additional prompt engineering and feature improvements are planned for the future.",
    technologies: ["HTML", "CSS", "JavaScript", "Spring Boot"],
  },
  {
    link:"https://github.com/akashee13dev/Akashee_X",
    title: "Akashee_X",
    image: project4,
    description:
      "As part of a bootcamp, I set out to build a Twitter clone to gain hands-on experience with the MERN stack (MongoDB, Express, React, Node.js). I spent a focused weekend developing the application, implementing core features such as user authentication, posting, liking, commenting, profile management, and follow/unfollow functionalities using Express APIs. For the client side, I used React with Tailwind CSS, as recommended by the bootcamp—and it turned out to be a great choice.I even skipped the CSK vs RCB match on 3rd May 2025 to complete this project, but the learning was well worth it ",
    technologies: ["Express", "React", "Node" , "MongoDB" ],
  },
];

export const CONTACT = {
  address: "5A Kasim Ali Thoppu Street , Old Kuyavar palayam road , Madurai 625009",
  phoneNo: "+91 934599 8713",
  email: "akasheedev@gmail.com",
};
