import './About.scss';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { client } from '../../client';

function About() {
   const [abouts, setAbouts] = useState([]);

   useEffect(() => {
      const query = '*[_type == "abouts]';

      client.fetch(query).then((data) => setAbouts(data));
   }, []);

   return (
      <>
         <h2 className="head-text">
            I knowg That
            <span> Good Dev</span>
            <br />
            means
            <span> Good business</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: 'tween' }}
                  className="app__profile-item"
                  key={about.title + index}
               >
                  <img src={about.imgUrl} alt={about.title} />
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default About;
