import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    IRM,
    python,
    spring,
    Netflix,
    Vstream,
    CapitalSync,
    bhavana,
    Vinay,
    ruthwik
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Photography",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Iron Mountain",
      icon: IRM,
      iconBg: "#383E56",
      date: "January 2024 - June 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Iron Mountain",
      icon: IRM,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
     
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our club, but Sankalp proved me wrong.",
      name: "Bhavana R",
      designation: "Core Team",
      company: "Prathibimba",
      image: bhavana,
    },
    {
      testimonial:
        "I've never met a friend who truly cares about their colleagues' success like Sankalp does.",
      name: "Vinayak G M",
      designation: "Associate Software Engineer",
      company: "Iron Mountain",
      image: Vinay,
    },
    {
      testimonial:
        "Sankalp has worked diligently to organize the TEDxUVCE 2023 edition. He has worked on developing a good website and has also engaged in photography.",
      name: "Ruthwik G",
      designation: "Core Team",
      company: "TEDxUVCE",
      image: ruthwik,
    },
  ];
  
  const projects = [
    {
      name: "MovieGPT",
      description:
        "A web application that leverages the power of OpenAI's GPT-3 to enhance your Netflix experience. With this project, you can generate personalized movie and TV show recommendations based on your preferences, engage in natural language conversations to discover new content, and get detailed information about your favorite shows and movies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Netflix,
      source_code_link: "https://github.com/",
    },
    {
      name: "VStream",
      description:
        "A video streaming platform implemented with Youtube API which is high scalable, fast loading. Implemented the features of live chatting through API polling. Provides efficient search using caching and debouncing. Implemented nest comment feature",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: Vstream,
      source_code_link: "https://github.com/",
    },
    {
      name: "CapitalSync",
      description:
        "A financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: CapitalSync,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };