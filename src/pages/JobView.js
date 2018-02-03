import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobDetail from '../components/JobDetail' 
import JobDetailHeader from '../components/JobDetailHeader' 
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import Button from 'material-ui/Button/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import styled from 'styled-components';


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


class JobView extends Component {

    constructor() {
        super()
        this.state = { job: {} } 
    }

    componentDidMount() {
        let { id } = this.props.match.params,
            job
                    
        job = this.props.jobs[id]

        this.setState({job})
    }

    render() {

        let { job } = this.state
        
        if(!_.isEmpty(job)) {
            return (
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
                                    > 
                                        Apply Now
                                    </Button> 
                                </CardActions>
                            </ApplyCard>
                        </Grid>
                    </Grid>
                </div>
            )
        }

        return null
    }
    

}

const mapStateToProps = ({ jobs }) => ({ 
    jobs: jobs.jobs
})

export default connect(mapStateToProps)(JobView)


