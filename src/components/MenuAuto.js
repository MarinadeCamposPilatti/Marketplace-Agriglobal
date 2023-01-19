import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import CardDetails from './CardDetails'
import Mills from './assets/mills.png';
import Barn from './assets/barn.png';
import Woman from './assets/woman.png';
import Meet from './assets/meet.png';
import Renderers from './assets/renderers.png';
import Machine from './assets/machine.png';

export class CardMenuAuto extends Component {  
    render()  
        {      
          return (  
        <div>  
            <div class='container-fluid'>
            <OwlCarousel items={3} margin={8} autoplay ={true} >
            <div><CardDetails  image={Mills} texto="Supply to feed mills"/></div>  
            <div><CardDetails  image={Barn} texto="Supply to farms"/></div>  
            <div><CardDetails  image={Woman} texto="Supply to Slaughterhouses"/></div>
            <div><CardDetails  image={Meet} texto="Meat Offer"/></div>
            <div><CardDetails  image={Renderers} texto="Supply to Renderers"/></div>  
            <div><CardDetails  image={Machine} texto="Machine and Equipment"/></div>  
                </OwlCarousel>  
        </div>  
      </div>  
          )  
        }  
      }  
        
  
export default CardMenuAuto