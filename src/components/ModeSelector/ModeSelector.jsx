import React from 'react';
import './ModeSelector.css';

const ModeSelector = ({onSelectMode}) => {
  return (
    <div className='mode-selector'>
      <button onClick={() => onSelectMode(process.env.REACT_APP_SMALL_SIZE_DATA_URL)} className="btn btn-info">Подгрузить малый объем</button>
      <button onClick={() => onSelectMode(process.env.REACT_APP_LARGE_SIZE_DATA_URL)} className="btn btn-danger">Подгрузить большой объем</button>
    </div>
  );
};

export default ModeSelector;