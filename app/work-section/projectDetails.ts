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
    name: "Nk Fincorp",
    description:
      "Nk Fincorp platform for setting up a business and managing compliance.",
    technologies: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/VZade1999?tab=repositories",
    demo: "https://www.nkfincorp.com/",
    image: require(".//../../public/projects/nk fincorp.png"),
    available: true,
  }
];

// export const designProjects = [
//   {
//     id: 1,
//     name: "Hebron Statup Lab Website",
//     description:
//       "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 2,
//     name: "RAGS Scrubs Website",
//     description:
//       "An image generator website that allows users to generate, combine, and download images.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 3,
//     name: "Crown Branding Agency Website",
//     description:
//       "A website that reduces the length of your URL using Bit.ly's API",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image:
//       "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 4,
//     name: "Titi Mobile App",
//     description:
//       "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
//     available: false,
//   },
// ];
