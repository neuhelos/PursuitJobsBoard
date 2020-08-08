import React from 'react'

import JobsSearchForm from '../JobsBoard/JobsSearchForm'
import JobsSearchFilter from '../JobsBoard/JobsSearchFilter'
import JobsPostFeed from '../JobsBoard/JobsPostFeed'

const JobsBoard = () => {


    return (
        <div>
            <JobsSearchForm />
            <JobsSearchFilter/>
            <JobsPostFeed />
        </div>
    )
}

export default JobsBoard;
