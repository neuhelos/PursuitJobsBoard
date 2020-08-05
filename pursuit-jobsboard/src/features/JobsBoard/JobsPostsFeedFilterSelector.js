import { createSelector } from '@reduxjs/toolkit'


export const selectJobsPostsSearchFilter = createSelector(

)

["bender", "nation", "person", "show"].forEach(function(filterBy) {
    var filterValue = state[filterBy];
    if (filterValue) {
      filteredItems = filteredItems.filter(function(item) {
        return item[filterBy] === filterValue;
      });
    }
  });