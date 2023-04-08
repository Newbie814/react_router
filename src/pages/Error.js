import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h1>404</h1>
      <h4>page not found</h4>
      <div>
        <Link to='/' className='btn'>
          back to homepage
        </Link>
      </div>
    </section>
  );
};
export default Error;
