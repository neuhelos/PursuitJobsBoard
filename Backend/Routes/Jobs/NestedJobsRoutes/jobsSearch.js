const jobsSearch = require('express').Router({mergeParams: true})
const { searchJobs } = require("../../../Queries/SearchQueries")

jobsSearch.get('/search', searchJobs )

module.exports = jobsSearch