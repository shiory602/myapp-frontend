import React from 'react';
import Layout from '../components/Layout'
import catPic from '../images/top.jpg';

function Home() {
  return (
    <Layout>
      <div className="App">
        <main>
          <img src={catPic} className='App-image' alt='cat' />
        </main>
      </div>
    </Layout>
  )
}

export default Home;