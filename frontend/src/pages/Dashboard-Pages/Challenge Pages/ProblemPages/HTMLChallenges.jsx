import React from 'react'
import Heading from '../../../../components/challenges/Heading';
import Problems from '../../../../components/challenges/Problems';
import { HTMLChallengesData } from '../../../../api/HTMLChallengesData';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

const HTMLChallenges = () => {
  const headingData = {
    title: "HTML Coding Problems",
    description:
      "Top HTML coding interview questions to build the most commonly-asked front end UI components and applications.",
    icon: faHtml5,
    iconColor: "#FF0000",
  };

  return (
    <div className="p-7 font-poppins flex flex-col gap-10">
      <Heading data={headingData} />
      <Problems data={HTMLChallengesData} type="html" />
    </div>
  );
}

export default HTMLChallenges