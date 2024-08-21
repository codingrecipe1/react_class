import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/info">Info</Link>
    </>
  );
};
export default Header;
