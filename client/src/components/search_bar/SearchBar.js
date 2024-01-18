import React, { useState } from 'react';
import './SearchBar.css'
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'pear', label: 'Pear' },
];

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Select
        options={filteredOptions}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={false} // Disable built-in search since we're using our own input
      />
    </div>
  );
};

export default SearchBar;
