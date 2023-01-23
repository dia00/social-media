import "./post.css";
import { CgMoreVertical } from 'react-icons/cg';
import { FcLike, FcOk } from 'react-icons/fc';
import { Users } from "../../dummyData.js";


export default function Post({post}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImage" />
                        <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <CgMoreVertical/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc} 
                    </span>
                    <img src={post.photo} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FcOk className="likeIcon"/>
                        <FcLike className="likeIcon"/>
                        <span className="postLikeCounter">{post.like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}