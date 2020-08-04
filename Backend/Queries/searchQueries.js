const db = require("../Database/database");

const searchJobs = async (req, res, next) => {
    
    try {
        let searchQuery = await db.any(
            "SELECT * FROM jobs JOIN users ON jobs.users_id = users.id WHERE job_description LIKE $1 AND ", req.body
        
            
        let search = await database.any(
            `SELECT * FROM created_workshops JOIN workshop_skills ON created_workshops.id = workshop_skills.workshop_id
            JOIN users ON created_workshops.user_id = users.id
            WHERE (${categoriesQuery}) AND (created_workshops.title LIKE $1 OR created_workshops.descriptions LIKE $1
            OR workshop_skills.skills LIKE $1) AND
            (created_workshops.start_time >= $2 AND created_workshops.end_time <= $3) 
            ORDER BY created_workshops.start_time`,
            [`%${req.body.search}%`, req.body.startDate, req.body.endDate]
            );
            
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