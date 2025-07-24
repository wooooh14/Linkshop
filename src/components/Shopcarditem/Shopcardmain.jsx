import { useState, useEffect } from "react";

import "./Shopcardmain.css";

const Shopcardmain = ({
  emptyheart,
  fillheart,
  icon,
  like,
  shopname,
  username,
  share,
  meatball,
  id,
}) => {
  const storageKey = `like-${id}`;

  const [likes, setLikes] = useState(like);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setLiked(parsed.liked);
      setLikes(parsed.likes);
    }
  }, [storageKey]);

  const handlelike = () => {
    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : likes - 1;
    setLiked(newLiked);
    setLikes(newLikes);

    localStorage.setItem(
      storageKey,
      JSON.stringify({ liked: newLiked, likes: newLikes })
    );
  };

  return (
    <div className="Shop-card-main">
      <div className="left">
        <img
          onClick={handlelike}
          src={liked ? fillheart : emptyheart}
          alt="heart"
        />
        <span className="like">{likes}</span>
      </div>

      <div className="center">
        <img src={icon} alt="shopicon" className="shop-icon" />
        <h2 className="shop-name">{shopname}</h2>
        <p className="username">{username}</p>
      </div>

      <div className="right">
        <img src={share} alt="share" />
        <img src={meatball} alt="option" />
      </div>
    </div>
  );
};

export default Shopcardmain;
