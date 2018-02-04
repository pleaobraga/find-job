import React from 'react'
import _ from 'lodash'
import {
    Container,
    Title,
    Text,
    StyledPaper,
    List
} from './styledComponents'

/**
 * stateless functional component
 * which renders a single job detail  
 * 
 * @param {object} props 
 * @returns 
 */
function JobDetail(props) {

    /**
     * render the job detail description  
     * 
     * @param {object} description 
     * @returns jsx
     */
    function renderDescription(description) {
        return description.type === 'text' 
            ? renderText(description)
            : renderList(description)
    }


    /**
     * render each topic from a job
     * 
     * @param {array objects} topics 
     * @returns 
     */
    function renderTopics(topics) {
        return topics.map( topic => {
            return topic.type === 'text' 
            ? renderText(topic)
            : renderList(topic)
        })
    }



    /**
     * render a title and 
     * a unnumbered list
     * 
     * @param {object} section 
     * @returns 
     */
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

    
    /**
     * render a tile and a paragraph
     * 
     * @param {object} section 
     * @returns 
     */
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