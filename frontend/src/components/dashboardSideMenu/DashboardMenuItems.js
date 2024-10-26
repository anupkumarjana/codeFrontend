import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCode, faLaptopCode, faPersonDotsFromLine } from "@fortawesome/free-solid-svg-icons";



export const menuItems = [
  //Challenges
  {
    name: "Challenges",
    path: "/dashboard/challenges",
    icon: <FontAwesomeIcon icon={faLaptopCode} color="#FF6500" />,
    children: [
      {
        name: "React",
        path: "/dashboard/challenges/react",
        icon: <FontAwesomeIcon icon={faReact} color="#61DAFB" />,
      },
      {
        name: "JavaScript",
        path: "/dashboard/challenges/javascript",
        icon: <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" />,
      },
      {
        name: "HTML",
        path: "/dashboard/challenges/html",
        icon: <FontAwesomeIcon icon={faHtml5} color="#E34F26" />,
      },
      {
        name: "CSS",
        path: "/dashboard/challenges/css",
        icon: <FontAwesomeIcon icon={faCss3Alt} color="#264de4" />,
      },
    ],
  },
  //Interview-prep
  {
    name: "Interview Prep",
    path: "/dashboard/interview-prep",
    icon: <FontAwesomeIcon icon={faBook} color="#50C878" />,
    children: [
      {
        name: "Technical",
        path: "/dashboard/interview-prep/technical",
        icon: <FontAwesomeIcon icon={faCode} color="#40E0D0" />,
        children: [
          {
            name: "React",
            path: "/dashboard/interview-prep/technical/react",
            icon: <FontAwesomeIcon icon={faReact} color="#61DAFB" />,
          },
          {
            name: "JavaScript",
            path: "/dashboard/interview-prep/technical/javascript",
            icon: <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" />,
          },
          {
            name: "HTML",
            path: "/dashboard/interview-prep/technical/html",
            icon: <FontAwesomeIcon icon={faHtml5} color="#E34F26" />,
          },
          {
            name: "CSS",
            path: "/dashboard/interview-prep/technical/css",
            icon: <FontAwesomeIcon icon={faCss3Alt} color="#264de4" />,
          },
        ],
      },
      {
        name: "Behavioral",
        path: "/dashboard/interview-prep/behavioral",
        icon: <FontAwesomeIcon icon={faPersonDotsFromLine} color="#C4B454" />,
        children: [
          //   {
          //     name: "Tell Me About Yourself",
          //     path: "/dashboard/interview-prep/behavioral/tell-me-about-yourself",
          //   },
          //   {
          //     name: "Strengths and Weaknesses",
          //     path: "/dashboard/interview-prep/behavioral/strengths-weaknesses",
          //   },
          {
            name: "Conflicts",
            path: "/dashboard/interview-prep/behavioral/conflict-resolution",
          },
          {
            name: "Leadership",
            path: "/dashboard/interview-prep/behavioral/leadership",
          },
          {
            name: "Teamwork",
            path: "/dashboard/interview-prep/behavioral/teamwork",
          },
          //   {
          //     name: "Handling Pressure",
          //     path: "/dashboard/interview-prep/behavioral/pressure-management",
          //   },
          //   {
          //     name: "Dealing with Failure",
          //     path: "/dashboard/interview-prep/behavioral/failure",
          //   },
          //   {
          //     name: "Time Management",
          //     path: "/dashboard/interview-prep/behavioral/time-management",
          //   },
          //   {
          //     name: "Ethics and Integrity",
          //     path: "/dashboard/interview-prep/behavioral/ethics",
          //   },
          //   {
          //     name: "Motivation and Goals",
          //     path: "/dashboard/interview-prep/behavioral/motivation",
          //   },
        ],
      },
    ],
  },
];
