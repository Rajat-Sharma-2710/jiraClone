import { Box, Button, Typography } from '@mui/material';
import AddStoryModal from './AddStoryModal';
import { useState } from 'react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <Box
        sx={{
          background: '#AE275F',
          display: 'flex',
          color: '#FFFF',
          border: 1,
          borderColor: 'black',
          borderRadius: 1,
        }}
      >
        <Box>
          <Typography sx={{ textAlign: 'left', fontSize: 6, marginLeft: 0.3 }}>
            Board Name
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 8, marginLeft: 0.3, fontWeight: 'bold' }}>
            Sprint Number: 143
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            background: '#F2418B',
            padding: 0,
            width: 8,
            fontSize: 6,
            boxShadow: 'none',
            marginLeft: 1,
          }}
          onClick={() => handleButtonClick()}
        >
          Create New
        </Button>
        <AddStoryModal showModal={showModal} setShowModal={setShowModal} />
      </Box>
    </>
  );
};

export default Header;
