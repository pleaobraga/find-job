import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'


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
        padding: 10px 0 0 0 !important ;

        span {
            display: flex;
            align-items: center;
            margin-right: 5px;
            font-size: 13px;
        }

        > span {
            margin-right: 30px;
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
`;

const Box = styled.div `
    max-width: 750px;
    width: 100%;
`


function JobList(props) {

    function renderJobOpportunity (jobs) {
        return jobs.map(job => {
            return (
                <StyledCard key={job.id} >
                    <StyledCardMedia
                        image="http://lorempixel.com/100/100"
                    />
                    <Container component='div' >
                        <Typography component='h3' >{job.title}</Typography>
                        <Typography component='h4'>{job.company}</Typography>
                        <StyledCardContent component='div' >
                            <Typography component='span'><Icon>location_on</Icon> {job.location}</Typography>
                            <Typography component='span'><Icon>access_time</Icon> {job.workSchedule}</Typography>
                            <Typography component='span'><Icon>date_range</Icon> {job.date}</Typography>
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

export default JobList