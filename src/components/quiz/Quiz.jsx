import { useRef } from "react";
import React from "react";
import "./quiz.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
const items = [
  {
    id: 1,
    title: "Quiz",
    img: "/MusicRoom.jpg",
    description:
      "Dive into a thrilling quiz adventure encompassing the realms of Music and Sports! Challenge your knowledge, discover fun facts, and enjoy a symphony of excitement in every question. Start now!",
    link: "/quiz/1",
  },
  {
    id: 2,
    title: "Hangman",
    img: "/embouchure.jpg",
    description:
      "Step into the spotlight and test your knowledge! From legendary icons to modern chart-toppers, can you guess the celebrity star? Play the melody of success in Hangman's Celebrity Challenge!",
    link: "/quiz/2",
  },
  {
    id: 3,
    title: "Memeory Game",
    img: "/BandCamp.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/quiz/3",
  },
  {
    id: 4,
    title: "Quiz 4",
    img: "/Christmas.jpg",
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

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Link to={item.link}>
              <img src={item.img} alt="" />
              
            </Link>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <Link to={item.link}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.description}</p>
            
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
