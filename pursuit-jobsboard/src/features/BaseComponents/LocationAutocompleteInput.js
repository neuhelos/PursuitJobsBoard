import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'


const LocationSearchInput = ( props ) => {

  const { input, placeholder, label } = props
 

  const locationHandleSelectClick = (event) => {
    input.locationHandleSelect(event.target.dataset.value)
  }

  const searchOptions = {
    types: ['(regions)']
  }

  return (

    <PlacesAutocomplete
      value={input.locationInput}
      onChange={input.locationHandleChange}
      onSelect={input.locationHandleSelect}
      searchOptions={searchOptions}
      shouldFetchSuggestions={input.locationInput.length >= 2}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        
        return (
          <Autocomplete
            id="locationSearch"
            autoComplete={true}
            value={input.LocationInput}
            options={suggestions.map(suggestion => suggestion.description)}
            renderInput={ ( params ) => (
            <TextField {...params} {...getInputProps()} placeholder={placeholder} label={label} margin="normal" variant="outlined" required />
            )}
            renderOption={(option) => {
            return <Typography onClick={locationHandleSelectClick} data-value={option} noWrap>{option}</Typography>
            }}
            loading={loading}
          />
      )}}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput