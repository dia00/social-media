import "./rightbar.css";
import { FcRating } from "react-icons/fc";

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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/profile-image.jpg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Abra Cadabra</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/profile-image.jpg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Abra Cadabra</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/profile-image.jpg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Abra Cadabra</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/profile-image.jpg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Abra Cadabra</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/profile-image.jpg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Abra Cadabra</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/profile-image.jpg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Abra Cadabra</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="assets/profile-image.jpg" alt="" className="rightbarProfileImage" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Abra Cadabra</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}