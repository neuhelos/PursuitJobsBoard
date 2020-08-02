-- DROP DATABASE IF EXISTS pursuitjobsboard;
-- CREATE DATABASE pursuitjobsboard;

-- \c pursuitjobsboard;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS savedjobs;
DROP TABLE IF EXISTS appliedjobs;

CREATE TABLE users  (
    id VARCHAR PRIMARY KEY NOT NULL,
    email VARCHAR NOT NULL UNIQUE NOT NULL,
    preferred_name VARCHAR,
    profile_image VARCHAR,
    linkedin_link VARCHAR,
    github_link VARCHAR
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    posted TIMESTAMPTZ DEFAULT NOW(),
    job_title VARCHAR,
    job_link VARCHAR UNIQUE,
    job_description VARCHAR,
    job_location VARCHAR,
    job_type TEXT,
    remote_status TEXT,
    job_closingdate TIMESTAMPTZ,
    user_id VARCHAR REFERENCES users(id)
);

CREATE TABLE savedjobs (
    id serial Primary Key,
    users_id VARCHAR REFERENCES users(id),
    jobs_id VARCHAR REFERENCES jobs(id) ON DELETE CASCADE
);

CREATE TABLE appliedjobs (
    id serial Primary Key,
    users_id VARCHAR REFERENCES users(id),
    jobs_id VARCHAR REFERENCES jobs(id) ON DELETE CASCADE
);

INSERT INTO users (id, email, preferred_name, profile_image, linkedin_link, github_link)
    VALUES 
    ('9kpHHly62nOnVvEGHPSOnAP55og1','guest@nilber.dev', 'Guest', 'https://pursuitjobsboard.herokuapp.com/ImageUploads/Guest_Avatar.jpg', 'www.linkedin.com', 'www.github.com');

INSERT INTO jobs (id, posted, job_title, job_link, job_description, job_location, job_type, remote_status, job_closingdate)
    VALUES
    ()