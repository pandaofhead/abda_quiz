import { useRef } from "react";
import React from "react";
import "./quiz.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
const items = [
  {
    id: 1,
    title: "Quiz 1",
    img: "/field.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/quiz/1",
  },
  {
    id: 2,
    title: "Quiz 2",
    img: "/field.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/quiz/2",
  },
  {
    id: 3,
    title: "Quiz 3",
    img: "/field.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/quiz/3",
  },
  {
    id: 4,
    title: "Quiz 4",
    img: "/field.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/quiz/4",
  },
];

const SingleItem = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Link to={item.link}>
              <img src={item.img} alt="" />
              <div className="overlay">Click here to start</div>
            </Link>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <Link to={item.link}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.description}</p>
            <Link to={item.link}>START</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Quiz = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });
  return (
    <>
      <div className="quiz" ref={ref}>
        <div className="progress">
          <h1>Make Music Fun Again</h1>
          <motion.div className="progressBar" style={{ scaleX }}></motion.div>
        </div>
        {items.map((item) => (
          <SingleItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default Quiz;
