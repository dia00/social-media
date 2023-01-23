import "./rightbar.css";
import { FcRating } from "react-icons/fc";
import { Users } from "../../dummyData.js";
import Online from "../online/Online";


export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <FcRating className="birthdayIcon" />
                    <span className="birthdayText"><b>Me</b> and <b>5 other friends</b> have their birthday today</span>
                </div>
                <img src="/assets/profile-image.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u => (
                        <Online key={u.id} user={u}/>
                    )))}
                </ul>
            </div>
        </div>
    )
}