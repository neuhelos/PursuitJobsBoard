DROP DATABASE IF EXISTS pursuitjobsboard;
CREATE DATABASE pursuitjobsboard;

\c pursuitjobsboard;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS savedjobs;
DROP TABLE IF EXISTS appliedjobs;

CREATE TABLE users  (
    id VARCHAR PRIMARY KEY NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    preferred_name VARCHAR,
    profile_image VARCHAR,
    linkedin_link VARCHAR,
    github_link VARCHAR
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    posted TIMESTAMPTZ DEFAULT NOW(),
    job_title VARCHAR,
    company VARCHAR,
    job_link VARCHAR UNIQUE,
    job_description VARCHAR,
    job_location VARCHAR,
    job_type VARCHAR,
    remote_status VARCHAR,
    job_closingdate TIMESTAMPTZ,
    user_id VARCHAR REFERENCES users(id)
);

CREATE TABLE savedjobs (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    jobs_id INT REFERENCES jobs(id) ON DELETE CASCADE
);

CREATE TABLE appliedjobs (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    jobs_id INT REFERENCES jobs(id) ON DELETE CASCADE
);

INSERT INTO users (id, email, preferred_name, profile_image, linkedin_link, github_link)
    VALUES
    (1, 'nilberremon@pursuit.org', 'Nilber Remon', 'image', 'https://www.linkedin.com/in/nilberremon/', 'https://github.com/neuhelos')
    (2, )
    (3, )
    (4, )
    (5, )
    ('9kpHHly62nOnVvEGHPSOnAP55og1', 'guest@nilber.dev', 'Guest', 'https://pursuitjobsboard.herokuapp.com/ImageUploads/Guest_Avatar.jpg', 'www.linkedin.com', 'www.github.com');

INSERT INTO jobs (id, posted, job_title, company, job_link, job_description, job_location, job_type, remote_status, job_closingdate, user_id)
    VALUES
    (1, '2020-07-31', 'Community Fellowship', 'Code for America','https://boards.greenhouse.io/cfa/jobs/2236820?gh_src=68afcadc1us', 'Calling all technologists! Would you like to participate in a once-in-a-lifetime opportunity to grow your skills, 
    build your network, and MAKE A HUGE DIFFERENCE in your community? 
    Code for America is looking for applicants with project-related lived experience to work with local government on addressing disparities in the delivery of key government services.
    We are building four teams of three full-time paid Fellows. The teams will be focused on helping local governments work with their communities to provide permanent supportive housing and services to people experiencing homelessness, 
    make income-qualified benefits accessible through a single application, 
    and provide timely resources to justice-impacted residents. This is a 9-month program.
    We’re looking for Fellows in four regions: Adams County, CO; Fort Collins, CO; Oakland, CA; and Santa Barbara County, CA.
    Black, Indigenous, and Latinx technologists are highly encouraged to apply!', 'Oakland, CA', 
    'Full-Time', 'Temporarily Remote', '2020-08-30'),
    (2, '2020-08-01', 'Software Engineering Apprentice', 'Asana','https://boards.greenhouse.io/asana/jobs/2236571','We are looking for passionate, aspiring Software Engineers from non-traditional backgrounds to be apprentices in our AsanaUP program, a paid opportunity to gain the knowledge, tools, and skills that will allow you to thrive in the technology industry. 
    At the end of the program, based on your progress, we will consider you for a full-time Engineering role.', 'New York City, NY', 'Internship/Apprenticeship',
    'Temporarily Remote', '2020-09-30'),
    (3, '2020-07-24', 'Software Engineer 1', 'Grubhub', 'https://careers-grubhub.icims.com/jobs/10296/software-engineer-i/job', 'Grubhub is dedicated to connecting hungry diners with our 
    wide network of restaurants across the country. Our innovative technology, easy-to-use platforms and streamlined delivery capabilities make us an industry leader today, and in the future of online food ordering.',
    'New York City, NY', 'Full-Time', 'Office','2020-10-01'),
    (4, '2020-07-23', 'Junior Software Engineer', 'Able Health','https://ablehealth.com/jobs/junior-software-engineer/?utm_source=Diversify+Tech&utm_campaign=af22d17d5e-Diversify_Tech_99&utm_medium=email&utm_term=0_00b3f69566-af22d17d5e-1256484133',
    'Able Health is looking for Junior Software Engineers to build clinical care algorithms and delightful features as we rapidly scale our product and organization.',
    'San Francisco, CA', 'Full-Time','Office','2020-10-15'),
    (5, '2020-06-25', 'Software Engineer', 'Fullstack Academy', 'https://apply.workable.com/fullstackacademy/j/CCCBFAA9E5/','Fullstack Academy is looking for a Fullstack Software Engineer to build and maintain highly performant and scalable learning management systems for our web development, cybersecurity, and University partner programs. You will work closely with key stakeholders across the company — including marketing, admissions, and academics — 
    to ensure all technical needs are met, and solutions are in place as programs rapidly evolve and grow.', 'New York City, NY',
    'Full-Time', 'Temporarily Remote', '2020-10-31');

INSERT INTO savedjobs (id, user_id, jobs_id)
    VALUES
    (1, '9kpHHly62nOnVvEGHPSOnAP55og1', 1),
    (2, '9kpHHly62nOnVvEGHPSOnAP55og1', 2),
    (3, '9kpHHly62nOnVvEGHPSOnAP55og1', 4),
    (4, '9kpHHly62nOnVvEGHPSOnAP55og1', 5);

INSERT INTO appliedjobs (id, user_id, jobs_id)
    VALUES
    (1, '9kpHHly62nOnVvEGHPSOnAP55og1', 2),
    (2, '9kpHHly62nOnVvEGHPSOnAP55og1', 5);