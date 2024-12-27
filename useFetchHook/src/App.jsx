import { useState } from 'react'
import useFetchHook from './assets/useFetchHook'


function App() {
 const {loading,error,data} = useFetchHook('https://dummyjson.com/products');

  return (
    <>
      {
        loading && !error ? <p>loading data...</p> : 
        <div>
          {
            data && data.length &&
            data.map(item => <p>{item.name}</p>)
          }
        </div>
      }
      {
        error ? <p>There was an error loading data, retry later</p> : null
      }
    </>
  )
}

export default App