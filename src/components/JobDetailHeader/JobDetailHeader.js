import React from 'react'
import Icon from 'material-ui/Icon'
import { rangeDays } from '../../Utils/helper'
import {
    StyledCardContent,
    IconTag,
    StyledCardMedia,
    Container,
    Title,
    Header,
} from './styledComponents' 

/**
 * stateless functional components
 * which renders some resume informations
 * about one job 
 * 
 * @param {object} props 
 * @returns 
 */
function JobDetailHeader (props) {

    if( props.job ) {

        const { job } = props

        return (
            <Header>
                <StyledCardMedia
                    image="http://lorempixel.com/100/100"
                />
                <Container component='div' >
                    <Title component='h3' >{job.title}</Title>
                    <StyledCardContent component='div' >
                        <IconTag component='span'><Icon>location_on</Icon> {job.location}</IconTag>
                        <IconTag component='span'><Icon>access_time</Icon> {job.workSchedule}</IconTag>
                        <IconTag component='span'><Icon>date_range</Icon> {rangeDays(job.date)}</IconTag>
                    </StyledCardContent>
                </Container>
            </Header>
        )    
        
    } else {
        return null
    } 
}

export default JobDetailHeader