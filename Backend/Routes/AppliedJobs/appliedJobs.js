const appliedJobs = require("express").Router()
const { deleteAppliedJob } = require("../../Queries/appliedJobsQueries")

appliedJobs.delete("/:id", deleteAppliedJob)


module.exports = appliedJobs;