import { useState } from "react";
import "./likeButton.css";

function LikeButton() {
  const [reactionType, setReactionType] = useState(null);
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);

  const handleReactionClick = (reaction) => {
    if (reactionType === reaction) {
      // If the same reaction is clicked again, reset the reaction type
      setReactionType(null);
      // Decrement like or dislike count based on the current reaction
      if (reaction === "like") {
        setLikeCount(likeCount - 1);
      } else {
        setDislikeCount(dislikeCount - 1);
      }
    } else {
      // Increment like or dislike count based on the new reaction
      if (reaction === "like") {
        setLikeCount(likeCount + 1);
        // If there was a previous reaction, decrement its count
        if (reactionType === "dislike") {
          setDislikeCount(dislikeCount - 1);
        }
      } else {
        setDislikeCount(dislikeCount + 1);
        // If there was a previous reaction, decrement its count
        if (reactionType === "like") {
          setLikeCount(likeCount - 1);
        }
      }
      // Set the new reaction type
      setReactionType(reaction);
    }
  };

  return (
    <>
      <button
        className={`Btn ${reactionType === "like" ? "like-active" : ""}`}
        onClick={() => handleReactionClick("like")}
      >
        <span className="leftContainer">
          <svg
            fill="white"
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
          <span className="like">Like</span>
        </span>
        <span className={`likeCount ${reactionType === "like" ? "like-active" : ""}`}>
          {likeCount}
        </span>
      </button>
    </>
  );
}

export default LikeButton;
