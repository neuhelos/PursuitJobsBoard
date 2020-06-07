const users = require("express").Router()

const {createUser, getUser, deleteUser} = require("../../Queries/UserQueries")

//Nested User Routes
const usersJobsPostsRouter = require("./NestedUsersRoutes/usersJobsPosts")
const usersAppliedJobsRouter = require("./NestedUsersRoutes/usersAppliedJobs")
const usersSavedJobsRouter = require("./NestedUsersRoutes/usersSavedJobs")

users.use('/', usersJobsPostsRouter);
users.use('/', usersAppliedJobsRouter)
users.use('/', usersSavedJobsRouter)

//User Routes
users.post("/", createUser)
users.delete("/:id", deleteUser)
users.get("/:id", getUser)

module.exports = users;