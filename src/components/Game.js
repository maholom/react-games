import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from '../animation';
//REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
//ROUTER
import { Link } from 'react-router-dom';
//UTIL
import { smallImage } from '../util';

const Game = ({ name, released, image, id }) => {
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'; //odstrani scroll hlavni stranky
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
