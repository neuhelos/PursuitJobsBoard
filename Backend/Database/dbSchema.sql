DROP DATABASE IF EXISTS pursuitjobsboard;
CREATE DATABASE pursuitjobsboard;

\c pursuitjobsboard;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS savedjobs;
DROP TABLE IF EXISTS appliedjobs;

CREATE TABLE users  (
    id VARCHAR PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    preferredname VARCHAR,
    profile_image VARCHAR,
    linkedin_link VARCHAR,
    github_link VARCHAR
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    posted TIMESTAMPTZ DEFAULT NOW(),
    jobs_title VARCHAR,
    jobs_link VARCHAR UNIQUE,
    jobs_description VARCHAR,
    job_location VARCHAR,
    job_type TEXT,
    remote_status TEXT,
    job_closingdate DATE,
    user_id VARCHAR REFERENCES users(id)
);

CREATE TABLE savedjobs (
    id serial Primary Key,
    users_id VARCHAR REFERENCES users(id),
    jobs_id INT REFERENCES jobs(id) ON DELETE CASCADE
);

CREATE TABLE appliedjobs (
    id serial Primary Key,
    users_id VARCHAR REFERENCES users(id),
    jobs_id INT REFERENCES jobs(id) ON DELETE CASCADE
);