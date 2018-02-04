import React from 'react'
import Paper from 'material-ui/Paper/Paper'
import Typography from 'material-ui/Typography'
import styled from 'styled-components'


const MessageBlock = styled(Paper)`
    && {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`

const Title = styled(Typography)`
    && {
        font-size: 1.4em;
        font-weight: 600;
        margin-bottom: 20px;
    }
`

const Message = styled(Typography)`
    && {
        font-size: 1.0em;
        text-align: center;
    }
`

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