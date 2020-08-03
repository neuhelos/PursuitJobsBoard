import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import TextField from '@material-ui/core/TextField';

const LocationSearchInput = () => {


  const [location, setLocation] = useState("")

  const handleChange = location => {
    setLocation(location);
  };

  const handleSelect = location => {
    setLocation(location)
  };

    return (
      <PlacesAutocomplete
        value={location}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {

          return (
          <>
          <TextField id="jobLocation" placeholder="Job Location"  label="Job Location" variant="outlined" {...getInputProps()} required/>
            {/* <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
              required
            /> */}
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}}
      </PlacesAutocomplete>
    );
}

export default LocationSearchInput