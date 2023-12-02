import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const BorderLinearProgress = ({ value, color }) => {
    const linearStyles = {
        height: 6,
        borderRadius: 5,
        backgroundColor: '#DEE6F5',
    };

    const barStyles = {
        borderRadius: 5,
        backgroundColor: color || '#1a90ff', // Default color or provided color
    };

    return (
        <LinearProgress
            variant="determinate"
            value={value}
            style={linearStyles}
            sx={{
                '& .MuiLinearProgress-bar': barStyles,
            }}
        />
    );
};

export default BorderLinearProgress;