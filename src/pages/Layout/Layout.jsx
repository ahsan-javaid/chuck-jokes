import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header';

const Layout = (props) => {
    return (
        <React.Fragment>
          <Header></Header>
          <div>
            {props.children}
          </div>
        </React.Fragment>
    )
}

export default withRouter(Layout);
