import React, {useEffect, useState} from 'react';
import Spinner from './Spinner';

export default function UploaderPage(props) {
  function onChange(e) {
    setViewType('loading');
    const file = e.target.files[0];
    const data = new FormData();
    data.append(0, file);
    fetch('/upload', {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(image => {
      setImage(image);
      setViewType('finished');
    })
    .catch(err => console.error(err));
  }

  const [image, setImage] = useState();
  

  const viewTypes = {
    'loading': Spinner,
    'finished': SuccessMessage,
    'default': Uploader
  };
  const [viewType, setViewType] = useState('default');
  const View = viewTypes[viewType];

  return (<article>
    <header>
      <h1>Upload</h1>
    </header>
    <section>
      <View onChange={onChange} image={image}/>
    </section>
    <footer>

    </footer>
  </article>
  );
}

function Uploader({onChange}) {
  return (
    <input type='file' id='single' onChange={onChange} /> 
  );
}

function SuccessMessage({image}) {
  return (
    <div>
      <h2>Uploaded</h2>
      <img src={image.secure_url} alt='' />
    </div>
  )
}