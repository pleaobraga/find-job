import Paper from 'material-ui/Paper/Paper'
import Typography from 'material-ui/Typography'
import styled from 'styled-components'


export const MessageBlock = styled(Paper)`
    && {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`

export const Title = styled(Typography)`
    && {
        font-size: 1.4em;
        font-weight: 600;
        margin-bottom: 20px;
    }
`

export const Message = styled(Typography)`
    && {
        font-size: 1.0em;
        text-align: center;
    }
`