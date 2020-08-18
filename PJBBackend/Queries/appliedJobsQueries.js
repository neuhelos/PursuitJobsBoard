const db = require("../Database/database");

const createAppliedJob = async (req, res, next) => {
    try {
        let appliedJob = await db.one(
        "INSERT INTO appliedjobs (user_id, jobs_id) VALUES($1, $2)",
        [req.body.user, req.params.id]
    );
        res.status(200).json({
        status: "Success",
        message: "Job Applied",
        payload: appliedJob
    });
    } catch (err) {
        res.status(404).json({
        status: err,
        message: "Job Not Applied",
    });
    }
};

const getAppliedJobsByUser = async (req, res, next) => {
    try {
        let getAppliedJobs = await db.any(
            "SELECT * FROM appliedJobs JOIN jobs ON jobs.id = appliedjobs.jobs_id JOIN users ON users.users_id = jobs.users_id HAVING users.users_id = $1", 
            req.params.id
        )
        res.status(200).json({
            status: "Success",
            message: "User Applied Jobs",
            payload: getAppliedJobs
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "No Applied Jobs",
        });
    }
}

const getAppliedJob = async (req, res, next) => {
    try {
        let getAppliedJob = await db.one(
            "SELECT * FROM appliedJobs JOIN jobs ON jobs.jobs_id = appliedjobs.jobs_id JOIN users ON users.users_id = jobs.users_id HAVING users.users_id = $1 AND jobs.jobs_id = $2", 
            [req.body.user, req.params.id]
        )
        res.status(200).json({
            status: "Success",
            message: "User Applied Job",
            payload: getAppliedJob
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Job Apply Failed",
        });
    }
}

const deleteAppliedJob = async (req, res) => {
    try {
        await db.none("DELETE FROM appliedjobs WHERE appliedjobs_id = $1", req.params.id);
        res.status(200).json({
        status: "Success",
        message: "Applied Job Deleted"
        });
    } catch (error) {
        res.status(404).json({
        status: error,
        message: "Applied Job Deletion Failed"
        });
    }
};


module.exports = {
    createAppliedJob,
    getAppliedJobsByUser,
    getAppliedJob,
    deleteAppliedJob
}