import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import JobList from '../components/JobList'
import styled from 'styled-components'
import ErrorMessage from '../components/ErrorMessage'


const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1 `
    font-size: 2.5em;
`

const Loader = styled(CircularProgress) `
    && {
        margin-top: 60px
    }
`

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
                    <ErrorMessage error={this.props.errorMessage} />
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