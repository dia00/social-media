import "./topbar.css";
import { FaSearch, FaRocketchat, FaBell, FaUserAlt } from "react-icons/fa";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Indigo</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <FaSearch className="searchIcon"/>
                    <input placeholder="Search for friends, posts or videos" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
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
                <img src="assets/profile-image.jpg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}