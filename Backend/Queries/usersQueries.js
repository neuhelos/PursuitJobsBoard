const db = require("../Database/database");

const getUser = async (req, res) => {

  try {
    let user = await db.one(
      "SELECT * FROM users WHERE id = $1",
      req.params.id
    );
    res.status(200).json({
      status: "Success",
      message: "User Retrieved",
      payload: user
    });
  } catch (err) {
    res.status(404).json({
      status: err,
      message: "User Not Found"
    });
  }
};

const createUser = async (req, res) => {
  try {
    let newUser = await db.one(
      "INSERT INTO users (id, email, preferred_name, profile_image, linkedin_link, github_link) VALUES(${id}, ${email}, ${preferred_name}, ${profile_image}, ${linkedin_link}, ${github_link}) RETURNING *",
      req.body
    );
    res.status(200).json({
      status: "success",
      message: "New User Created",
      payload: newUser
    });
  } catch (error) {
    res.status(404).json({
      status: error,
      message: "User Creation Failed",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await db.none("DELETE FROM users WHERE id = $1", req.params.id);
    res.status(200).json({
      status: "Success",
      message: "User Deleted"
    });
  } catch (error) {
    res.status(404).json({
      status: error,
      message: "User Deletion Failed"
    });
  }
};


module.exports = {
    getUser,
    createUser,
    deleteUser,
};
