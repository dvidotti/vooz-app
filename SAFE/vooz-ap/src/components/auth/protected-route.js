import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const protectedRoute  = ({component: Component, user, ...rest}) => {
  return (
      <Route
      {...rest}
      render={ props  => {
        console.log('>>>USER<<<', user)
        if(user){
          console.log('>>>>>>>>>>>PROTECTED', {component: Component, user, ...rest})
              return <Component {...rest }  loggedInUser={user}/>
            } else {
              return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}
export default protectedRoute;