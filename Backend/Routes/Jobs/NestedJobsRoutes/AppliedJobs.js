const appliedJobs = require('express').Router({mergeParams: true})
const { createAppliedJob, getAppliedJob, deleteAppliedJob } = require("../../../Queries/appliedJobsQueries")

appliedJobs.post("/:id/appliedjobs", createAppliedJob)
appliedJobs.get('/:id/appliedjobs', getAppliedJob)
appliedJobs.delete("/:id", deleteAppliedJob)

module.exports = appliedJobs