const jobs = require("express").Router()

const {getJobPost, getAllJobsPosts, deleteJobsPost} = require("../../Queries/jobsQueries")

//Nested Jobs Routes
const appliedJobsRouter = require("./NestedJobsRoutes/appliedJobsNested")
const savedJobsRouter = require("./NestedJobsRoutes/savedJobsNested")
const jobsSearchRouter = require('./NestedJobsRoutes/jobsSearch')

//const jobsCommentsRouter = require("./NestedJobsRoutes/jobsComments")

jobs.use('/', appliedJobsRouter)
jobs.use('/', savedJobsRouter)
jobs.use('/', jobsSearchRouter)

//Jobs Routes
jobs.get("/",getAllJobsPosts)
jobs.get("/:id", getJobPost)
jobs.delete("/:id", deleteJobsPost)

module.exports = jobs;