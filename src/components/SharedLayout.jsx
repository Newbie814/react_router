import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbar';

const Home = () => {
  return (
    <>
      <StyledNavbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default Home;
