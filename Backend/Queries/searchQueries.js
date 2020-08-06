const db = require("../Database/database");

const searchJobs = async (req, res, next) => {
    
    try {
        let searchQuery = await db.any(
            "SELECT * FROM jobs JOIN users ON jobs.users_id = users.id WHERE (job_description LIKE $1 OR job_title LIKE $1) OR job_location = $2", 
            [`%${req.body.query}%`, req.body.location]       
            //SELECT to_tsvector('job_description field')  @@ to_tsquery('query');
        )
        res.status(200).json({
            status: "Success",
            message: "Search Query Success",
            payload: searchQuery
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "No Search Results Available",
        });
    }
}

module.exports = { searchJobs }