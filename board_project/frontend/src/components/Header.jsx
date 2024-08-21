import { Link } from "react-router-dom";
const Header = () => {
    return(
        <>
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/save">글작성</Link>
                <Link to="/list">글목록</Link>
            </div>
        </>
    )
}
export default Header;