import React, {useState} from 'react';
import './register.scss';
import Layout from '../../components/Layout/layout';
import Button from '../../components/Button/button';
import CustomInput from '../../components/CustomInput/CustomInput';
import Link from 'next/link';
import { connect } from 'react-redux';
import SideAuth from '../../components/SideAuth/sideAuth'
import * as userActions from '../../redux/actions/user_actions';


const Register = (props) => {

    const [type,setType] = useState('');
    const [prenom,setPrenom] = useState('');
    const [nom,setNom] = useState('');
    const [password,setPassword] = useState('');
    const [doublePassword,setDoublePassword] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [company,setCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email,
            password,
            username,
            type
        }
        type === 'user' ? 
        user = {prenom,nom,...user}
        :
        user = {company,...user}
        ;
        console.log(user);
        props.dispatch(userActions.register(user));
    }

    const handleTypeChange = () => {
        type === 'user' ? setType('company') : setType('user');
    }

    const handleUsername = (e) => {
        let updatedUsername = e.currentTarget.value;
        setUsername(updatedUsername);
    }

    const handlePrenom = (e) => {
        let updatedPrenom = e.currentTarget.value;
        setPrenom(updatedPrenom);
    }

    const handlePassword = (e) => {
        let updatedPassword = e.currentTarget.value;
        setPassword(updatedPassword);
    }

    const handleDoublePassword = (e) => {
        let updatedDoublePassword = e.currentTarget.value;
        setDoublePassword(updatedDoublePassword);
    }

    const handleNom = (e) => {
        let updatedNom = e.currentTarget.value;
        setNom(updatedNom);
    }

    const handleEmail = (e) => {
        let updatedEmail = e.currentTarget.value;
        setEmail(updatedEmail);
    }

    const handleCompany = (e) => {
        let updatedCompany = e.currentTarget.value;
        setCompany(updatedCompany);
    }


    return (
        <Layout>
            { type === '' ?
            <div>
                <div className="block_title">
                    <h2>Inscription</h2>
                </div>
                <div className="block_choice">
                    <h2>Vous êtes...</h2>
                    <div className="wrapper">
                        <div className="block_particulier" onClick={() => setType('user')}>
                            <p>UN PARTICULIER</p>
                            <span>S'inscrire</span>
                        </div>
                        <div className="block_entreprise" onClick={() => setType('company')}>
                            <p>UNE ENTREPRISE</p>
                            <span>S'inscrire</span>
                        </div>
                    </div>
                </div>
            </div>
            : 
            <main className="block_auth">
                <div className="wrapper">
                    <div className="inner">
                        <SideAuth current="register"/>
                        <div className="form_block">
                            <h2 className="form_title">Inscription</h2>
                                    <div>
                                        <form onSubmit={(e) => handleSubmit(e)} className="form">
                                            {type === 'user' ?
                                                <div style={{display: 'flex',flexFlow: 'row nowrap',justifyContent: 'space-between',width: "73%"}}>
                                                    <CustomInput placeholder="Nom" width="42%" handleChange={handleNom}/>
                                                    <CustomInput placeholder="Prenom" width="42%" handleChange={handlePrenom}/>
                                                </div>
                                             : type === 'company' ?   
                                                <CustomInput placeholder="Nom de l'entreprise"  handleChange={handleCompany}/>
                                            : false }
                                            <CustomInput placeholder="Identifiant"  handleChange={handleUsername}/>
                                            <CustomInput placeholder="Mail"  handleChange={handleEmail}/>
                                            <CustomInput placeholder="Mot de passe"  handleChange={handlePassword}/>
                                            <CustomInput placeholder="Confirmer mot de passe"  handleChange={handleDoublePassword}/>
                                            <Button type="submit" color="#FFC30B" text="Inscription" borderColor="#FFC30B" />
                                        </form>
                                        <p className="password_lost" onClick={handleTypeChange} style={{textDecoration: 'underline', cursor: 'pointer'}} >{type === 'user' ? 'Je suis une compagnie' : 'Je suis un particulier'} </p>
                                    </div>
                            <p className="link_other">Vous possédez déjà un compte ?<Link href="/login"><a> Connectez-vous !</a></Link></p>
                        </div>
                    </div>
                </div>
            </main>
        }   
        </Layout>
      )
}

export default connect(state=>state)(Register)
