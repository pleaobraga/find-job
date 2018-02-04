import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import styled from 'styled-components'


export const Container = styled.div `
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
`

export const Title = styled(Typography) `
    && {
        font-size: 1.0em;
        font-weight: 600;
        margin: 10px 0
    }
`

export const Text = styled(Typography) `
    && {
        font-size: 0.9em;
    }
`

export const StyledPaper = styled(Paper) `
    && {
        padding 20px;
    }
`

export const List = styled.ul `
    margin: 10px 0px;
`