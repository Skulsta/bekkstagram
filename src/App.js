import React from 'react';
import Header from './components/Header'
import Image from './components/Image'
import images from './data/images';
import Post from './components/Post'

function App() {
  return (<div>
  <Header />
  <Post>
  {images.map((image) => {
    return <Image src={image.url} alt={image.description} key={image.id} />
})
  }
  </Post>
  </div>
  )}

export default App;
