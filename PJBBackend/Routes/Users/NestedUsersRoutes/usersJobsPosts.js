const usersJobsPosts = require('express').Router({mergeParams: true})
const {createJobPost, getJobsPostsByUser } = require("../../../Queries/jobsQueries")

usersJobsPosts.post('/:id/jobs', createJobPost)
usersJobsPosts.get('/:id/jobs', getJobsPostsByUser)

module.exports = usersJobsPosts