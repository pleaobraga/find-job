import React from 'react'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import _ from 'lodash'

const Container = styled.div `
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
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
            ? renderText(description)
            : renderList(description)
        })
    }

    function renderList() {

    }

    function renderText(section) {
        <Container>
            { 
                !_.isEmpty(section.title) && 
                <Typography component='h3' >{section.title}</Typography> 
            }
            { 
                !_.isEmpty(section.content) && 
                <Typography component='p' >{section.content}</Typography> 
            }
        </Container>
    }

    if(props.job) {
        <Paper>
            <Typography></Typography>
        </Paper>
    } else {
        return null
    }

}