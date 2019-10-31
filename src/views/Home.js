import React from 'react';
import produce from 'immer';
import Logo from '../assets/logo.png';
import HelloWorld from '../components/HelloWorld';

const Home = () => {
  const [members, setMembers] = React.useState([
    {
      name: 'ronffy',
      age: 30
    }
  ]);

  React.useEffect(() => {
    console.log(members);
  }, [members]);

  return (
    <div className="home">
      <img
        alt="Vue logo"
        src={Logo}
        onClick={() => {
          setMembers(
            produce(members, draft => {
              draft[0].age++;
            })
          );
        }}
      />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  );
};

export default Home;
