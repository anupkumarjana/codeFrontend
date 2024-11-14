import React from "react";
import Heading from "../../../components/challenges/Heading";
import Problems from "../../../components/challenges/Problems";
import { CSSChallengesData } from "../../../api/CSSChallengesData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
// import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const HTMLChallenges = () => {
  const headingData = {
    title: "CSS Coding Problems",
    description:
      "Top CSS coding interview questions to build the most commonly-asked front end UI components and applications.",
    icon: faCss3,
    iconColor: "#264de4",
  };

  return (
    <div className="p-7 font-poppins flex flex-col gap-10">
      <Heading data={headingData} />
      <Problems data={CSSChallengesData} type="css" />
    </div>
  );
};

export default HTMLChallenges;
