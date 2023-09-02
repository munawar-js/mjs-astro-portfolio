type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  salutation: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hey.munawar@gmail.com",
  salutation: "Hey there, I’m ",
  title: "M <span>Munawar</span> Ahmed",
  // profile: "/munawar-ahmed.png",
  description:
    "Frontend Design Engineer with a deep understanding of UI/UX Design, React.js, WordPress, and a proven track record in delivering end-to-end design and development solutions for web applications, websites, and design systems.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/munawarjs",
    },
    {
      label: "Github",
      link: "https://github.com/munawar-js",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/munawarjs/",
    },
  ],
};

export default presentation;
