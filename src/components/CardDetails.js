import './CardDetails.css';
import './MenuAuto.js';

const CardDetails = (props) => {

    return(
        <div className='CardDetails'>
            <img src={props.image} ></img>
            <div className='text'>
                <h2>{props.texto}</h2>
                <h4>Not Available</h4>
                <a href="#">Request</a>
            </div>
        </div>
    )


}

export default CardDetails