import React from "react";
import {connect} from "react-redux";

const Page = props => {
    console.log(props)
    return(
        <div>
            <div>Prop from about {props.foo}</div>
            <div>Prop from getInitialProps {props.custom}</div>
            <p onClick={() => props.dispatch({type: 'FOO', payload: '456'})}>essaye moi</p>
        </div>
    )
}

Page.getInitialProps = ({store, isServer, pathname, query}) => {
    
    store.dispatch({type: 'FOO', payload: 'foo'}); // The component can read from the store's state when rendered
    return {custom: 'yes'}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Page);