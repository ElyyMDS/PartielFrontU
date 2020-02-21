import React from "react";
import {connect} from "react-redux";
import Layout from '../../components/Layout/layout';
import * as action from '../../redux/actions/user_actions';

const Page = props => {
    return(
        <Layout>
            <div>Prop from getInitialProps {props.custom}</div>
            <p onClick={() => props.dispatch(action.register('jao_izumu','123','jao@gmail.com'))}>essaye moi</p>
        </Layout>
    );
}

Page.getInitialProps = ({store, isServer, pathname, query}) => {

    return {custom: 'custom'}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Page);