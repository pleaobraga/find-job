import React, { Component } from 'react'
import connect from 'react-redux'
import * as actions from '../actions'


class AvailableJobs extends Component {
    
    componentDidMount() {
        this.props.getAllJobs()
    }


    render() {

        let {  }

    }

    

}

mapStateToProps = ({ jobs }) => ({ jobs })

mapDispatchToProps = dispatch => ({
    getAllJobs: () => dispatch(actions.getAllJobs())
})

export default connect(mapStateToProps, mapDispatchToProps)(AvailableJobs)