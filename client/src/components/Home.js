import React, {useState, useEffect} from 'react';

export default function Home(props) {
  console.log(props);

  const [data, setData] = useState(null);
  // You're showing a really great understanding of some of the newer possible hooks that ship w/ react
  // I've had to google a few methods that you've used! Thanks for showing me
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
