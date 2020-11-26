import React from 'react';
import { Route } from "react-router-dom";
import GuestWrap from '../containers/GuestWrap';

const Guest = ({component:Component,...rest}) => {
return(
    <Route  {...rest} render={routeProps => (

        <GuestWrap>
            <Component {...routeProps} />
        </GuestWrap>
       
    )
    }
  /> 
)
}

export default Guest