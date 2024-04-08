import { motion } from "framer-motion";
import { images } from "../../constants";

import "./HeaderApp.scss";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function HeaderApp() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app_header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Maia </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app_header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="profile_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__app-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div key={`circle-${index}`} className="circle-cmp app_flex">
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeaderApp;
