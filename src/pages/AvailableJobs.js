import React, { Component } from 'react'
import connect from 'react-redux'


class AvailableJobs extends Component {

    

    

}

mapStateToProps = ({ jobs }) => ({ jobs })

mapDispatchToProps = dispatch => ({
    getAllJobs: () => dispatch(actions.getAllJobs())
})

export default AvailableJobs