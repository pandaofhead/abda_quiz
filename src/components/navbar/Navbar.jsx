import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
export default function MyNavbar() {
    const [menuOpen,setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <Link to="/" className="title">
          AmericanBandDad
        </Link>
        <div className="menu"
        onClick={()=>{
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>

        </div>
        <ul className={menuOpen? 'open':''}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to='/quiz/1'>QuizGame</NavLink>
          </li>
          <li>
            <NavLink to='/quiz/2'>Hangman</NavLink>
          </li>
          <li>
            <NavLink to='/quiz/3'>MemoryGame</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
