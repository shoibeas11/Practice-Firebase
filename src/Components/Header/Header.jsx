import { NavLink } from "react-router";


const Header = () => {
    return (
        <div>
            <NavLink style={{'marginRight' : '20px'}} to="/">Home</NavLink>
            <NavLink style={{'marginRight' : '20px'}} to="/login">LogIn</NavLink>
        </div>
    );
};

export default Header; 