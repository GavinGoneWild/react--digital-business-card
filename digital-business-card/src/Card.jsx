import React from 'react';
import CardContact from './CardContact.jsx';
import CardPersonal from './CardPersonal.jsx';
import CardFooter from './CardFooter.jsx'


function Card() {
    return (
        <div className='card'>
            <img className='card--image' src="../src//assets/CognizantProfileColorGray.jpeg" />
            <div className='card--info'>
                <h2>Gavin Broekema</h2>
                <p className="job-title">React Developer - Full Stack</p>
                <p className="website">www.gavinbroekema.com</p>
            </div>
            <CardContact />
            <CardPersonal />
            <CardFooter />
        </div>
    )
}

export default Card