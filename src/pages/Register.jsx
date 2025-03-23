import React from 'react';

const Register = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', width: '350px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Create an Account</h3>

        <form>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Full Name:</label><br />
            <input type="text" id="name" name="name" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="phone">Phone Number:</label><br />
            <input type="tel" id="phone" name="phone" required style={{ width: '100%', padding: '8px' }} />
          </div>

          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Sign Up
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Already have an account? <a href="/Login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
