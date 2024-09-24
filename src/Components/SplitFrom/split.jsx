function Split(){
 return(
    <form className="form-split-bill">
        <h2>Split a bill with salman</h2>
        <label>💰 Bill value:</label>
        <input type="text" />
        <label>🧍‍♂️ Your expense:</label>
        <input type="text" />
        <label>👩🏻‍🤝‍👩🏻 salman expense:</label>
        <input type="text" />
        <label>🤑 Who is paying the bill?</label>
        <select>
            <option>You</option>
            <option>Salman</option>
        </select>
        <button className="button">Split bill</button>
    </form>
 )
}
export default Split