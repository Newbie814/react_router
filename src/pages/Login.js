import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (name && email) {
  //     setName(name);
  //     setEmail(email);
  //     const user = {
  //       name: name,
  //       email: email,
  //     };
  //     setUser(user);
  //     console.log(user);
  //     setName('');
  //     setEmail('');
  //   }
  //   if (!name || !email) {
  //     alert('Please enter your name and/or email address');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please enter your name and/or email address');
      return;
    }
    setUser({ name: name, email: email });
    setName('');
    setEmail('');
    navigate('/dashboard');
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>login</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default Login;
