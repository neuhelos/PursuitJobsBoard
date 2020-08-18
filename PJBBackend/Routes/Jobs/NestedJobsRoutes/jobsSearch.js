const jobsSearch = require('express').Router({mergeParams: true})
const { searchJobs } = require("../../../Queries/searchQueries")

jobsSearch.post('/search', searchJobs )

module.exports = jobsSearch