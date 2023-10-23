import "./home.css";
import Parallax from "../parallax/Parallax";
import Quiz from "../quiz/Quiz";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <div>
        <section>
          <Parallax />
        </section>
        <Quiz />
        <section id="Contact">
          <Contact />
        </section>
      </div>
      ;
    </>
  );
};

export default Home;
