import { useEffect, useState } from 'react'


function App() {
 const [products,setProducts] = useState([]);
 const [loading,setLoading] = useState(false);
 const [error,setError] = useState(null);
 const [documentHeight,setDocumentHeight] = useState(document.documentElement.scrollHeight);

 const fetchData = async () => {
  setLoading(true);
  try{
    const response = await fetch('https://dummyjson.com/products').then(prom => prom.json()).then(res => res);
    console.log(response);
    if(!response) throw new Error(error.response.message);
    console.log(response.products);
    setProducts([...response.products]);
  }catch(err){
    console.log(err);
    setError(err)
  }finally{
    setLoading(false);
  }

 }
 useEffect(() => {
  // console.log("doing something");
  // console.log(document.documentElement.scrollHeight);
  fetchData();

 },[])

 const scrollToBottom = () => {
  window.scrollTo(0,documentHeight);
 }
 const scrollToTop = () => {
  window.scrollTo(0,0);
 }

  return (
    <>
      <button onClick={() => scrollToBottom()}>Scroll to bottom</button>
      {
        !error && loading ? <p>Loading Data please wait...</p> :
          products.length && !error ?
            <div>
              {
                products.map(item => <p>{item.title}</p>)
              }
            </div> :
            <p>{`An error occured : ${error}`}</p>
      }
      <button onClick={() => scrollToTop()}>Scroll To Top</button>
    </>
  )
}

export default App
