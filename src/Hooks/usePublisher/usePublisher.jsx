import axios from "axios";
import { useEffect, useState } from "react";

const usePublisher = () => {

    const [publisher, setPublisher] = useState([]);
    const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get('https://the-daily-pulse-server-six.vercel.app/publisher')
    .then( res => {
      setPublisher(res.data)
      setLoader(false)
    })
      .catch((error) => console.log(error));
  }, []);

  return [publisher, loader]

}

export default usePublisher;