const jobsSearch = require('express').Router({mergeParams: true})
const { search } = require("../../../Queries/SearchQueries")

jobsSearch.get('/search', search)

module.exports = jobsSearch