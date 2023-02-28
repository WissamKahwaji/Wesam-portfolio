import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants'
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        className='app__header-info'
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>
              👋
            </span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Wesam</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Engineer</p>
            <p className='p-text'>Web & Mobile App Developer</p>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Engineer with +4 years of experience in the
              IT domain, including Analysis, Design, Coding, and
              Testing.</p>
          </div>
         <a href={images.wesam_Resume} download="Wesam's Resume">
          Download CV
         </a>
        </div>
      </motion.div>

      <motion.div
        className='app__header-img'
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          className='overlay_circle'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>


      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.node, images.react, images.flutter].map((circle, index) => (
          <div className='circle-cmp  app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
