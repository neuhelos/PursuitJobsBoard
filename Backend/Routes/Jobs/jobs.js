const jobs = require("express").Router()

const {getJobPost, getAllJobsPosts, deleteJobsPost} = require("../../Queries/jobsQueries")

//Nested User Routes
const jobsAppliedJobsRouter = require("./NestedJobsRoutes/jobsAppliedJobs")
const jobsSavedJobsRouter = require("./NestedJobsRoutes/jobsSavedJobs")
//const jobsCommentsRouter = require("./NestedJobsRoutes/jobsComments")

jobs.use('/', jobsJobsPostsRouter);
jobs.use('/', jobsAppliedJobsRouter)
jobs.use('/', jobsSavedJobsRouter)

//User Routes
jobs.get("/",getAllJobsPosts)
jobs.get("/:id", )
jobs.delete("/:id", deleteUser)

module.exports = jobs;