import React, { useState } from 'react';
import './App.css';

function App() {

  const [likesCount, setLikesCount] = useState(100)
  const [likesBtnClicked, setLikesBtnClicked] = useState(false)
  const [dislikesCount, setDislikesCount] = useState(25)
  const [dislikesBtnClicked, setDislikesBtnClicked] = useState(false)

  const changeLikesCount = () => {
    if(likesBtnClicked) {
      if(likesCount === 100) return
      setLikesCount(likesCount - 1)
    } else if (!likesBtnClicked) {
      if(dislikesBtnClicked) {
        if(dislikesCount === 25) return
        setDislikesCount(dislikesCount - 1)
        setDislikesBtnClicked(!dislikesBtnClicked)
      }
      setLikesCount(likesCount + 1)
    }
    setLikesBtnClicked(!likesBtnClicked)
  }

  const changeDislikesCount = () => {
    if(dislikesBtnClicked) {
      if(dislikesCount === 25) return
      setDislikesCount(dislikesCount - 1)
    } else if (!dislikesBtnClicked) {
      if(likesBtnClicked) {
        if(likesCount === 100) return
        setLikesCount(likesCount - 1)
        setLikesBtnClicked(!likesBtnClicked)
      }
      setDislikesCount(dislikesCount + 1)
    }
    setDislikesBtnClicked(!dislikesBtnClicked)
  }

  return (
    <>
      <style>
      {`
        .like-button, .dislike-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:   #585858;
        }

        .liked, .disliked {
            font-weight: bold;
            color: #1565c0;
        }
      `}
      </style>
      <div>
        <h2>Like/Dislike</h2>
      </div>
      <button className={"likeButton" + (likesBtnClicked && " liked")} onClick={changeLikesCount}>Like | 
        <span className="likes-counter">{likesCount}</span>
      </button>
      <button className={"dislikeButton" + (dislikesBtnClicked && " disliked")} onClick={changeDislikesCount}>Dislike | 
      <span className="dislikes-counter">{dislikesCount}</span>
      </button>
    </>
  );
}

export default App;
