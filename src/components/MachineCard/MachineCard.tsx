import React from 'react';

const MachineCard = ({ status, timer, onStart, onStop }) => {
    return (
        <div className="machine-card">
            <h3>Washing Machine</h3>
            <p>Status: {status}</p>
            <p>Timer: {timer} minutes</p>
            <div className="controls">
                <button onClick={onStart} disabled={status === 'Running'}>Start</button>
                <button onClick={onStop} disabled={status !== 'Running'}>Stop</button>
            </div>
        </div>
    );
};

export default MachineCard;