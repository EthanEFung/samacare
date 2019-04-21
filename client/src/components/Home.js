import React, {useState, useEffect} from 'react';

export default function Home(props) {
  console.log(props);

  const [data, setData] = useState(null);

  useEffect(() => {
    (async function() {
      const response = await fetch('/user');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      setData(body.express);
    })();
  }, []);

  return (
    <div>
      Hello Welcome
    </div>
  )  
}