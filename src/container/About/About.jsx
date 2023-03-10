import React, { useEffect, useState } from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

// const abouts = [
//     { title: 'Web Development', description: 'I am a good Web Development', imgUrl: images.about01 },
//     { title: 'Mobile App Development', description: 'I am a goodMobile App Development', imgUrl: images.about02 },
//     { title: 'Web Design', description: 'I am a good Web Design', imgUrl: images.about03 },
//     { title: 'Web Animation', description: 'I am a good Web Animation', imgUrl: images.about04 },

// ];

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then((data) => {
            setAbouts(data);
            console.log(data);
        })
    }, []);

    return (
        <>
            <h2 className='head-text'>
                I Know that <span>Good Developmeny</span><br />means <span>Good Businees</span>
            </h2>
            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>

                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(About,'app__about'), 'about','app__whitebg')
