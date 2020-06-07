const jobsAppliedJobs = require('express').Router({mergeParams: true})
const { createAppliedJob, getAppliedJob } = require("../../../Queries/appliedJobsQueries")

jobsAppliedJobs.post("/:id/appliedjobs", createAppliedJob)
jobsAppliedJobs.get('/:id/appliedjobs', getAppliedJob)


module.exports = jobsAppliedJobs