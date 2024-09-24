// FriendList component
function FriendList({ friendList }) {
  return (
    <div className="friendList">
      {friendList.map((friend, index) => (
        <Friend
          key={index}
          name={friend.name}
          balance={friend.balance}
          img={friend.img}
        />
      ))}
    </div>
  );
}

function Friend({ name, balance, img }) {
  return (
    <div className="mainFriend">
      <div className="image">
        <img src={img} />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{balance}</p>
      </div>
      <button>Select</button>
    </div>
  );
}

export default FriendList;