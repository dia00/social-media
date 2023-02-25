import "./rightbar.css";
import { FcRating } from "react-icons/fc";
import { Users } from "../../dummyData.js";
import Online from "../online/Online";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Rightbar({ profile }) {
    const Advertisement = () => {
        return (
            <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
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
            <div className="closeFriendList">
                {/* <div className="rightbarFollowing">
                    <img
                    src="assets/person/6.png"
                    alt=""
                    className="rightbarFollowingImage"
                    />
                    <span className="rightbarFollowingName">Agatha Christie</span>
                </div>
                 */}
            {Users.map((u) => (
                    <CloseFriend key={u.id} users={u}/>
                    ))}

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
