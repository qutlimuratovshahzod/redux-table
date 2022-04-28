import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addUser, deleteUser, deleteAll } from "./store/actions";
function App() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const dispatch = useDispatch()
  const users = useSelector((state) => state)

  const submitHandler = (event) => {
    event.preventDefault();

    if (!name.trim() || !surname.trim()) return

    const user = {
      name,
      surname,
      id: Date.now()
    }
    dispatch(addUser(user))
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Name"></input> <br />
        <input value={surname} onChange={(event) => setSurname(event.target.value)} type="text" placeholder="Surname"></input> <br />
        <button type="submit">Send</button>
        <button type="button" onClick={() => dispatch(deleteAll())}>delete all</button>
      </form>
     { users.length === 0 ? " " : 
      <table className="table">

              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">button</th>
                </tr>
              </thead>
              <tbody>
      {
        users.map((item, index) => (
          
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td> <button onClick={() => dispatch(deleteUser(item.id))}>Delete</button> </td>
                </tr>

)
)
}
</tbody>
</table>}
    </div>
  );
}

export default App;
