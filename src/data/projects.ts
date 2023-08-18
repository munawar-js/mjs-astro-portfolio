export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Testsigma",
    techs: ["UI/UX design", "Design System", "Figma"],
    link: "https://testsigma.com/"
  },
  {
    title: "Stackrole",
    techs: ["ReactJS (GatsbyJS)", "Strapi", "UI/UX design"],
    link: "https://stackrole.com",
  },
  {
    title: "Freshcaller at Freshworks",
    techs: ["UI/UX design", "Design System", "Figma"],
    link: "https://www.freshworks.com/freshcaller-cloud-pbx/"
  },
  {
    title: "Mobifreaks",
    techs: ["Astro", "HTML", "CSS", "JavaScript"],
    link: "https://www.mobifreaks.com/",
  },
];

export default projects;
