import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import TextField from 'material-ui/TextField'
import JobList from '../../components/JobList/JobList'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import {
    Container,
    Title,
    Loader
} from './styledComponents'


/**
 * class which is a home page
 * and renders all jobs 
 * 
 * @class AvailableJobs
 * @extends {Component}
 */
class AvailableJobs extends Component {
    
    componentDidMount() {
        this.props.getAllJobs()
    }

    render() {
        let { 
            fetching,
            jobs,
            error 
        } = this.props.jobs

        return (
            <Container>
                <Title>Available Jobs</Title>
                {   
                    fetching && 
                    <Loader size={50} />
                }
                {   
                    !fetching && !error &&
                    <JobList jobs={jobs} />
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
    getAllJobs: () => dispatch(actions.getAllJobs())
})

export default connect(mapStateToProps, mapDispatchToProps)(AvailableJobs)