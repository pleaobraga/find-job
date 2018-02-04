import { CircularProgress } from 'material-ui/Progress'
import styled from 'styled-components'


export const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1 `
    font-size: 2.5em;
`

export const Loader = styled(CircularProgress) `
    && {
        margin-top: 60px
    }
`