import "./closeFriend.css";

export default function CloseFriend({users}) {
    return (
        <li className="sidebarFriend">
            <img src={users.profilePicture} alt="" className="sidebarFriendImage"/>
            <span className="sidebarFriendName">{users.username}</span>
        </li>
    )
}