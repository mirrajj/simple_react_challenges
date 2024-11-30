import { useEffect,useState } from 'react'
import './App.css';
import Spinner from './Spinner.jsx';

function App() {
  let [lastIndex,setlastIndex] = useState(0);
  // let lastIndex;
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);
  const [moreProducts,setMoreProducts] = useState([]);

  let parentDOM;



  const fetchData = async (skip) => {
    setLoading(true);
    const result = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
    .then(res => res.json())
    .then(res => res.products);
    // console.log(result.products);
    if(result) setLoading(false);
    // setData(result);
    return result;
  }

  const loadContent = async () => {
    lastIndex === 0 ? setlastIndex(data.length) : setlastIndex(lastIndex += 10) ;
    const products = await fetchData(lastIndex + 10);

    const jsx = (
      products.map(item => (<div className='border rounded-md basis-auto grow self-end h-auto shadow-md'>
          <img src={`${item.images[0]}`} alt='image' className='w-32 h-auto' />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>)
      )
    )

    setMoreProducts([...moreProducts,jsx]);
  }


  useEffect(() => {
    setTimeout(async () => {
      let response = await fetchData(lastIndex);
      setData(response);
    },1000)
    // console.log(data);
    parentDOM = document.querySelector('.app');
    console.log(parentDOM);
  },[])

  // console.log(data);

  if(loading && lastIndex === 0){
    return <Spinner />;
  }
  return (
    <>
      <div className='w-96 flex flex-wrap gap-1 justify-start m-auto app '>
        
        {data.length ? 
          data.map(item => (
            <div className='border rounded-md basis-auto grow self-end h-auto shadow-md'>
              <img src={`${item.images[0]}`} alt='image' className='w-32 h-auto' />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>) ) : <p>loading</p>
        }
        {
          moreProducts && 
          moreProducts.map(product => product)
        }
      </div>
      <button onClick={loadContent}>{!loading ? "Load More" : <Spinner />}</button>
    </>
  )
}

export default App
