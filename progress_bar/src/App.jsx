import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState([]);

  useEffect(() => {
    fetchData();
    
    window.addEventListener('scroll',() => setProgressWidth());
    // setData(items);
  },[])

  console.log(window.innerHeight);
  console.log(window.scrollY)
  console.log(document.documentElement.scrollHeight);

  const setProgressWidth = () => {
    const progressBar = document.querySelector('.progress_bar');
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const width = (window.scrollY / documentHeight) * 100;
    progressBar.style.width = `${width}%`;
  }

  const fetchData = async () => {
    try{
      const response  = await fetch('https://dummyjson.com/products?limit=100').then(prom => prom.json()).then(data => (data));
      if(response){
        console.log("running");
        setData(response.products);
      }else{
        throw(error);
        // alert("error fetching data");
      }
    }catch(err){
      console.log(err);
    }
  }
 

  return (
    <div className='w-full'>
      <h3 className='bg-emerald-600 text-white text-xl font-sans w-full fixed'>Progress Bar React</h3>
      <div className='h-1 w-full bg-slate-600 rounded-full fixed'>
        <div className='progress_bar bg-emerald-500 h-full w-0'></div>
      </div>
      <div>
        {data.length &&
          data.map(item => (
            <p>{item.title}</p>
          ))
        }
      </div>
    </div>
  )
}

export default App
