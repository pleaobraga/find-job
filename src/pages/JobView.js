import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobDetail from '../components/JobDetail' 
import JobDetailHeader from '../components/JobDetailHeader' 
import * as actions from '../actions'
import Card from 'material-ui/Card/Card'
import CardActions from 'material-ui/Card/CardActions'
import CardContent from 'material-ui/Card/CardContent'
import Button from 'material-ui/Button/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
import { CircularProgress } from 'material-ui/Progress'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'



const ApplyCard = styled(Card)`
    && {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
    }
`

const Title = styled(Typography)`
    && {
        font-size: 1.1em;
        text-transform: uppercase;
        font-weight: 600;
    }
`

const Loader = styled(CircularProgress) `
    && {
        margin-top: 60px
    }
`

const Container = styled.div `
    && {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

/**
 * class which renders the 
 * job detail page
 * 
 * @class JobView
 * @extends {Component}
 */
class JobView extends Component {

    constructor() {
        super()
        this.state = { job: {} } 
    }

    componentDidMount() {
        let { id } = this.props.match.params                  
        this.props.getJob(id)
    }


    /**
     * returns to home page
     * 
     * @memberof JobView
     */
    backToHome () {
        this.props.history.push(`/`);
    }

    render() {

        let { 
            job, 
            fetching, 
            error 
        } = this.props.jobs

        return(
            <Container>
                {
                    fetching &&
                     <Loader size={50} />
                }
                {
                    !fetching && !_.isEmpty(job) &&
                    <div>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <JobDetailHeader job={job} />
                            </Grid>
                            <Grid item sm={8}>
                                <JobDetail job={job} />
                            </Grid>
                            <Grid item sm={4}>
                                <ApplyCard>
                                    <CardContent> 
                                        <Title>Apply for this job</Title> 
                                    </CardContent>
                                    <CardActions>
                                        <Button 
                                            raised 
                                            color="secondary" 
                                            size="large"
                                            onClick={() => this.backToHome()}
                                        > 
                                            Apply Now
                                        </Button> 
                                    </CardActions>
                                </ApplyCard>
                            </Grid>
                        </Grid>
                    </div>
                }
                {
                    !fetching && error && 
                    <ErrorMessage error={this.props.errorMessage} />
                }
            </Container>
        )
    }
}

const mapStateToProps = ({ jobs }) => ({ jobs })

const mapDispatchToProps = dispatch => ({
    getJob: (id) =>  dispatch(actions.getJob(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobView))


