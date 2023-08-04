import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { InputGroup, Input } from '@chakra-ui/react';
export default function SearchContactByName({ title }) {
  const dispatch = useDispatch();

  const onFilterChange = evt => {
    const { value } = evt.target;
    dispatch(filterContacts(value));
  };
  return (
    <div>
      <p>{title}</p>
      <form>
        <InputGroup size="sm">
          <Input
            type="text"
            onChange={onFilterChange}
            placeholder="Search by name"
            _hover={{ borderColor: 'teal.500' }}
            _focus={{ borderColor: 'teal.700' }}
            transition="border-color 0.2s"
          />
        </InputGroup>
      </form>
    </div>
  );
}
SearchContactByName.propTypes = {
  title: PropTypes.string.isRequired,
};
