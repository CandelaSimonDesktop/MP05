import React from 'react';

const Welcome = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to my Page!</h1>
      <p style={styles.subtitle}>
        I'm glad to have you here, I hope you can explore and enjoy the experience!
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.3rem',
    maxWidth: '500px',
  },
};

export default Welcome;
