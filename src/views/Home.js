import React from 'react';
import Logo from '../assets/logo.png';
import HelloWorld from '../components/HelloWorld'

const Home = () => {
  return (
    <div className="home">
      <img alt="Vue logo" src={Logo} />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  );
}

export default Home;
