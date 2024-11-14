import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact } from '@fortawesome/free-brands-svg-icons';

const Heading = ({data}) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <span className="text-5xl">
        <FontAwesomeIcon icon={data.icon} color={data.iconColor} />
      </span>
      <div>
        <h3 className='text-2xl font-medium heading'>{data.title}</h3>
        <p className='font-normal text-sm'>
        {data.description}
          
        </p>
      </div>
    </div>
  );
}

export default Heading