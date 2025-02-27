import React from 'react'
import '../App.css';
interface InfoCardProps {
  CardIcons: React.ReactNode;
  CardTitle: string;
  CardInfo: string;
  CardSpan: React.ReactNode;
}

function infoCards(props: InfoCardProps) {
  return (
    <div className='CardSection' >
       <div className='card' >
        <div className='cardTop' >
         {props.CardIcons}
        </div>
        <h3>{props.CardTitle}</h3>
        <p>{props.CardInfo}</p>
        <span className='cardButton'>{props.CardSpan}</span>
        </div>
    </div>
  )
}

export default infoCards