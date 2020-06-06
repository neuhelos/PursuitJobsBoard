const users = require("express").Router()

const {createUser, getUser, deleteUser} = require("../../Queries/UserQueries")


//Nested Route
const usersImagesRouter = require('./UsersNestedRoutes/NestedImages');
const userJobsPostsRouter
const userAppliedJobsRouter = 
const userSavedJobsRouter = 

users.use('/', userJobsPostsRouter);
users.use()

users.post("/", createUser)

users.delete("/:id", deleteUser)

users.get("/:username", getUser)


module.exports = users;