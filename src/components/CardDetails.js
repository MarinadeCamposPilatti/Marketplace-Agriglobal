import './CardDetails.css';
import './MenuAuto.js';

const CardDetails = (props) => {

    return(
        <div className='CardDetails'>
            <img src={props.image} ></img>
            <div className='text'>
                <h2>{props.texto}</h2>
                <h4>{props.NAvailable}</h4>
                <a href="#">{props.request}</a>
            </div>
        </div>
    )


}

export default CardDetails