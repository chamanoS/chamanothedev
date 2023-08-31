import React from "react";
import { AiFillLinkedin,AiFillTwitterCircle, AiFillGithub, AiFillYoutube } from "react-icons/ai";


export const Footer = () => {
  return (
    <footer className='boxItem'>
      <div className='container flex'>
        <p> Design & Developed By ChamanoTheDev | @2023 All Rights Reserved </p>
        <div className='social'>
          <AiFillGithub className='icon' />
          <AiFillTwitterCircle className='icon' />
          <AiFillLinkedin className='icon' />
          <AiFillYoutube className='icon' />
        </div>
      </div>
    </footer>
  );
};
