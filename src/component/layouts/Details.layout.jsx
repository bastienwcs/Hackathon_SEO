import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Return from '../common/Return';

import style from '../../css/HeaderAndFooter.module.css';

function DetailsLayout({ children }) {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.brand}>Paye ton stage</h1>
        <Link to="/panier">
          <FontAwesomeIcon
            style={{
              color: '#F8DDBE',
            }}
            icon={faShoppingCart}
          />
        </Link>
      </header>
      <section className={style.container}>{children}</section>

      <footer className={style.container}>
        <Return path="/annonces" />
      </footer>
    </>
  );
}

DetailsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailsLayout;
