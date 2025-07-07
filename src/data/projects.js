export const projects = [
  {
    name: "SyncX",
    desc: "SyncX is a collaborative platform where users can create and manage workspaces, projects, and tasks to stay in sync.",
    tech: ["MERN Stack", "Zod", "Redux", "TypeScript", "OAuth", "Zustand"],
    github: {
      frontend: "https://github.com/MAHESH94944/SyncX-Frontend",
      backend: "https://github.com/MAHESH94944/SyncX-Backend",
    },
    demo: "https://syncx-inky.vercel.app/",
    details: [
      "Developed custom middlewares for error handling, async handling, and authentication.",
      "Implemented authentication through Google OAuth using the passport library.",
      "Used Zod for error handling in backend and mongoose for CRUD operations.",
      "Managed states with Redux and utilized Zustand for storing JWT tokens in session storage.",
      "Structured the backend using models, controllers, and services for better modularity.",
    ],
  },
  {
    name: "VidSecure",
    desc: "A full-stack web application to connect language learners globally with real-time chat and video calls.",
    tech: ["MERN Stack", "Stream SDKs", "Zustand", "JWT"],
    github: {
      main: "https://github.com/MAHESH94944/VidSecure",
    },
    demo: "https://vidsecure.onrender.com/",
    details: [
      "Designed and developed a full-stack web application to connect language learners globally.",
      "Implemented features like user authentication, OTP-based email verification, real-time chat, video calls, and friend requests using React, Node.js, MongoDB, and Stream SDKs.",
      "Built a responsive UI with Tailwind CSS and managed state using React Query and Zustand.",
      "Integrated JWT for secure authentication and Nodemailer for email services.",
      "Deployed the application in a production environment with seamless backend and frontend integration.",
    ],
  },
  {
    name: "Weather App",
    desc: "A dynamic weather application that fetches and displays real-time weather data using the OpenWeatherMap API.",
    tech: ["React", "Material-UI", "OpenWeatherMap API"],
    github: {
      main: "https://github.com/MAHESH94944/wheatherApp",
    },
    demo: "https://weather-dataapp.netlify.app/",
    details: [
      "Implemented dynamic weather data fetching and display using RESTful API integration.",
      "Designed an interactive and visually appealing UI with Material-UI and CSS animations.",
      "Utilized React state management to handle user input and update weather information dynamically.",
      "Ensured cross-browser compatibility and responsiveness for mobile and desktop devices.",
    ],
  },
  {
    name: "TaskFlow",
    desc: "Kanban-style task manager for productivity and workflow.",
    tech: ["React", "Redux", "Firebase"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    name: "DevBlog",
    desc: "Developer blogging platform with markdown support.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];
