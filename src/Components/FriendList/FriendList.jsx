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
        {balance < 0 && (
        <p className="red">
          You owe {name} {Math.abs(balance)}€
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}€
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      </div>
      <button>Select</button>
    </div>
  );
}

export default FriendList;