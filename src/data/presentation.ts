type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hey@munawarjs.com",
  title: "Hey, I’m Munawar 👋",
  // profile: "/munawar-ahmed.png",
  description:
    "I am bringing over 12 years of experience as a Frontend design engineer with a deep understanding of UI/UX design, React.js, WordPress and end-to-end development of web applications, websites, and design systems.",
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
