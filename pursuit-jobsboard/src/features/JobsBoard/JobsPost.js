import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { selectJobsPostsSearchFilter } from './JobsPostsFeedFilterSelector'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '60%',
    },
    media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    },
    expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
    transform: 'rotate(180deg)',
    },
    avatar: {
    backgroundColor: red[500],
    },
}));

const JobsPost = ( { jobsPost } ) => {
    
    const filteredJobsPosts = useSelector(selectJobsPostsSearchFilter)

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    useEffect( () => {
        setExpanded(false)
    }, [filteredJobsPosts])

    const pad = (value) => value.toString().length === 1 ? `0${value}` : value
    const dateFormatter = (date) => {
        let formattedDate = new Date(date)
        let year = pad(formattedDate.getFullYear())
        let month = pad(formattedDate.getMonth() + 1)
        let day = pad(formattedDate.getDate())
        return `${year}-${month}-${day}`
    }


    return (
    <Card className={classes.root}>
        <CardHeader
        avatar={
            <Avatar aria-label="user" className={classes.avatar}>{jobsPost.profile_image}</Avatar>
        }
        title={ 
            <Typography>
                <a href={jobsPost.job_link} target="_blank">{jobsPost.job_title}</a>
            </Typography>
        }
        subheader={
            <>
            <Typography>{`Posted: ${dateFormatter(jobsPost.posted)}`}</Typography>
            <Typography>{`Job Closing Date: ${dateFormatter(jobsPost.job_closingdate)}`}</Typography>
            </>
        }
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="Save Job">
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share Job">
            <ShareIcon />
        </IconButton>
        <IconButton
            className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>{jobsPost.job_description}</Typography>
        </CardContent>
        </Collapse>
    </Card>
    );
}

export default JobsPost