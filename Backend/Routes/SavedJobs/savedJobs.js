const savedJobs = require("express").Router()
const { deleteSavedJob } = require("../../Queries/savedJobsQueries")

savedJobs.delete("/:id", deleteSavedJob)


module.exports = savedJobs;