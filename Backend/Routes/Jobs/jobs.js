const jobs = require("express").Router()

const {getJobPost, getAllJobsPosts, deleteJobsPost} = require("../../Queries/jobsQueries")

//Nested Jobs Routes
const jobsAppliedJobsRouter = require("./NestedJobsRoutes/jobsAppliedJobs")
const jobsSavedJobsRouter = require("./NestedJobsRoutes/jobsSavedJobs")
const jobsSearchRouter = require('./NestedJobsRoutes/jobsSearch')
//const jobsCommentsRouter = require("./NestedJobsRoutes/jobsComments")

jobs.use('/', jobsAppliedJobsRouter)
jobs.use('/', jobsSavedJobsRouter)
jobs.use('/', jobsSearchRouter)

//Jobs Routes
jobs.get("/",getAllJobsPosts)
jobs.get("/:id", getJobPost)
jobs.delete("/:id", deleteJobsPost)

module.exports = jobs;