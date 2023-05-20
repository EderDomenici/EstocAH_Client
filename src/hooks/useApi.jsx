import axios from 'axios';
import { useEffect, useState } from 'react';

export function useApi(url) {
    const[data, setData] = useState([])
    const[isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(url)
    .then(response =>{
        const sortedProducts = response.data.sort((a, b) => a.id - b.id);
        setData(sortedProducts);
    })
    .finally(()=>{
        setIsFetching(false)
    })
    }, []);

    return { data, isFetching }
}
