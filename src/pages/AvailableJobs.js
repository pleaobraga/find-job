import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField';
import JobList from '../components/JobList'


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
            <div>
                {   
                    fetching && 
                    <CircularProgress size={50} />
                }
                <JobList jobs={jobs} />
            </div>
        )


    }

    

}

const mapStateToProps = ({ jobs }) => ({ jobs })

const mapDispatchToProps = dispatch => ({
    getAllJobs: () => dispatch(actions.getAllJobs())
})

export default connect(mapStateToProps, mapDispatchToProps)(AvailableJobs)