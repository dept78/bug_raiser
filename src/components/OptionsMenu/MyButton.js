import React from 'react';
import { Button } from '@material-ui/core';

const MyButton = ({ label, icon, onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary" // You can adjust the color based on your styling
      startIcon={<img src={`path/to/images/${icon}`} alt={label} />} // Adjust the path accordingly
      onClick={onClick}
      style={{
        fontFamily: 'JetBrains Mono',
        fontSize: 14,
        verticalAlign: 'bottom',
        margin: '10px 20px',
        width: 110,
        height: 90,
      }}
    >
      {label}
    </Button>
  );
};

export default MyButton;
