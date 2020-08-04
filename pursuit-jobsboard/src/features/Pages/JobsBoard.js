import React from 'react'

import JobsSearchForm from '../JobsBoard/JobsSearchForm'
import JobsSearchSort from '../JobsBoard/JobsSearchSort'
import JobsSearchFilter from '../JobsBoard/JobsSearchFilter'
import JobsPostFeed from '../JobsBoard/JobsPostFeed'

const JobsBoard = () => {


    return (
        <div>
            <JobsSearchForm />
            <JobsSearchSort />
            <JobsSearchFilter />
            <JobsPostFeed />
        </div>
    )
}

export default JobsBoard;
