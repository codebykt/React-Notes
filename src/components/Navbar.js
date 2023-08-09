import logo from "../logo.svg";
import "../index.css";

export default function Navbar() {
  return (
    <>
      <img src={logo} height="60px" width="50px" alt="logo" />
      <div className="buttons-nav">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Login</button>
      </div>
    </>
  );
}
