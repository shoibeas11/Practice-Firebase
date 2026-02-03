import { NavLink } from "react-router";


const Header = () => {
    return (
        <div className=" bg-red-300 mb-8 ">
            <NavLink style={{'marginRight' : '20px'}} to="/">Home</NavLink>
            <NavLink style={{'marginRight' : '20px'}} to="/login">LogIn</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
        </div>
    );
};

export default Header; 