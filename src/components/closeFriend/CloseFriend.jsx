import "./closeFriend.css";

export default function CloseFriend({users}) {
    return (
        <li className="closeFriend">
            <img src={users.profilePicture} alt="" className="closeFriendImage"/>
            <span className="closeFriendName">{users.username}</span>
        </li>
    )
}