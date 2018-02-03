import React from 'react'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import styled from 'styled-components'
import { rangeDays } from '../Utils/helper'



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
        background: #abaaaa;
        padding: 2px 7px;
        border-radius: 4px;

        span {
            margin-right: 5px;
            font-size: 13px
        }
    }
`

const StyledCardMedia = styled(CardMedia)`
    && {
        height: 100px;
        width: 100px;
        background: #f8f8f8;
        margin: auto;
    }
`

const Container = styled(CardContent) `
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0 0 0 !Important;
    }
`

const Title = styled(Typography) `
    && {
        font-size: 1.5em;
        font-weight: 600;
    }
`

const Header = styled(Card) `
    && {
        padding: 20px;
        background: #B2EBF2;
    }
`

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