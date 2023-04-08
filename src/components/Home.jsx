import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h3>home</h3>
      <div className='container'>
        <Link to='/about'>about</Link>
      </div>
      <div className='container'>
        <Link to='/products'>products</Link>
      </div>
    </>
  );
};
export default Home;
