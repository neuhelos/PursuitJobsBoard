const savedJobs = require('express').Router({mergeParams: true})
const { createSavedJob, getSavedJob, deleteSavedJob } = require("../../../Queries/savedJobsQueries")

savedJobs.post('/:id/savedjobs', createSavedJob)
savedJobs.get('/:id/savedjobs', getSavedJob)
savedJobs.delete("/:id", deleteSavedJob)

module.exports = savedJobs