import React, { Component, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import '../tips.scss';
import Layout from '../../../components/Layout/layout';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';

const TipsDetails = (props) => {

    const router = useRouter();
    const { id } = router.query;
    const [tipsId,setTipsId] = useState(id);
    
    return (
        <Layout>
            {tipsId}
        </Layout>
    )
}

TipsDetails.getInitialProps = ({store, isServer, pathname, query}) => {

    return {isServer}; // You can pass some custom props to the component from here
}

export default connect(state => state)(TipsDetails);