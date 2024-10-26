import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Heading = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <span className="text-5xl">
        <FontAwesomeIcon icon={faReact} color="#61DAFB" />
      </span>
      <div>
        <h3 className='text-2xl font-medium'>React Coding Problems</h3>
        <p className='font-normal text-sm'>
          Top React coding interview questions to build the most commonly-asked
          front end UI components and applications.
        </p>
      </div>
    </div>
  );
}

export default Heading