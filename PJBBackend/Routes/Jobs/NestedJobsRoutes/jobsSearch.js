const jobsSearch = require('express').Router({mergeParams: true})
const { searchJobs } = require("../../../Queries/SearchQueries")

jobsSearch.post('/search', searchJobs )

module.exports = jobsSearch