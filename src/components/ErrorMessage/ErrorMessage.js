import React from 'react'
import {
    MessageBlock,
    Title,
    Message
} from './styledComponents'


/**
 * stateless functional components
 * which renders a error message  
 * 
 * @param {object} props 
 * @returns 
 */
function ErrorMessage(props) {

    if(props.error) {

        return (
            <MessageBlock>
                <Title>An Error Has Occurred</Title>
                <Message> 
                    { props.error.stack } 
                </Message>
            </MessageBlock>
        )
    }

    return null

}

export default ErrorMessage