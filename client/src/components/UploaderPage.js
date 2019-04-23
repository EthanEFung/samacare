import React, {useEffect, useState} from 'react';
import Spinner from './Spinner';

export default function UploaderPage(props) {
  /*
    This seems like a tough pattern going down the line, you might want to set up UploaderPage as a react Component. Rewritten, it might look like
    export default class UploaderPage extends PureComponent {
      state = { image: undefined, viewType: ... }

      onChange = (e) => {
        this.setState({ viewType: 'loading' }, () => {
          const file = e.target.files[0];
          const data = new FormData();
          data.append(0, file);
          fetch('/upload', {
            method: 'POST',
            body: data
          })
          .then(res => res.json())
          .then(image => {
            this.setState({ image, viewType: 'finished' });
          })
          .catch(err => console.error(err));
        });
      }

      ...
    }

    It keeps a clean state definition at top of file. Though, useState() does come with a nice setter method.
  */

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

  // One issue with doing this is I think react isn't able to reference these components in their
  // virtual dom, therefore removing it's ability to improve performance on renders. I think
  // The best alternative is to define the components conditionally in the return value
  // OR - I think adding a key to the view addresses this issue too
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
      <View key={`uploader_${viewType}`} onChange={onChange} image={image}/>
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
