import './profile.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profilerightTop">
                        <div className="profileCover">
                            <img className="profileCoverImage" src="assets/post/3.jpg" alt="" />
                            <img className="profileUserImage" src="assets/person/3.png" alt="" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">John Doe</h4>
                        <p className="profileInfoDesc">This is my description.</p>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}