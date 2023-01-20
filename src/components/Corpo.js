import './Corpo.css';
import CardMenuAuto from './CardMenuAuto.js';  


const Corpo = () => {
    const changeGrid = () => {
        document.getElementsByClassName("parent").style.gridTemplateColumns = "10px 10px 10px"
      };

    return (
        <div className='Corpo'>
            <section className='categories'>
                <div className="apres">
                    <section className='titulo'>
                        <div class="text-title">
                        <h2 className='category-word'>Categories</h2>
                        <h3 className='mini-text'>We are together to find what you are looking for</h3>
                        </div>
                        <section className='cards'>
                        <CardMenuAuto />
                        
                    </section>
                   
                    </section>
                    

                </div> 
                
            </section>
            <section className='restOfTheBody'>
            <button onclick={changeGrid}>Change Grid</button>
            <div className='parent'>
            
                
            <div class="content">
          
          
          
          
       
        <div class="title">Headphone</div>
        
        <div class="text">
          This is a headphone. It has noise cancelling properties.
        </div>
         </div>
          
     
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                       
                        
            </div>
            </section>
        </div>
    )
}

export default Corpo;