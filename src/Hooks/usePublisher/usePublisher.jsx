import axios from "axios";
import { useEffect, useState } from "react";

const usePublisher = () => {

    const [publisher, setPublisher] = useState([]);
    const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/publisher')
    .then( res => {
      setPublisher(res.data)
      setLoader(false)
    })
      .catch((error) => console.log(error));
  }, []);

  return [publisher, loader]

}

export default usePublisher;