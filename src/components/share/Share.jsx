import "./share.css";
import { MdPermMedia, MdOutlineLabelImportant, MdLocationOn, MdEmojiEmotions } from "react-icons/md";
import { FcGallery, FcNext, FcDepartment, FcLikePlaceholder } from "react-icons/fc";

export default function Share() {
    return (
        <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
                <img src="assets/profile-image.jpg" alt="" className="shareProfileImage" />
                <input placeholder="What's in your mind?" className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <FcGallery className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <FcNext className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <FcDepartment className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <FcLikePlaceholder className="shareIcon"/>
                        <span className="shareOptionText">Status</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
          </div>
        </div>
    )
}