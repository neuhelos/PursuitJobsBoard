const db = require("../Database/database");

const createJobPost = async (req, res) => {
    try {
        let newJobPost = await db.one(
        "INSERT INTO jobs (job_title, job_link, job_description, job_location, job_type, remote_status, job_closingdate, user_id) VALUES($1, $2, $3, $4, $5) RETURNING id",
        [req.body.jobTitle, req.body.jobLink, req.body.description, req.body.type, req.body.remote, req.body.closingDate, req.params.id]
        );
        res.status(200).json({
        status: "Success",
        message: "Job Post Created",
        payload: newJobPost
        });
    } catch (err) {
        res.status(404).json({
        status: err,
        message: "Job Post Creation Failure",
        });
    }
    };

const getJobsPostsByUser = async (req, res, next) => {
    try {
        let getJobsPostsByUser = await db.any(
            "SELECT * FROM jobs WHERE user_id = $1", req.params.id
        )
        res.status(200).json({
            status: "Success",
            message: "Job Posted",
            payload: getJobsPostsByUser
        });
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "No Jobs Posted",
        });
    }
}

const getJobPost = async (req, res, next) => {
    try {
        let job = await db.one(
        "SELECT * FROM jobs WHERE id = $1",
        req.params.id
        );
        res.status(200).json({
        status: "Success",
        message: "Job Retrieved",
        payload: job
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Job Not Found",
        });
    }
    };


const getAllJobsPosts = async (req, res, next) => {
    try {
        let allJobsPosts = await db.any(
        "SELECT * FROM jobs"
        );
        res.status(200).json({
        status: "Success",
        message: "All Jobs Posts in Database",
        payload: allJobPosts
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Jobs Posts Not Found",
        });
    }
};

const deleteJobsPost = async (req, res, next) => {
    try {
        await db.none("DELETE FROM jobs WHERE id = $1", req.params.id);
        res.status(200).json({
        status: "Success",
        message: "Jobs Post Deleted"
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Jobs Post Deletion Failed"
        });
    }
};

module.exports = {
    createJobPost,
    getJobPost,
    getJobsPostsByUser,
    getAllJobsPosts,
    deleteJobsPost
}
