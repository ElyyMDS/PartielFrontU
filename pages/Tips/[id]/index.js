import React, { Component, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import './tipsDetails.scss';
import Button from '../../../components/Button/button';
import Layout from '../../../components/Layout/layout';
import CardTips from '../../../components/CardTips/cardTips';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faBookmark } from '@fortawesome/free-solid-svg-icons';

const TipsDetails = (props) => {

    const router = useRouter();
    const { id } = router.query;
    const [tipsId,setTipsId] = useState(id);
    
    const dataTipsDetail = {title: "Comment rédiger son CV ?", content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo libero non nisi condimentumumsan finibus augue dignissim. Deld Nullam tincidunt."]}
    
    const CardTipsData = [
        {img: `../assets/plaquette.png`, title: "Se vendre en entretien", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. "},
        {img: `../assets/plaquette.png`, title: "Se vendre en entretien", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. "},
        {img: `../assets/plaquette.png`, title: "Se vendre en entretien", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate pretium erat, ac pharetra nisl viverra non. Pellentesque mollis augue ut condimentum feugiat. Mauris vel augue eu risus vulputate tempor. "},
    ]

    return (
        <Layout>
            <main className="block_tips_details">
                <div className="wrapper">
                    <div className="block_tips_details_left">
                        <div className="left">
                            <h2>TIPS</h2>
                            <div className="block_line">
                                <div className="line large"></div>
                            </div>
                        </div>
                        <div className="right">
                            <img src="/assets/plaquette.png"></img>
                        </div>
                    </div>
                    <div className="block_tips_details_right">
                        <h2>{dataTipsDetail.title}</h2>
                        {dataTipsDetail.content.map((text,index) => {
                            return <p>{text}</p>
                        })}
                    </div>
                </div>
                <div className="block_content_details">
                    <div className="content">
                        <p className="title">Lorem ipsum dolor sit amet.</p>
                        <p>onsectetur adipiscing elit. Aliquam dapibus feugiat arcu eu finibus. Quisque mattis ligula eget mauris pharetra, sit amet scelerisque tortor bibendum. Donec sagittis eros nec neque tincidunt, id porta ex bibendum. Donec id posuere elit. Nulla blandit quam in mi dignissim ultricies. In a posuere ipsum, a commodo massa. Mauris id laoreet dui. Fusce malesuada in mi sit amet elementum. Aenean nec lorem malesuada, convallis lorem non, viverra eros. Phasellus iaculis elit et facilisis volutpat</p>
                    </div>
                    <div className="content">
                        <p className="title">Lorem ipsum dolor sit amet.</p>
                        <p>onsectetur adipiscing elit. Aliquam dapibus feugiat arcu eu finibus. Quisque mattis ligula eget mauris pharetra, sit amet scelerisque tortor bibendum. Donec sagittis eros nec neque tincidunt, id porta ex bibendum. Donec id posuere elit. Nulla blandit quam in mi dignissim ultricies. In a posuere ipsum, a commodo massa. Mauris id laoreet dui. Fusce malesuada in mi sit amet elementum. Aenean nec lorem malesuada, convallis lorem non, viverra eros. Phasellus iaculis elit et facilisis volutpat</p>
                    </div>
                    <div className="content">
                        <p className="title">Lorem ipsum dolor sit amet.</p>
                        <p>onsectetur adipiscing elit. Aliquam dapibus feugiat arcu eu finibus. Quisque mattis ligula eget mauris pharetra, sit amet scelerisque tortor bibendum. Donec sagittis eros nec neque tincidunt, id porta ex bibendum. Donec id posuere elit. Nulla blandit quam in mi dignissim ultricies. In a posuere ipsum, a commodo massa. Mauris id laoreet dui. Fusce malesuada in mi sit amet elementum. Aenean nec lorem malesuada, convallis lorem non, viverra eros. Phasellus iaculis elit et facilisis volutpat</p>
                    </div>
                    <div className="content">
                        <p className="title">Lorem ipsum dolor sit amet.</p>
                        <p>onsectetur adipiscing elit. Aliquam dapibus feugiat arcu eu finibus. Quisque mattis ligula eget mauris pharetra, sit amet scelerisque tortor bibendum. Donec sagittis eros nec neque tincidunt, id porta ex bibendum. Donec id posuere elit. Nulla blandit quam in mi dignissim ultricies. In a posuere ipsum, a commodo massa. Mauris id laoreet dui. Fusce malesuada in mi sit amet elementum. Aenean nec lorem malesuada, convallis lorem non, viverra eros. Phasellus iaculis elit et facilisis volutpat</p>
                    </div>
                    <div className="content">
                        <p className="title">Lorem ipsum dolor sit amet.</p>
                        <p>onsectetur adipiscing elit. Aliquam dapibus feugiat arcu eu finibus. Quisque mattis ligula eget mauris pharetra, sit amet scelerisque tortor bibendum. Donec sagittis eros nec neque tincidunt, id porta ex bibendum. Donec id posuere elit. Nulla blandit quam in mi dignissim ultricies. In a posuere ipsum, a commodo massa. Mauris id laoreet dui. Fusce malesuada in mi sit amet elementum. Aenean nec lorem malesuada, convallis lorem non, viverra eros. Phasellus iaculis elit et facilisis volutpat</p>
                    </div>
                    <div className="content">
                        <p className="title">Lorem ipsum dolor sit amet.</p>
                        <p>onsectetur adipiscing elit. Aliquam dapibus feugiat arcu eu finibus. Quisque mattis ligula eget mauris pharetra, sit amet scelerisque tortor bibendum. Donec sagittis eros nec neque tincidunt, id porta ex bibendum. Donec id posuere elit. Nulla blandit quam in mi dignissim ultricies. In a posuere ipsum, a commodo massa. Mauris id laoreet dui. Fusce malesuada in mi sit amet elementum. Aenean nec lorem malesuada, convallis lorem non, viverra eros. Phasellus iaculis elit et facilisis volutpat</p>
                    </div>
                    <div className="like">
                        <FontAwesomeIcon className="fa" icon={faThumbsUp}/>
                        <FontAwesomeIcon className="fa" icon={faThumbsDown}/>
                        <img src="/assets/clip.png"></img>
                    </div>
                </div>
                <div className="block_more_tips">
                    <h2>D'autres <span>TIPS</span> pour vous !</h2>
                    <div className="more_tips">
                        {CardTipsData.map((card, index) => {
                            return <CardTips key={index} img={card.img} title={card.title} type={card.type} content={card.content} salaire={card.salaire} localisation={card.localisation}/>
                        })}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

TipsDetails.getInitialProps = ({store, isServer, pathname, query}) => {

    return {isServer}; // You can pass some custom props to the component from here
}

export default connect(state => state)(TipsDetails);