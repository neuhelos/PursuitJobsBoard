const jobsSavedJobs = require('express').Router({mergeParams: true})
const { createSavedJob, getSavedJob } = require("../../../Queries/savedJobsQueries")

jobsSavedJobs.post('/:id/savedjobs', createSavedJob)
jobsSavedJobs.get('/:id/savedjobs', getSavedJob)

module.exports = jobsSavedJobs