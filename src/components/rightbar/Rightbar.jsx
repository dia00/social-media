import "./rightbar.css";
import { FcRating } from "react-icons/fc";
import { Users } from "../../dummyData.js";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
    const Advertisement = () => {
        return (
            <img src="/assets/profile-image.jpg" alt="" className="rightbarAd" />
        )
    }

    const HomeRightbar = () => {
        return (
        <>
            <div className="birthdayContainer">
            <FcRating className="birthdayIcon" />
            <span className="birthdayText">
                <b>Me</b> and <b>5 other friends</b> have their birthday today
            </span>
            </div>
            <Advertisement/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
            {Users.map((u) => (
                <Online key={u.id} user={u} />
            ))}
            </ul>
        </>
        );
    };

    const ProfileRightbar = () => {
        return (
        <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoKey">Los Angeles</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoKey">Paris</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoKey">In a relationship</span>
            </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img
                src="assets/person/6.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            <div className="rightbarFollowing">
                <img
                src="assets/person/4.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            <div className="rightbarFollowing">
                <img
                src="assets/person/9.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            <div className="rightbarFollowing">
                <img
                src="assets/person/10.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            <div className="rightbarFollowing">
                <img
                src="assets/person/1.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            <div className="rightbarFollowing">
                <img
                src="assets/person/2.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            <div className="rightbarFollowing">
                <img
                src="assets/person/7.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            <div className="rightbarFollowing">
                <img
                src="assets/person/3.png"
                alt=""
                className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">Agatha Christie</span>
            </div>
            </div>
        </>
        );
    };

    return (
        <div className="rightbar">
        <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
        </div>
    );
}
