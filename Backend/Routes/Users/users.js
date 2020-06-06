const users = require("express").Router()

const {createUser, getUser, deleteUser} = require("../../Queries/UserQueries")

//Nested User Routes
const userJobsPostsRouter = require("./NestedUsersRoutes/userJobsPosts")
const userAppliedJobsRouter = require("./NestedUsersRoutes/userAppliedJobs")
const userSavedJobsRouter = require("./NestedUsersRoutes/userSavedJobs")

users.use('/', userJobsPostsRouter);
users.use('/', userAppliedJobsRouter)
users.use('/', userSavedJobsRouter)

//User Routes
users.post("/", createUser)
users.delete("/:id", deleteUser)
users.get("/:id", getUser)

module.exports = users;