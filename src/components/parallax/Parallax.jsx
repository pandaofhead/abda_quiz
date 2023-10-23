import "./parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = (props) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }}>Quiz and Game</motion.h1>
      <motion.div className="mountains">
        <img src="/mountains.png" alt="" />
      </motion.div>

      <motion.div style={{ x: yBg }} className="stars">
        <img src="/stars.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Parallax;
