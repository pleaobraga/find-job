import { CircularProgress } from 'material-ui/Progress'
import Card from 'material-ui/Card/Card'
import Typography from 'material-ui/Typography'

import styled from 'styled-components'



export const ApplyCard = styled(Card)`
&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
}
`

export const Title = styled(Typography)`
&& {
    font-size: 1.1em;
    text-transform: uppercase;
    font-weight: 600;
}
`

export const Loader = styled(CircularProgress) `
&& {
    margin-top: 60px
}
`

export const Container = styled.div `
&& {
    display: flex;
    align-items: center;
    justify-content: center;
}
`