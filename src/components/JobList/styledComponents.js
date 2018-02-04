import styled from 'styled-components'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'




export const StyledCard = styled(Card)`
    && {
        display: flex;
        padding: 20px;
        cursor: pointer;

        h3 {
            font-size: 1.2em;
            font-weight: 600;
        }

        h4 {
            font-size: 0.9em;
        }

        &:hover {
            background: #e8e8e8;
        }
    }
`

export const StyledCardContent = styled(CardContent) `
    && {
        display: flex;
        padding: 20px 0 0 0 !important ;

        > span {
            margin-right: 30px;
        }
    }
`

export const IconTag = styled(Typography) `
    && {
        display: flex;
        align-items: center;
        font-size: 13px;    

        span {
            margin-right: 5px;
            font-size: 13px
        }
    }
`

export const Container = styled(CardContent) `
    && {
        padding: 0px 0 0 20px !important;
    }
`

export const StyledCardMedia = styled(CardMedia)`
    && {
        height: 100px;
        width: 100px;
        background: #f8f8f8;
    }
`

export const Box = styled.div `
    max-width: 680px;
    width: 100%;
`