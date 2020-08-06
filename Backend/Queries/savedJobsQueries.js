const db = require("../Database/database");

const createSavedJob = async (req, res, next) => {
    try {
        let savedJob = await db.one(
        "INSERT INTO savedjobs (user_id, jobs_id) VALUES($1, $2)",
        [req.body.user, req.params.id]
    );
        res.status(200).json({
        status: "Success",
        message: "Job Saved",
        payload: savedJob
    });
    } catch (err) {
        res.status(404).json({
        status: err,
        message: "Saved Job Creation Failure",
    });
    }
};

const getSavedJobsByUser = async (req, res, next) => {
    try {
        let getSavedJobs = await db.any(
            "SELECT savedjobs.id FROM savedJobs JOIN jobs ON jobs.jobs_id = savedjobs.jobs_id JOIN users ON users.users_id = jobs.users_id HAVING users.users_id = $1", req.params.id
        )
        res.status(200).json({
            status: "Success",
            message: "User Saved Jobs",
            payload: getSavedJobs
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "No Saved Jobs",
        });
    }
}

const getSavedJob = async (req, res, next) => {
    try {
        let getSavedJob = await db.one(
            "SELECT * FROM savedjobs JOIN jobs ON jobs.jobs_id = savedjobs.jobs_id JOIN users ON users.users_id = jobs.users_id HAVING users.users_id = $1 AND jobs.jobs_id = $2", 
            [req.body.user, req.params.id]
        )
        res.status(200).json({
            status: "Success",
            message: "User Saved Job",
            payload: getSavedJob
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Job Not Saved",
        });
    }
}

const deleteSavedJob = async (req, res) => {
    try {
        await db.none("DELETE FROM savedjobs WHERE savedjobs_id = $1", req.params.id);
        res.status(200).json({
        status: "Success",
        message: "Saved Job Deleted"
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Saved Job Deletion Failed"
        });
    }
};

module.exports = {
    createSavedJob,
    getSavedJobsByUser,
    getSavedJob,
    deleteSavedJob
}