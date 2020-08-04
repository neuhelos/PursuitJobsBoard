import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


const LocationSearchInput = ( props ) => {

  const [location, setLocation] = useState("")

  const handleChange = location => {
    setLocation(location);
  };

  const handleSelect = location => {
    setLocation(location)
  };

  const searchOptions = {
    types: ['(regions)']
  }

  return (

    <PlacesAutocomplete
      value={location}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={searchOptions}
      shouldFetchSuggestions={location.length >= 3}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {

        return (
          <Autocomplete
            id="locationSearch"
            freeSolo
            options={suggestions.map(suggestion => suggestion.description)}
            renderInput={(params) => (
            <TextField {...params} placeholder={props.placeholder} label={props.label} margin="normal" variant="outlined" {...getInputProps()} required />
            )}
            loading={loading}
          />
      )}}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput