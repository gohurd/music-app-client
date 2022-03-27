import React from 'react';
import Navbar from '../comtponents/Navbar';
import { Container } from '@mui/material';

const MyComponent: React.FC = ({ children }) => {
  return (
    <Container style={{ margin: '90px 0' }}>
      <Navbar />
      {children}
    </Container>
  );
};

export default MyComponent;
