import { useState } from "react";
import FriendList from "./Components/FriendList/FriendList";
import AddFriend from "./Components/FriendList/AddFriend/Addfriend";
import Split from "./Components/SplitFrom/split";

function App() {
  const [friends, setFriends] = useState([
    {
      name: "Salman",
      balance: 10,
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
    },
    {
      name: "Farhan",
      balance: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsB8JQHddPH1KvZYLJAUfjFJ5FTr9jd0wsn2mB968OxOaNP_IZSUEP_yo_Aii4GvQ9Zg&usqp=CAU",
    },
    {
      name: "Raju",
      balance: -5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSOVbczZ77VRyMfk0ZqxmSKNg-4VRzunINHjAPtWn42U_WqoOnaur-d73kx-pP1EWV0w&usqp=CAU",
    },
  ]);

  return (
    <div className="mainApp">
      <FriendList friendList={friends} setFriendList={setFriends} />
      <Split />
      <AddFriend friendList={friends} setFriendList={setFriends} />
    </div>
  );
}

export default App;
