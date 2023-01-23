import "./post.css";
import { useState } from "react";
import { CgMoreVertical } from 'react-icons/cg';
import { FcLike, FcOk } from 'react-icons/fc';
import { Users } from "../../dummyData.js";
import { BsGear } from "react-icons/bs";


export default function Post({post}) {
    /*thinking about it
    function likedPost() {
        let icon = document.getElementsByClassName("likeIcon");
        icon.style.width = '30';
        icon.style.height = '30';
    }
    */
    
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

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
                        <FcOk className="likeIcon" onClick={likeHandler}/>
                        <FcLike className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}