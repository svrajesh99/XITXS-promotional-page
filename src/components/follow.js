import React from 'react';
import './follow.css';
import insta from '../images/insta.png';
import mail from '../images/mail.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import game from '../images/game.png';
import fuo from '../images/fuo.png';
function follow(props) {
    return (
        <div className='follow'>
            <hr></hr>
            <div className='follow-grid'>
                <div className='follow-on'> <img src={fuo}></img></div>
                <div className='social-medias'>
                <a href="#"><img src={game}></img></a>
                <a href="#"><img src={twitter}></img></a>
                <a href="#"><img src={insta}></img></a>
                <a href="#"><img src={facebook}></img></a>
                <a href="#"><img src={mail}></img></a>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default follow;