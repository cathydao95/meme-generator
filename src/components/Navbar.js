import img from "../troll.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="header-logo" src={img} alt="logo" />
      <h2 className="header-title">Meme Generator</h2>
      <h3 className="header-project">React Course Project 3</h3>
    </nav>
  );
}

export default Navbar;
