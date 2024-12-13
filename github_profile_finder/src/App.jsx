import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [users,setUsers] = useState([]);

  const findUser = async () => {
    try{
      const URL = 'https://api.github.com/search/users?q=';
      const response = await fetch(`${URL}${input}`).then(prom => prom.json()).then(data => (data));
      // console.log(response)
      if(!response) throw response.error;
      setUsers(response.items);
    }catch(err){
      console.log(err);
    }
  }

  // useEffect(() => {
  //   findUser();
  // },[])

  const onSubmit = () => {
    console.log("in submit")
    findUser();
  }

  return (
    <>
      <form onSubmit = {(e) => e.preventDefault()}>
        <input 
        type='text' 
        placeholder='Enter a name'
        value = {input}
        onChange = {(e) => setInput(e.target.value)}
        />

        <button type='submit' onClick = {() => onSubmit()}>Search</button>
      </form>
      
      
      <div className = 'p-8 border flex flex-wrap gap-2 justify bg-zinc-200'>
        {users && 
          users.map((user,index) => (
            <div className = 'flex justify-between border-sky-400 shadow-blue-600 shadow w-fit h-auto rounded-lg px-2 py-4 bg-white grow' key = {index}>
              <img src = {user.avatar_url} className = 'rounded-full w-11 h-11 shadow-lg border-slate-700 border '/>
              <div>
                <div className='border rounded-full w-auto h-auto p-2 m-2 shadow '>
                  <p>Username: <span className='text-blue-300 uppercase'>{user.login}</span> </p>
                  <p><a href={user.html_url}>{user.html_url}</a></p>
                </div>
                <div className= 'text-sm flex justify-around mt-3'>
                  <p>Joined : {user.created_at}</p>
                  <p>Following : {user.following}</p>
                  <p>Followers : {user.followers}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
