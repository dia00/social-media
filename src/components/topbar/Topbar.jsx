import "./topbar.css";
import { FaSearch, FaRocketchat, FaBell, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/login">
                    <span className="logo">Indigo</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <FaSearch className="searchIcon"/>
                    <input placeholder="Search for friends, posts or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/profile">
                        <span className="topbarLink">My Profile</span>
                    </Link>
                    <Link to="/">
                        <span className="topbarLink">Timeline</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <FaUserAlt/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <FaRocketchat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <FaBell/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to="/profile">
                    <img src="assets/profile-image.jpg" alt="" className="topbarImage" />
                </Link>
            </div>
        </div>
    )
}