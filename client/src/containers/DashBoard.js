import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import * as taskActions from '../store/actions/tasks.actions'
import { changePassword } from '../store/actions/actions'
import ChangePass from '../components/ChangePass';

import TodoApp from './TodoApp';


const DashBoard = (props) => {

    return (
        <div>
            <Header />
            <ChangePass props={props} />
            <TodoApp />
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        user: state.auth.user,
        tasks: state.tasks,
    }
}


export default connect(mapStateToProps, { ...taskActions, changePassword, TodoApp })(DashBoard)