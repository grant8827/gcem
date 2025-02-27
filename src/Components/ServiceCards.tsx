
interface ServiceCardsProps {
  Img: string;
  CardTitle: string;
  CardInfo: string;
}

function ServiceCards(props: ServiceCardsProps) {
  return (
    <div className='serviceCards' >
        <img className='serviceImage' src={props.Img} alt={props.CardTitle} />
        <h3 className='serviceTitle' >{props.CardTitle}</h3>
        <p className='serviceParagraph'>{props.CardInfo}</p>
        
 </div>
  )
}

export default ServiceCards