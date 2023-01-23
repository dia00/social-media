import "./post.css";
import { CgMoreVertical } from 'react-icons/cg';
import { FcLike, FcOk } from 'react-icons/fc';



export default function Post({post}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/profile-image.jpg" alt="" className="postProfileImage" />
                        <span className="postUsername">John Doe</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <CgMoreVertical/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hello. This is my first post :D    
                    </span>
                    <img src="/assets/profile-image.jpg" alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FcOk className="likeIcon"/>
                        <FcLike className="likeIcon"/>
                        <span className="postLikeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}