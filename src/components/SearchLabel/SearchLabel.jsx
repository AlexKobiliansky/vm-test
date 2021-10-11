import React, {useState} from 'react';

const SearchLabel = ({onSearch}) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <div className={'input-group mb-3 mt-3'}>
      <div className={'input-group-prepend'}>
        <button
          className={'btn btn-outline-secondary'}
          onClick={() => onSearch(value)}
        >Поиск</button>
      </div>
      <input
        type="text"
        className={'form-control'}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchLabel;