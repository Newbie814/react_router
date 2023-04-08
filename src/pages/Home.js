import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h3>home</h3>
      <div className='container'>
        <Link to='/about' className='btn' style={{ marginBottom: '2rem' }}>
          about
        </Link>
      </div>
      <div className='container'>
        <Link to='/products' className='btn'>
          products
        </Link>
      </div>
    </>
  );
};
export default Home;
