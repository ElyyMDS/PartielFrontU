import React, { Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Layout from '../../../components/Layout/layout';
import Button from '../../../components/Button/button';
import Card from '../../../components/Card/Card';
// import IdentificationInput from '../../../components/IdentificationInput/IdentificationInput';
import '../profile.scss'

const Profile = (props) => {

    const router = useRouter();
    const { id } = router.query;
    const [userId,setUserId] = useState(id);
    const [tab,setTab] = useState('cv');
    const [file,setFile] = useState([]);
    const [postValue,setPostValue] = useState([]);
    const [modif,setModif] = useState(false);
    const [type,setType] = useState('company'); 


    const [posts,setPosts] = useState([
        {backgroundImg: "url('/assets/1.png')",like: 3025,username:'Axelle'},
        {backgroundImg: "url('/assets/2.jpg')",like: 56,username:'Axelle'},
        {backgroundImg: "url('/assets/3.jpg')",like: 325,username:'Axelle'},
        {backgroundImg: "url('/assets/4.jpg')",like: 4521,username:'Axelle'},
    ]);

    const handleSave = () => {
        setModif(false);
    }
    
    const handleNewPost = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Nouveau Post',
            html:
              '<div class="form_new_post"><div className="img_wrapper"><input id="file" style="display:none" accept="image/png, image/jpeg, image/jpg" multiple name="file" class="custom_input" type="file"><label for="file" class="custom_label">Télécharger contenu</label> </div>' +
              '<input id="swal-input1" class="custom_input" placeholder="Titre" >' +
              '<textarea id="swal-input2" class="custom_textarea" placeholder="Description"></textarea>' +
              '<input id="swal-input3" class="custom_input" placeholder="Identification">'+
              '<input id="swal-input4" class="custom_input" placeholder="Mots clés"></div>',
            buttonsStyling: false,
            confirmButtonText:
            'Sauvegarder',
            customClass: {
                confirmButton: 'custom_label'
            },
            focusConfirm: false,
            preConfirm: () => {
              setFile(handleImg());
              return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value,
                document.getElementById('swal-input4').value,
              ]
            }})
          if (formValues) {
            setPostValue(formValues);
            Swal.fire({
                title:'Succes',
                text: JSON.stringify(formValues),
                type:'success'
            })
          }
    }

    const handleImg = () => {
        let imgTab = [];
        var preview = document.getElementById('file').files
        for (let i = 0; i < preview.length; i++) {
            const element = preview[i];
            let reader = new FileReader()
            reader.readAsDataURL(element) 
            reader.onload = e => {
                imgTab.push({file: e.target.result,path: element.name});
                console.log({file: e.target.result,path: element.name});
                console.log(imgTab)
            }
        }
        setFile(imgTab);
    }
    return(
        <Layout>
            <main className="block_profile">

                <div className="profile_header">
                    <div className="wrapper">

                        <div className="profile_info">
                            <img src="/assets/IMG_2707.png" />
                            <h2 className="profile_name">Axelle Perchaud</h2>
                            <p className="profile_username">@axelle</p>
                            <p className="profile_age-salarie">19 ans</p>
                            <p className="profile_city">Angers, France</p>
                        </div>

                        <div className="profile_description">
                            <p className="profile_title">Web Design | communication visuelle et digitale</p>
                            <p className="profile_text">
                                Actuellement en Bachelor 2ème année à MyDigitalSchool Angers, j’étudie tous les domaines du digital, du développement au WebMarketing en passant par le WebDesign.
                                Je suis plus particulièrement intéressée par le domaine du design, de la communication, des réseaux sociaux et du monde de l’entrepreneuriat.
                            </p>
                            <div className="profile_custom">
                                <div className="inner">
                                    <p className="title">Mon emoji</p>
                                    <p className="emoji">🤪</p>
                                </div>
                                <div className="inner">
                                    <p className="title">Mon petit +</p>
                                    <p className="atout">Polyvalence</p>
                                </div>
                            </div>
                            <div className="wrapper_button">
                                <Button href="#" text="Envoyer un message" color="white" backgroundColor="#FFC30B" borderColor="#FFC30B" flexBasis="45%"/>
                                <Button href="#" text="S'abonner" color="#FFC30B" backgroundColor="none" borderColor="#FFC30B" flexBasis="45%"/>
                            </div>
                        </div>
                        <div className="profile_stat">
                            <div className="stat_wrapper">
                                <p>161</p>
                                <p className="name">abonnés</p>
                            </div>
                            <div className="stat_wrapper">
                                <p>17</p>
                                <p className="name">abonnements</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile_content">
                    <div className="wrapper">
                        <div className="profile_tab">

                            <div className={tab === 'portfolio' ? "tab active" : "tab"}>
                                <p className="tab_title" onClick={() => setTab('portfolio')}>
                                    PORTFOLIO
                                </p>
                            </div>
                            <div className={tab === 'cv' ? "tab active" : "tab"}>
                                <p className="tab_title" onClick={() => setTab('cv')}>
                                    CV
                                </p>
                            </div>
                            <div className={tab === 'contact' ? "tab active" : "tab"}>
                                <p className="tab_title" onClick={() => setTab('contact')}>
                                    CONTACT
                                </p>
                            </div>

                        </div>
                        {tab === 'portfolio' ?
                        <div className="profile_post">
                            <div className="new_post_button">
                                <p className="button_post" onClick={handleNewPost} >
                                    +
                                </p>
                            </div>
                            <div className="wrapper">
                                {posts.map((post,index) => {
                                    return <Card key={index} like={post.like} backgroundImg={post.backgroundImg} username={post.username} flexBasis="30%"/>
                                })}
                                {file ? file.map(img => <img src={img.file} />) : false}
                            </div>
                        </div> : tab === 'cv' ? 
                        <div className="profile_cv">







                        

                        <div className="block_field">
                            <div className="field_wrapper">
                                <h3 className="title black">Compétences</h3>
                                <div className="field_item_wrapper">
                                    <div className="field_item">
                                        <p className="item_title">Création graphique</p>
                                        <p className="item_sub">Indesign, Illustrator, Photoshop, XD, After Effect, Premiere Pro</p>
                                        <p className="item_utility">Déclinaisons de support print  | Maquettes web & mobile | Motion design & montages vidéos</p>
                                    </div>
                                    <div className="field_item">
                                        <p className="item_title">Création graphique</p>
                                        <p className="item_sub">Indesign, Illustrator, Photoshop, XD, After Effect, Premiere Pro</p>
                                        <p className="item_utility">Déclinaisons de support print  | Maquettes web & mobile | Motion design & montages vidéos</p>
                                    </div>
                                    <div className="field_item">
                                        <p className="item_title">Création graphique</p>
                                        <p className="item_sub">Indesign, Illustrator, Photoshop, XD, After Effect, Premiere Pro</p>
                                        <p className="item_utility">Déclinaisons de support print  | Maquettes web & mobile | Motion design & montages vidéos</p>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div className="block_field">
                            <div className="field_wrapper">
                                <h3 className="title yellow">Formations</h3>
                                <div className="field_item_wrapper">
                                    <div className="second_item">
                                        <p className="item_title">My Digital School - Angers</p>
                                        <p className="item_sub">Diplôme : Bachelor Concepteur et réalisateur web & digital spécialisation Webdesign</p>
                                        <p className="item_utility">WebDesign | WebMarketing | Développement Web | Communication visuelle & digitale | Gestion de projets</p>
                                        <p className="diplome">Diplôme obtenu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block_field">
                            <div className="field_wrapper">
                                <h3 className="title black">Compétences</h3>
                                <div className="field_item_wrapper">
                                    <div className="field_item">
                                        <p className="item_title">Création graphique</p>
                                        <p className="item_sub">Indesign, Illustrator, Photoshop, XD, After Effect, Premiere Pro</p>
                                        <p className="item_utility">Déclinaisons de support print  | Maquettes web & mobile | Motion design & montages vidéos</p>
                                    </div>
                                    <div className="field_item">
                                        <p className="item_title">Création graphique</p>
                                        <p className="item_sub">Indesign, Illustrator, Photoshop, XD, After Effect, Premiere Pro</p>
                                        <p className="item_utility">Déclinaisons de support print  | Maquettes web & mobile | Motion design & montages vidéos</p>
                                    </div>
                                    <div className="field_item">
                                        <p className="item_title">Création graphique</p>
                                        <p className="item_sub">Indesign, Illustrator, Photoshop, XD, After Effect, Premiere Pro</p>
                                        <p className="item_utility">Déclinaisons de support print  | Maquettes web & mobile | Motion design & montages vidéos</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block_field">
                            <div className="field_wrapper">
                                <h3 className="title yellow">Formations</h3>
                                <div className="field_item_wrapper">
                                    <div className="second_item">
                                        <p className="item_title">My Digital School - Angers</p>
                                        <p className="item_sub">Diplôme : Bachelor Concepteur et réalisateur web & digital spécialisation Webdesign</p>
                                        <p className="item_utility">WebDesign | WebMarketing | Développement Web | Communication visuelle & digitale | Gestion de projets</p>
                                        <p className="diplome">Diplôme obtenu</p>
                                    </div>
                                </div>
                            </div>
                        </div>








                        </div> : tab === 'contact' ? 
                        <div>
                            { modif ? 
                            <div style={{display: 'flex', alignItems:'center',justifyContent:'flex-end'}}>
                                <Button text="Sauvegarder" color="#FFC30B" borderColor="#FFC30B" href="#" width="90%" onClick={handleSave}/>
                            </div>
                            :
                            <div className="new_post_button">
                                <p className="button_post" onClick={() => setModif(true)} >
                                    +
                                </p>
                            </div>
                            }
                            {type === 'company' ? 
                            <div className="company_wrapper">
                                <div className="company_item pdg">
                                    <h3>PDG<span>.</span></h3>
                                    <p>Mr Arthur Dubois</p>
                                </div>
                                <div className="company_item rh">
                                    <h3>RH<span>.</span></h3>
                                    <p>Mme Léa BODIN</p>
                                    <p>lea.bodin[@]cstudio.com</p>
                                </div>
                            </div> : 
                            false} 
                            <div className="profile_contact">
                                <p className="user_info_contact">axelle.perchaud[@]gmail.com</p>
                                <p className="ou">Ou</p>
                                <div style={{width: '40%'}}>
                                    <Button text="Envoyer un message" color="white" backgroundColor="#FFC30B" href="#" flexBasis="30%"/>
                                </div>
                                <p className="ou">Ou</p>
                                <ul className="profile_social">
                                    <li className="profile_social_item"><Link href="#" ><a><img src="/assets/twitter.svg" /></a></Link></li>
                                    <li className="profile_social_item"><Link href="#" ><a><img src="/assets/instagram.svg" /></a></Link></li>
                                    <li className="profile_social_item"><Link href="#" ><a><img src="/assets/facebook.svg" /></a></Link></li>
                                </ul>
                                {modif ? 
                                    <div style={{display: 'flex',flexFlow: 'column',justifyContent:'center',alignItems: 'center'}}>
                                        <input className="custom_input" placeholder="Nom réseau social"/>
                                        <input className="custom_input" placeholder="Lien"/>
                                        <Button text="Ajouter" color="white" backgroundColor="#FFC30B" href="#"/>
                                    </div>
                                : false }
                            </div>
                        </div> : false}
                    </div>
                </div>
            </main>
        </Layout>
    );
}




export default connect(state=>state)(Profile)