/* eslint-disable react/prop-types */
import Dialog from '@mui/material/Dialog';
import { Box, Button, FormControl, TextField, TextareaAutosize } from '@mui/material';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useContext, useState } from 'react';
import { setStorage } from '../utils/storage';
import DataContext from '../contexts/data';
import { v4 as uuidv4 } from 'uuid';

export default function AddStoryModal({ showModal, setShowModal }) {
  const [storyNumber, setStoryNumber] = useState('');
  const [storyPoints, setStoryPoints] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);

  const { data, setData } = useContext(DataContext);

  const isEmpty = (value) => value === '';

  const createStoryCard = (e) => {
    e.preventDefault();
    if (isEmpty(storyNumber)) return;
    const formData = {
      id: uuidv4(),
      storyNumber,
      storyPoints,
      description,
      deadline: date == null ? 'null' : date.format('L'),
      status: 'toDo',
    };

    setStorage('To Do', formData);
    console.log('::::', data);
    data ? setData([...data, formData]) : setData([formData]);
    setStoryNumber('');
    setDate('');
    setDescription('');
    setStoryPoints('');
    setShowModal(false);
  };
  return (
    <Dialog onClose={() => setShowModal(false)} open={showModal}>
      <form>
        <FormControl>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              padding: 0.5,
              width: 220,
              height: 1 / 2,
            }}
          >
            <TextField
              id="filled-basic"
              value={storyNumber}
              size="small"
              label="Story Number"
              variant="standard"
              onChange={(e) => setStoryNumber(e.target.value)}
              required
            />

            <TextField
              id="filled-basic"
              value={storyPoints}
              label="Story Points"
              variant="standard"
              onChange={(e) => setStoryPoints(e.target.value)}
              type="number"
            />
            <DateField value={date} onChange={(e) => setDate(e)} />
            <TextareaAutosize
              aria-label="minimum height"
              value={description}
              minRows={3}
              placeholder="Description..."
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              size="small"
              sx={{
                padding: 0,
                margin: 0,
                border: 2,
                background: '#1976D2',
                color: 'black',
              }}
              onClick={(e) => createStoryCard(e)}
            >
              Save
            </Button>
          </Box>
        </FormControl>
      </form>
    </Dialog>
  );
}
