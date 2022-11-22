import { NavbarContainer } from "./styles";
import LogoBetterment from '../assets/svg/Betterment Logo Icon SVG Footer.svg'
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <NavbarContainer>
      <div className="firstBar">
        <a href="">INDIVIDUALS</a>
        <a href="">EMPLOYERS</a>
        <a href="">ADVISORS</a>
      </div>
      <div className="secondBar">
        <div className="logoDiv">
          <NavLink to="/" title="Logo">
            <span>
              <img src={LogoBetterment} />
              <strong>Betterment</strong>
            </span>
          </NavLink>
          <a href="">Investing</a>
          <NavLink to="/todo" title="Todo">
            <button>Todo App</button>
          </NavLink>
        </div>
        <div className="loginDiv">
          <a href="">Log in</a>
          <button>Get started</button>
        </div>
      </div>
    </NavbarContainer>
  )
}