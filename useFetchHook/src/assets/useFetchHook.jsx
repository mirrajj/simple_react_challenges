import React,{useEffect} from 'react';

const useFetchHook = (url) => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState([]);

    const fetchData = async () => {
        try{
            setLoading(true)
            const response = await fetch(url).then(prom => prom.json()).then(res => res);
            if(response.ok) {
                setData([...response]);
                setLoading(false);
            }else{
                throw new Error(response.statusText);
            }
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchData();
    },url)
    
  return (
   {loading,error,data}
  );
}

export default useFetchHook;
