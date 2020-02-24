import React, { Component, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout/layout';
import { connect } from 'react-redux';
import '../profile.scss'

const Profile = (props) => {

    const router = useRouter()
    const { id } = router.query
    const [userId,setUserId] = useState(id)

   
        
    return(
        <Layout>
            <main className="block_profile">

                <div className="profile_header">
                    <div className="wrapper">

                        <div className="user_info">
                            <img src="/assets/IMG_2707.png" />
                        </div>
                    </div>
                </div>

                <div className="wrapper">

                </div>
            </main>
        </Layout>
    );
}




export default connect(state=>state)(Profile)