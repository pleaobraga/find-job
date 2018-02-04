import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import styled from 'styled-components'

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
        background: #abaaaa;
        padding: 2px 7px;
        border-radius: 4px;

        span {
            margin-right: 5px;
            font-size: 13px
        }
    }
`

export const StyledCardMedia = styled(CardMedia)`
    && {
        height: 100px;
        width: 100px;
        background: #f8f8f8;
        margin: auto;
    }
`

export const Container = styled(CardContent) `
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0 0 0 !Important;
    }
`

export const Title = styled(Typography) `
    && {
        font-size: 1.5em;
        font-weight: 600;
    }
`

export const Header = styled(Card) `
    && {
        padding: 20px;
        background: #B2EBF2;
    }
`