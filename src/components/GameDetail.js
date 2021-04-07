import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const GameDetail = () => {
  //Data
  const { screen, game } = useSelector((state) => state.detail);
};

export default GameDetail;
