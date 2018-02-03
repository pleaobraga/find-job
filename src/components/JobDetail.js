import React from 'react'
import _ from 'lodash'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import styled from 'styled-components'


const Container = styled.div `
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
`

const Title = styled(Typography) `
    && {
        font-size: 1.0em;
        font-weight: 600;
        margin: 10px 0
    }
`

const Text = styled(Typography) `
    && {
        font-size: 0.9em;
    }
`

const StyledPaper = styled(Paper) `
    && {
        padding 20px;
    }
`

const List = styled.ul `
    margin: 10px 0px;
`

function JobDetail(props) {

    function renderDescription(description) {
        return description.type === 'text' 
            ? renderText(description)
            : renderList(description)
    }

    function renderTopics(topics) {
        return topics.map( topic => {
            return topic.type === 'text' 
            ? renderText(topic)
            : renderList(topic)
        })
    }

    function renderList(section) {
        return (
            <Container key={section.title} >
                { 
                    !_.isEmpty(section.title) && 
                    <Title component='h3' >{section.title}</Title> 
                }
                { 
                    <List>
                        { section.content.map(info => {
                            return <li key={info} >{info}</li>
                        }) } 
                    </List>
                }
            </Container>
        )
    }

    function renderText(section) {
        return (
            <Container key={section.title} >
                { 
                    !_.isEmpty(section.title) && 
                    <Title component='h3' >{section.title}</Title> 
                }
                { 
                    !_.isEmpty(section.content) && 
                    <Text component='p' >{section.content}</Text> 
                }
            </Container>
        )
    }

    if(props.job) {
        return (
            <StyledPaper>
                { renderDescription(props.job.description) }
                { renderTopics(props.job.topics) }
            </StyledPaper>
        )
    } 
    
    return null
}

export default JobDetail