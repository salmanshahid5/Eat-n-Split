// AddFriend component
import { useState } from "react";

function AddFriend({ friendList, setFriendList }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState(
    "https://thumbs.dreamstime.com/b/portrait-adorable-young-happy-boy-27903659.jpg"
  );

  const handleAddFriend = (e) => {
    e.preventDefault();

    // Create new friend object
    const newFriend = {
      name: name,
      img: img,
      balance: 0, // Assuming a default balance of 0
    };

    // Update the friend list using setFriendList
    setFriendList([...friendList, newFriend]);

    // Clear the form
    setName("");
    setImg(
      "https://thumbs.dreamstime.com/b/portrait-adorable-young-happy-boy-27903659.jpg"
    );
  };

  return (
    <div>
      <form className="form-add-friend" onSubmit={handleAddFriend}>
        <label>👩🏻‍🤝‍👩🏻Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🌃Image URL</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit" className="button">Add</button>
      </form>
    </div>
  );
}

export default AddFriend;