// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a Software Engineer with experience in JavaScript, TypeScript,
        React, and Java, passionate about creating efficient, scalable, and
        user-friendly solutions. Also, I'm a Physicist and Computer Scientist
        passionate about science and technology. I’ve worked across the real
        estate and financial services industries, developing products and
        algorithms that simplify processes, improve decision-making, and drive
        innovation. I love collaborating across teams to turn ideas into
        reality. Feel free to reach out!
      </motion.p>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
