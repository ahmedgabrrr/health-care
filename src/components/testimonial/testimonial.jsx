import React, { Component } from 'react';
import './testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'


import ahmed from './../../../src/images/me.jpg';

class Testmonial extends Component {
    render() {
        return (
            <section className='testmonial'>

                <div className="user">
                    <FontAwesomeIcon className='arrowIcon' icon={faArrowAltCircleRight} />
                    <img src={ahmed} alt="" />
                    <div className='icon'><FontAwesomeIcon icon={faCommentDots} /></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi temporibus ipsum, quasi in excepturi consequatur ab quia magnam nam consectetur autem aspernatur voluptatibus architecto doloremque mollitia debitis a quis voluptate.</p>
                    <h3>Ahmed Gabr</h3>
                    <h5>PATIENT</h5>
                    <FontAwesomeIcon className='arrowIcon' icon={faArrowAltCircleLeft} />
                </div>

            </section>
        );
    }
}

export default Testmonial;