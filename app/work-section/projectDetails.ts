export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Room Booking",
    description:
      "This project involved developing a state-of-the-art room booking website for Hotel Midas Regency. The website was designed to enhance user experience, streamline the booking process, and integrate secure payment options.",
    technologies: ["MERN", "Payment Gate way", "Node"],
    github: "https://github.com/VZade1999?tab=repositories",
    demo: "https://hotelmidasreegency.com/",
    image: require(".//../../public/projects/mids reegency.png"),
    available: true,
  },
  {
    id: 1,
    name: "Nk Fincorp",
    description:
      "Nk Fincorp platform for setting up a business and managing compliance.",
    technologies: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/VZade1999?tab=repositories",
    demo: "https://www.nkfincorp.com/",
    image: require(".//../../public/projects/nk fincorp.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Frontend (React)",
    description:
      "I gained a deep understanding of the following concepts and skills:Basics of React, JSX and DOM Updates,React Hooks and Lifecycle, Performance Optimization, Redux/Context API",
    technologies: [],
    github: "https://github.com/VZade1999/certificates",
    demo: "https://moonshot.scaler.com/s/sl/JzjeQ31xYx",
    image: "https://moonshot.scaler.com/s/image/sl/JzjeQ31xYx?scope=body",
    available: false,
  },
  {
    id: 2,
    name: "Javascript",
    description:
      "I gained a deep understanding of the following concepts and skills:Basics of JavaScript, Object-Oriented JavaScript, Asynchronous JavaScript, Error Handling, JavaScript in the Browser, Modern JavaScript Features",
    technologies: [],
    github: "https://github.com/VZade1999/certificates",
    demo: "https://moonshot.scaler.com/s/sl/mETAYS1MV0",
    image: "https://moonshot.scaler.com/s/image/sl/mETAYS1MV0?scope=body",
    available: false,
  },
  {
    id: 3,
    name: "React Basic",
    description:
      "React (Basic) It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
    technologies: [],
    github: "https://github.com/VZade1999/certificates",
    demo: "https://www.hackerrank.com/certificates/3dd9ab2f226e",
    image:
      "https://media.licdn.com/dms/image/D562DAQF-mXRJoZLGgA/profile-treasury-document-cover-images_480/0/1719939180650?e=1721062800&v=beta&t=T2gslZrvOpwnyFYM0wU9uvyduvilrbF7l_daAEjme90",
    available: false,
  },
  {
    id: 4,
    name: "JavaScript",
    description:
      "It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
    technologies: [],
    github: "https://github.com/VZade1999/certificates",
    demo: "https://www.hackerrank.com/certificates/15465858e0f1",
    image:
      "https://media.licdn.com/dms/image/D562DAQHM_JYfhZHFUA/profile-treasury-document-cover-images_480/0/1719938978503?e=1721062800&v=beta&t=xB-Ty5LfO3rnFgYh6G7B0fxz1qvJm9hHwncU7WKvtIo",
    available: false,
  },
  {
    id: 5,
    name: "SQL (Basic)",
    description: "It includes simple queries, relationships, and aggregators.",
    technologies: [],
    github: "https://github.com/VZade1999/certificates",
    demo: "https://www.hackerrank.com/certificates/9157cb00a367",
    image:
      "https://media.licdn.com/dms/image/D562DAQHcEqQPrI4BEg/profile-treasury-document-cover-images_480/0/1712338724693?e=1721066400&v=beta&t=q4SEncU4S5P--_ofOZA7GgKabGGCXZknFDMpMlZ07mk",
    available: false,
  },
  // {
  //   id: 2,
  //   name: "RAGS Scrubs Website",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["UX Research", "UI Design", "Prototyping"],
  //   github: "",
  //   demo: "",
  //   image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
  //   available: false,
  // },
  // {
  //   id: 3,
  //   name: "Crown Branding Agency Website",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["UX Research", "UI Design", "Prototyping"],
  //   github: "",
  //   demo: "",
  //   image:
  //     "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
  //   available: false,
  // },
  // {
  //   id: 4,
  //   name: "Titi Mobile App",
  //   description:
  //     "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
  //   technologies: ["UX Research", "UI Design", "Prototyping"],
  //   github: "",
  //   demo: "",
  //   image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
  //   available: false,
  // },
];
