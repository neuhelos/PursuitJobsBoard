const usersSavedJobs = require('express').Router({mergeParams: true})
const { getSavedJobsByUser } = require("../../../Queries/savedJobsQueries")

usersSavedJobs.get('/:id/savedjobs', getSavedJobsByUser)


module.exports = usersSavedJobs