import React, {useState, useEffect} from 'react';
import './login.scss';
import Layout from '../../components/Layout/layout';
import Button from '../../components/Button/button';
import CustomInput from '../../components/CustomInput/CustomInput';
import Link from 'next/link';
import * as userActions from '../../redux/actions/user_actions';
import { connect } from 'react-redux';
import SideAuth from '../../components/SideAuth/sideAuth';


const Login = (props) => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        props.dispatch(userActions.login(username,password));
        
    }

    const handleUsername = (e) => {
        let updatedUsername = e.currentTarget.value;
        setUsername(updatedUsername);
    }

    const handlePassword = (e) => {
        let updatedPassword = e.currentTarget.value;
        setPassword(updatedPassword);
    }
    return (
        <Layout>
            <main className="block_auth">
                <div className="wrapper">
                    <div className="inner">
                        <SideAuth current="login"/>
                        <div className="form_block">
                            <h2 className="form_title">Connexion</h2>
                                <form onSubmit={(e) => handleSubmit(e)} className="form">
                                    <CustomInput placeholder="Identifiant" handleChange={handleUsername} />
                                    <CustomInput placeholder="Mot de passe"   handleChange={handlePassword} />
                                    <Button type="submit" color="#FFC30B" text="Connexion" borderColor="#FFC30B" />
                                </form>
                                <Link href="/forget">
                                    <a style={{color: 'black'}}> <p className="password_lost">Mot de passe oublié ?</p> </a>
                                </Link>
                            

                            <p className="link_other">Vous n'avez pas encore de compte ? <Link href="/register"><a>Inscrivez-vous !</a></Link></p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
      )
}

export default connect(state=>state)(Login)
