import axios from "axios";
import { useEffect, useState } from "react";

const useNews = () => {

  

    const [news, setNews] = useState([]);
    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
    axios.get('https://the-daily-pulse-server-six.vercel.app/news/status')
    .then( res => {
      setNews(res.data)
      setLoader(false)
    })
      .catch((error) => console.log(error));
  }, []);

  return [news, loader]

}

export default useNews;