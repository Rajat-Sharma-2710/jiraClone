import { TableRow } from '@mui/material';
import OutlinedCard from './Card';
import PropTypes from 'prop-types';

const Column = ({ stories }) => {
  console.log('stories', stories);
  return (
    <>
      <TableRow>
        {stories.map((storyProps) => (
          <OutlinedCard key={storyProps.id} {...storyProps} />
        ))}
      </TableRow>
    </>
  );
};

Column.defaultProps = {
  stories: [],
  columnTitle: '',
};

Column.propTypes = {
  stories: PropTypes.array,
  columnTitle: PropTypes.string,
};

export default Column;
