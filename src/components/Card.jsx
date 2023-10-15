/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Heading = (headingText, isBlock) => (
  <Typography
    variant="caption"
    gutterBottom
    sx={{ display: isBlock ? 'block' : '', fontSize: 6, fontWeight: 'bold' }}
  >
    {headingText}
  </Typography>
);

export default function OutlinedCard({ storyNumber, description, storyPoints, deadline }) {
  return (
    <Box sx={{ width: 120, height: 80, padding: 0, margin: 0, marginBottom: 0.5 }}>
      <Card variant="outlined" sx={{ boxShadow: 2 }}>
        <CardContent sx={{ padding: 0.5 }}>
          <Box>
            <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: 6 }}>
              {Heading('Story Number:')} {storyNumber}
            </Typography>
            <Typography
              variant="body4"
              gutterBottom
              sx={{ display: 'block', fontSize: 6, overflow: 'hidden' }}
            >
              {Heading('Description:', false)} {description}
            </Typography>

            <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: 6 }}>
              {Heading('Story Points: ')}
              {storyPoints}
            </Typography>
            <Typography variant="caption" gutterBottom sx={{ display: 'block', fontSize: 6 }}>
              {Heading('Deadline: ')}
              {deadline}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ padding: 0, fontSize: 6 }}>
          <Button
            size="small"
            sx={{ fontSize: 6, paddingTop: 0 }}
            // onClick={() => handleCardClick()}
          >
            Edit Story
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

Card.defaultProps = {
  storyNumber: '',
  storyPoints: 0,
  Description: '',
  isBug: false,
};

Card.propTypes = {
  storyNumber: PropTypes.string,
  storyPoints: PropTypes.number,
  Description: PropTypes.string,
  isBug: PropTypes.bool,
};
