import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobDetail from '../components/JobDetail' 


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
                    <JobDetail job={job} />
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


