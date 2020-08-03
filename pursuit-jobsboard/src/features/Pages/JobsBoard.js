import React from 'react'

import { useScript } from '../../utilitron/CustomHookery'
import JobsSearchForm from '../JobsBoard/JobsSearchForm'
import JobsPostFeed from '../JobsBoard/JobsPostFeed'

const JobsBoard = () => {
    
    const {REACT_APP_GOOGLEMAPS_APIKEY} = process.env
    const [googleMapsAPIScriptLoaded, googleMapsAPIScriptError] = useScript(`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLEMAPS_APIKEY}&libraries=places`)

    console.log(googleMapsAPIScriptError)
    console.log(googleMapsAPIScriptLoaded)


    return (
        <div>
            <JobsSearchForm />
            <JobsPostFeed />
        </div>
    )
}

export default JobsBoard;
