import React from 'react'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Heading from '../../../../components/challenges/Heading';
import Problems from '../../../../components/challenges/Problems';
import { JavaScriptChallengesData } from '../../../../api/JavaScriptChallengesData';

const JavaScriptChallenges = () => {

  const headingData = {
    title: "JavaScript Coding Problems",
    description:
      "Top JavaScript coding interview questions to build the most commonly-asked front end UI components and applications.",
    icon: faJsSquare,
    iconColor: "#f0db4f",
  };

  return (
    <div className="p-7 font-poppins flex flex-col gap-10">
      <Heading data={headingData} />
      <Problems data={JavaScriptChallengesData} type="javascript" />
    </div>
  );
}

export default JavaScriptChallenges