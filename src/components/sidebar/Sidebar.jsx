import "./sidebar.css";
import { MdRssFeed, MdVideoLibrary, MdWork } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { BsFillBookmarkHeartFill, BsQuestionCircleFill, BsFillCalendar2EventFill } from "react-icons/bs";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdRssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <IoIosChatboxes className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdVideoLibrary className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <HiUserGroup className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillBookmarkHeartFill className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsQuestionCircleFill className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <MdWork className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillCalendar2EventFill className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/profile-image.jpg" alt="" className="sidebarFriendImage"/>
                        <span className="sidebarFriendName">Agatha Christie</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}