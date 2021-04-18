import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const GameDetail = () => {
  //Data vytahnout ze stavu
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
