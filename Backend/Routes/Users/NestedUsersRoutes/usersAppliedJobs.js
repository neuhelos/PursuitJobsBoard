const usersAppliedJobs = require('express').Router({mergeParams: true})
const { getAppliedJobsByUser } = require("../../../Queries/appliedJobsQueries")

usersAppliedJobs.get('/:id/appliedjobs', getAppliedJobsByUser)


module.exports = usersAppliedJobs