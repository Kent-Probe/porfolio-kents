import LogoDocker from "../../assets/logos/Docker_Logo.svg";
import LogoGit from "../../assets/logos/Git-Icon-1788C.svg";
import LogoGitHub from "../../assets/logos/github-mark.svg";
import LogoJava from "../../assets/logos/Java_Logo.svg";
import LogoCSharp from "../../assets/logos/Logo_C_sharp.svg";
import LogoMongoDB from "../../assets/logos/MongoDB.svg";
import LogoMySQL from "../../assets/logos/mysql-logo-svgrepo-com.svg";
import LogoPython from "../../assets/logos/Python-logo-notext.svg";
import LogoReact from "../../assets/logos/React-icon.svg";
import LogoSQLite from "../../assets/logos/Sqlite-square-icon.svg";
import LogoTypeScript from "../../assets/logos/ts-logo-512.svg";
import LogoJavaScript from "../../assets/logos/Unofficial_JavaScript_logo_2.svg";
import LogoVue from "../../assets/logos/Vue.js_Logo_2.svg";

export const skills = {
  hard: {
    languages: [
      { name: "JavaScript", logo: LogoJavaScript, porcentage: "10" },
      { name: "TypeScript", logo: LogoTypeScript, porcentage: "10" },
      { name: "Python", logo: LogoPython, porcentage: "10" },
      { name: "Java", logo: LogoJava, porcentage: "10" },
      { name: "C#", logo: LogoCSharp, porcentage: "10" },
    ],
    frameworks: [
      { name: "React", logo: LogoReact, porcentage: "10" },
      { name: "Vue", logo: LogoVue, porcentage: "10" },
    ],
    tools: [
      { name: "Git", logo: LogoGit, porcentage: "10" },
      { name: "GitHub", logo: LogoGitHub, porcentage: "10" },
      { name: "Docker", logo: LogoDocker, porcentage: "10" },
    ],
    databases: [
      { name: "MySQL", logo: LogoMySQL, porcentage: "10" },
      { name: "MongoDB", logo: LogoMongoDB, porcentage: "10" },
      { name: "SQLite", logo: LogoSQLite, porcentage: "10" },
    ],
  },
  soft: [
    { name: "Communication", porcentage: "10" },
    { name: "Teamwork", porcentage: "10" },
    { name: "Problem-solving", porcentage: "10" },
    { name: "Adaptability", porcentage: "10" },
    { name: "Creativity", porcentage: "10" },
  ],
};
