import React from 'react'
import _ from 'lodash'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import { rangeDays } from '../../Utils/helper'
import { withRouter } from 'react-router-dom'
import {
    StyledCard,
    StyledCardContent,
    IconTag,
    Container,
    StyledCardMedia,
    Box
} from './styledComponents'


/**
 * stateless functional component
 * which renders a list of jobs
 * 
 * @param {any} props 
 * @returns 
 */
function JobList(props) {

    /**
     * goes to detail job page
     * 
     * @param {integer} id 
     */
    function showJobDetail (id) {
        props.history.push(`/${id}`);
    }

    /**
     * render each job from job list
     * 
     * @param {array of objects} jobs 
     * @returns jsx
     */
    function renderJobOpportunity (jobs) {
        return jobs.map(job => {
            return (
                <StyledCard key={job.id} onClick={ () => showJobDetail(job.id) } >
                    <StyledCardMedia
                        image="http://lorempixel.com/100/100"
                    />
                    <Container component='div' >
                        <Typography component='h3' >{job.title}</Typography>
                        <Typography component='h4'>{job.company}</Typography>
                        <StyledCardContent component='div' >
                            <IconTag component='span'><Icon>location_on</Icon> {job.location}</IconTag>
                            <IconTag component='span'><Icon>access_time</Icon> {job.workSchedule}</IconTag>
                            <IconTag component='span'><Icon>date_range</Icon> {rangeDays(job.date)}</IconTag>
                        </StyledCardContent>
                    </Container>
                </StyledCard>
            )
        })
    }

    if(!_.isEmpty(props.jobs)) {
        return (
            <Box>
                { renderJobOpportunity(props.jobs) }
            </Box>
        )
    } else {
        return null
    } 
}

export default withRouter(JobList)