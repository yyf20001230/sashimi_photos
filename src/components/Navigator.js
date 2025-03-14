import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigator.css';

import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";

const Navigator = ({ links }) => {

  return (
    <ul className="navigator">
        {links.map((link, index) => (
            <li key={index}>
                <Link to={"/photography/" + link.toLowerCase()}>
                    {index === 0 ? 
                    <div>
                        <RiArrowLeftWideLine style={{ scale: "2" }}/>
                        {link}
                    </div> : 
                    <div>
                        {link}
                        <RiArrowRightWideLine style={{ scale: "2" }}/>
                    </div>}
                </Link>
            </li>
        ))}
    </ul>
  );
};

export default Navigator;