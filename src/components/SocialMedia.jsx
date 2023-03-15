import React from 'react';
import {  BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/WissamKahwaji" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/wesam-kahwaji-58132922a/" target="_blank" rel="noreferrer" >
        <BsLinkedin />
      </a>
    </div>
    <div>
    <a href="https://www.facebook.com/wesam.kahwaje" target="_blank" rel="noreferrer" >
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;