import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobDetail from '../../components/JobDetail/JobDetail' 
import JobDetailHeader from '../../components/JobDetailHeader/JobDetailHeader' 
import * as actions from '../../actions'
import CardActions from 'material-ui/Card/CardActions'
import CardContent from 'material-ui/Card/CardContent'
import Button from 'material-ui/Button/Button'
import Grid from 'material-ui/Grid'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import {
    ApplyCard,
    Title,
    Loader,
    Container
} from './styledComponents'


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
                    <ErrorMessage error={this.props.jobs.errorMessage} />
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


