import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import { rangeDays } from '../Utils/helper'
import { withRouter } from 'react-router-dom'



const StyledCard = styled(Card)`
    && {
        display: flex;
        padding: 20px;
        cursor: pointer;

        h3 {
            font-size: 1.2em;
            font-weight: 600;
        }

        h4 {
            font-size: 0.9em;
        }

        &:hover {
            background: #e8e8e8;
        }
    }
`

const StyledCardContent = styled(CardContent) `
    && {
        display: flex;
        padding: 20px 0 0 0 !important ;

        > span {
            margin-right: 30px;
        }
    }
`

const IconTag = styled(Typography) `
    && {
        display: flex;
        align-items: center;
        font-size: 13px;    

        span {
            margin-right: 5px;
            font-size: 13px
        }
    }
`

const Container = styled(CardContent) `
    && {
        padding: 0px 0 0 20px !important;
    }
`

const StyledCardMedia = styled(CardMedia)`
    && {
        height: 100px;
        width: 100px;
        background: #f8f8f8;
    }
`

const Box = styled.div `
    max-width: 680px;
    width: 100%;
`

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