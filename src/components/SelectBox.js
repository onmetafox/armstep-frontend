import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: '#111',
    color: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.10)',
    padding: '7.5px 12px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#aaa',
    }
  }),
  menu: (provided) => ({
    ...provided,
    background: '#111',
    borderRadius: 12,
    border: '1px solid #7B7F94',
    overflow: 'hidden',
    color: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? '#282828' : state.isFocused ? '#282828' : '#111',
    color: 'white',
    '&:hover': {
      background: '#555',
    }
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#A7ABBE',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#999',
    '&:hover': {
      color: '#fff',
    }
  }),
  indicatorSeparator: () => ({
    // Removes the separator
    display: 'none'
  }),
  // You may also need to adjust other parts like indicatorsContainer, clearIndicator, etc.
};

const SelectBox = ({ options, className, placeholder }) => {
  return <Select
    className={className}
    styles={customStyles}
    options={options}
    placeholder={placeholder}
    theme={(theme) => ({
      ...theme,
      borderRadius: 16,
      colors: {
        ...theme.colors,
        primary25: '#666', // Color for options hover
        primary: '#000', // Color for the control when it is open
      },
    })}
  />
}

export default SelectBox;