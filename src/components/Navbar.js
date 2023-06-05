import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <h1>Math Magicians</h1>
    <ul className={styles.nav}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <div className={styles.border} />
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <div className={styles.border} />
      <li>
        <Link to="/quote">Quotes</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
