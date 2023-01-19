import './Corpo.css';
import CardMenuAuto from './MenuAuto.js';

import BoneMeetFlour2 from './assets/bonemeetflour2.png';
import BoneMeetFlour from './assets/bonemeetflour.png';
import Chitosan from './assets/chitosan.png';
import ChickenFlour from './assets/chickenflour.png'
import ChickenMeet from './assets/chickenmeet.png';
import Coffee from './assets/coffee.png';
import Compare from './assets/compare.png';
import Chicken from './assets/galinha.png';
import Dog from './assets/perros.png';
import Example1 from './assets/example1.png';
import Example2 from './assets/example2.png';
import Example3 from './assets/example3.png';
import FeatherMeal from './assets/feathermeal.png'
import FishFlour from './assets/harinapescado.png';
import FishOil from './assets/fishoil.png';
import FreeFish from './assets/freefish.png';
import MBM from './assets/mbm.png';
import Meat from './assets/meat.png';
import MeatBone from './assets/meatbone.png';
import MeatFree from './assets/meatfree.png'
import PalmOil from './assets/palmoil.png';
import Palative from './assets/palative.png';
import PoultryMeal from './assets/poultrymeal.png';
import PoultryArgentina from './assets/poultryargentina.png';
import PoultryBrazil from './assets/poultrybrazil.png';
import PoultryFat from './assets/poultryfat.png';
import Tallow from './assets/tallow.png';
import TimutPepper from './assets/timutpepper.png';

import Dot from './assets/dot.png';

const Corpo = () => {
    let currentGrid = 1;

  const previousGrid = () => {
    if (currentGrid === 1) {
      return;
    }

    const firstgrid = document.getElementsByClassName(`grid${currentGrid}`)
    firstgrid[0].style.display = 'none';
    currentGrid--;
    const secondgrid = document.getElementsByClassName(`grid${currentGrid}`)
    secondgrid[0].style.display = 'grid';

    const numbergrid = document.getElementsByClassName('gridNumber')
    numbergrid[0].innerHTML = currentGrid;
  }

  const nextGrid = () => {
    if (currentGrid === 3) {
      return;
    }

    const firstgrid = document.getElementsByClassName(`grid${currentGrid}`)
    firstgrid[0].style.display = 'none';
    currentGrid++;
    const secondgrid = document.getElementsByClassName(`grid${currentGrid}`)
    secondgrid[0].style.display = 'grid';

    const numbergrid = document.getElementsByClassName('gridNumber')
    numbergrid[0].innerHTML = currentGrid;
  }

  console.log(currentGrid);
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
            
            

            <section class="product-list ">
                <div className='category-results'>
                    <div className="category-results-title">
                        <h3 className="category-results-title1">Results of Category</h3>
                        <p className="category-results-title2">Your search results... 7 Products</p>
                    </div>
                    <div className='filter-button'>
                        <button>
                        <svg className="css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TuneIcon"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>
                        <p class="text-[18px] text-blueText">Filter</p>
                        </button>
                    </div>

                </div>
                
                <div className='filterandmenu'>
                    
                    <div className='filter'>
                        <section className='filter-section'>
                            <div className='filter-div'>
                                
                                <div className='search-filter'>
                                    <input id="title" name="title" placeholder="Search" type="text" value="" />
                                    <svg className='css-vubbuv' focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 
                                        5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 
                                        5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                    </svg>
                                </div>

                                <div className='prices-filter'>
                                    <label>Prices</label>
                                    <div className='prices-filter-inputs'>
                                        <input placeholder="Price From" type="number" id="priceFrom" name="priceFrom" required="" 
                                        value=""/>
                                        <input placeholder="Price To" type="number" id="priceTo" name="priceTo" required="" value=""/>
                                    </div>
                                </div>

                                <div className='open-market'>
                                    
                                    <div className='open-market-yes-or-no'>
                                        <p>Open Market</p>
                                        <div className='open-market-yes-or-no-inputs'>
                                            <input type="radio" class="rounded-[8px]" name="openMarketYes" id="openMarketYes" 
                                            value="openMarketYes"/>
                                            <label for="openMarketYes">Yes</label>
                                        </div>
                            
                                        <div className='open-market-yes-or-no-inputs'>
                                            <input type="radio" class="rounded-[8px]" name="openMarketNo" id="openMarketNo" 
                                            value="openMarketNo" checked=""/>
                                            <label for="openMarketNo">No</label>
                                        </div>
                                    </div>
                            
                                    <select name="countryofOrigin" id="countryofOrigin" required="">
                                
                                        <option value="">Country of Origin</option>
                                        <option value="afghanistan">Afghanistan</option>
                                        <option value="brazil">Brazil</option><option value="paraguay">Paraguay</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="chile">Chile</option>
                                        <option></option>
                                        <option value="argentina">Argentina</option>
                                        <option value="algeria">Algeria</option>
                                        <option value="albania">Albania</option>
                                        <option value="andorra">Andorra</option>
                                        <option value="vaticancity">VaticanCity</option>
                                        <option value="unitedstate">United State</option>
                                
                                    </select>
                            
                                    <select name="countriesOpenMarket" id="countriesOpenMarket" required="">

                                        <option value="">Destination Country</option>
                                        <option value="afghanistan">Afghanistan</option>
                                        <option value="algeria">Algeria</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="belize">Belize</option>
                                        <option value="botswana">Botswana</option>
                                        <option value="bulgaria">Bulgaria</option>
                                        <option value="albania">Albania</option>
                                        <option value="algeria">Algeria</option>
                                        <option value="albania">Albania</option>
                                        <option value="singapore">Singapore</option>
                                        <option value="vietnam">Vietnam</option>
                                        <option value="thailand">Thailand</option>
                                        <option value="china">China</option>
                                        <option value="angola">Angola</option>
                                        <option value="andorra">Andorra</option>
                                        <option value="antiguaandbarbuda">AntiguaandBarbuda</option>
                                        <option value="australia">Australia</option>
                                        <option value="azerbaijan">Azerbaijan</option>
                                        <option value="austria">Austria</option>
                                        <option value="bahrain">Bahrain</option>
                                        <option value="belarus">Belarus</option>
                                        <option value="barbados">Barbados</option>
                                        <option value="armenia">Armenia</option>
                                        <option value="belgium">Belgium</option>
                                        <option value="benin">Benin</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="bolivia">Bolivia</option>
                                        <option value="bosniaandherzegovina">BosniaandHerzegovina</option>
                                        <option value="bhutan">Bhutan</option>
                                        <option value="centralafricanrepublic">CentralAfricanRepublic</option>
                                        <option value="chad">Chad</option>
                                        <option value="canada">Canada</option>
                                        <option value="chile">Chile</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="congorepublicofthe">Congo,Republicofthe</option>
                                        <option value="costarica">CostaRica</option>
                                        <option value="comoros">Comoros</option>
                                        <option value="andorra">Andorra</option>
                                        <option value="argentina">Argentina</option>
                                        <option value="armenia">Armenia</option>
                                        <option value="australia">Australia</option>
                                        <option value="austria">Austria</option>
                                        <option value="bahrain">Bahrain</option>
                                        <option value="antiguaandbarbuda">AntiguaandBarbuda</option>
                                        <option value="angola">Angola</option>
                                        <option value="barbados">Barbados</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="azerbaijan">Azerbaijan</option>
                                        <option value="belize">Belize</option>
                                        <option value="belarus">Belarus</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="chile">Chile</option>
                                        <option value="congo republic">Democratic Republic of the Congo</option>
                                        <option value="chad">Chad</option>
                                        <option value="comoros">Comoros</option>
                                        <option value="croatia">Croatia</option>
                                        <option value="cyprus">Cyprus</option>
                                        <option value="costarica">Costa Rica</option>
                                        <option value="czechrepublic">CzechRepublic</option>
                                        <option value="centralafricanrepublic">Central African Republic</option>
                                        <option value="brazil">Brazil</option>
                                        <option value="brazil">Brazil</option>
                                        <option value="slovakia">Slovakia</option>
                                        <option value="bulgaria">Bulgaria</option>
                                        <option value="canada">Canada</option>
                                        <option value="mexico">Mexico</option>
                                        <option value="netherlands">Netherlands</option>
                                        <option value="singapore">Singapore</option>
                                        <option value="southafrica">South Africa</option>
                                        <option value="unitedstate">United State</option>
                                        <option value="ecuador">Ecuador</option>
                                        <option value="spain">Spain</option>
                                        <option value="guinea">Guinea</option>
                                        <option value="afghanistan">Afghanistan</option>
                                        <option value="venezuela">Venezuela</option>
                                        <option value="peru">Peru</option>
                                        <option value="bolivia">Bolivia</option>
                                        <option value="malaysia">Malaysia</option>
                                        <option value="indonesia">Indonesia</option>
                                        <option value="france">France</option>
                                        <option value="portugal">Portugal</option>
                                        <option value="unitedarabemirates">United Arab Emirates</option>
                                        
                                    </select>
                            
                                    <select name="dispatchPort" id="dispatchPort" required="">
                                        <option value="">Dispatch Port</option>
                                        <option value="durresdurazzoaldrz">Durres (Durazzo)  AL DRZ</option>
                                        <option value="santosbrssz">Santos  BR SSZ</option>
                                        <option value="pago pagoasppg">Pago Pago  AS PPG</option>
                                        <option value="buenaventuracobun">Buenaventura  CO BUN</option>
                                        <option value="aricaclari">Arica  CL ARI</option>
                                        <option value="cartagenacoctg">Cartagena  CO CTG</option>
                                        <option value="buenos airesarbue">Buenos Aires  AR BUE</option>
                                        <option value="santa fearsfn">Santa Fe  AR SFN</option>
                                        <option value="sarandealsar">Sarande AL SAR</option>
                                        <option value="cartagenaescar">Cartagena  ES CAR</option>
                                        <option value="brailarobra">Braila  RO BRA</option>
                                    </select>
                                </div>
                        
                                <div className='quantity-available'>
                                    <label for="name">Filter Quantity Available (Mt)</label>
                                        
                                    <input placeholder="Quantity From" type="number" id="quantityFrom" name="quantityFrom" required="" 
                                    value=""/>
                                    <input placeholder="Quantity To" type="number" id="quantityTo" name="quantityTo" required="" 
                                    value=""/>
                    
                                </div>

                                <div className='dispatch'>
                                    <label for="name">Filter Dispatch Estimated</label>
                                    <p>*Select an estimated range of dates for your cargo dispatch</p>
                                    
                                    <div className='dispatch-inputs'>
                                        <input class="md:mt-4 w-full h-10 rounded-[8px] pl-2 block px-3 py-2 border-input text-
                                        blueText" placeholder="Date From" type="date" id="dateFrom" name="dateFrom" required="" 
                                        value=""/>
                                        <input class="mt-4 w-full h-10 rounded-[8px] pl-2 block px-3 py-2 border-input text-blueText" 
                                        placeholder="Date To" type="date" id="dateTo" name="dateTo" required="" value=""/>
                                    </div>
                        
                                </div>

                                <div className='filter-categories'>
                                    <label for="name">Filter Categories</label>
                                    
                                    <details open>
                                        <summary className='filter-categories-summary'>Supply to feed mills</summary>
                                        
                                        <ul className='filter-categories-ul'>
                                        
                                            <div className="filter-categories-summary-topic">
                                                <img src={Dot} alt=""/>
                                                <button value="animalProteins" name="animalProteins">Animal Proteins</button>
                                            </div>
                                            
                                            <div className="filter-categories-summary-topic">
                                                <img src={Dot} alt=""/>
                                                <button value="animalFatsAndOils" name="animalFatsAndOils">Animal Fats and Oils</button>
                                                </div>
                                                
                                            <div className="filter-categories-summary-topic">
                                                <img src={Dot} alt=""/>
                                                <button value="enzymaticHydrolysisProducts" name="enzymaticHydrolysisProducts">Enzymatic 
                                                hydrolysis products</button>                  
                                            </div>
                                            
                                            <div className="filter-categories-summary-topic">
                                                <img src={Dot} alt=""/>
                                                <button value="chitosan" name="chitosan">Chitosan</button>
                                            </div>
                                            
                                            <div className="filter-categories-summary-topic">
                                                <img src={Dot} alt=""/>
                                                <button value="coffee" name="coffee">Coffee</button>
                                            </div>
                                                
                                            <div className="filter-categories-summary-topic">
                                                <img src={Dot} alt=""/>
                                                <button value="spices" name="spices">Spices</button>
                                            </div>
                                            
                                        </ul>
                                    </details>
                                </div>

                        <div className='button-clear'>
                            <button>Clear Filters</button>
                        </div>
                    </div>
                        </section>
                    </div>

                    <div classmenu='salesmenu'>
                        <div className='pagebuttons'>
                            <button onClick={previousGrid}>Previous page<svg focusable="false" aria-hidden="true" 
                            viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 
                            13H20v-2z"></path></svg></button>
                            <span className="gridNumber pagesnumber1">1</span>
                            <p className='pagesnumber2'>to 9</p>
                            <button onClick={nextGrid}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 
                            24"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                            </svg>Next page</button>
                        </div>

                        
                        <div className="grid1 grid-container">
                            <div className="grid-item">
                                <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Chicken} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Poultry by-product meal 65% Canada
                                        </p>
                                        <p className='description'>
                                        is produced mainly as a by product of chicken meat, Then heat treatment, 
                                        drying and grinding according to European technology. It’s an excellent
                                        source of prote...
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={MeatBone} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Meat and bone meal (45/50% protein)
                                        </p>
                                        <p className='description'>
                                        Meat and bone meal (MBM) is a natural source of protein and minerals including calcium, phosphorus and fat, which is used as an ingredients for the production of balanced animal feed, being commercialized for pet food, poultry, swine, fish, and other non-ruminant species.The raw material is collected from slaughterhouses inspected (SIF) and is 100% bovine processing at our plant.The meal is free from any additive that improve your natural protein.
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Tallow} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Tallow
                                        </p>
                                        <p className='description'>
                                        Tallow for biodiesel purposes and animal nutrition
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={FishFlour} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Animal proteins
                                        </p>
                                        <p className='cardTitle'>
                                        Harina de pescado
                                        </p>
                                        <p className='description'>
                                        Harina de pescado
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={PalmOil} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Palm oil
                                        </p>
                                        <p className='description'>
                                        Palm oil is an edible vegetable oil derived from the mesocarp (reddish 
                                        pulp) of the fruit of the oil palms.The oil is used in food manufacturing
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Dog} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Alimento para perros
                                        </p>
                                        <p className='description'>
                                        Alimento para perros
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Chitosan} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Biopolymers
                                        </p>
                                        <p className='cardTitle'>
                                        Chitosan biotech
                                        </p>
                                        <p className='description'>
                                        Chitosan is a non-toxic, biodegradable, biocompatible polymer\nproduced by natural renewable sources, whose properties have\nbeen explored in industrial applications.
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Palative} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Palative-Gs
                                        </p>
                                        <p className='description'>
                                        es un producto obtenido por hidrólisis enzimática de subproductos\nfrescos de Jibia o Calamar Gigante (Dosidicus gigas), con un alto contenido de\npéptidos bioactivos de bajo peso molecular, un perfil de aminoácidos balanceado\ny destacando como característica principal la presencia de ácidos grasos omega-3,\nEPA y DHA.
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={PoultryFat} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Poultry fat
                                        </p>
                                        <p className='description'>
                                        Very good poultry fat
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid2 grid-container">
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={PoultryBrazil} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Poultry Meal - Brazil 60%
                                        </p>
                                        <p className='description'>
                                        High-Value Poultry Protein Meal Form Brazil
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Coffee} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Coffee and tea
                                        </p>
                                        <p className='cardTitle'>
                                        Coffe not roasted
                                        </p>
                                        <p className='description'>
                                        Coffe not roasted
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={TimutPepper} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Grains and seeds
                                        </p>
                                        <p className='cardTitle'>
                                        Timut pepper
                                        </p>
                                        <p className='description'>
                                        It is pungent and spicy taste of timmur produced enzymes in the mouth that facilitates digestive process and controls gas in the stomach. It is antiseptic, antispasmodic and stimulant. It also used for treating toothache. It is also source of vitamin A, phosphorus, thiamin, phytosterols and carotens.
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={ChickenMeet} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Carne de Frango
                                        </p>
                                        <p className='description'>
                                        Carne de frango orgânica
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={MeatFree} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Meat free
                                        </p>
                                        <p className='description'>
                                        Carne de frango orgânica
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={FishOil} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Aceite de pescado
                                        </p>
                                        <p className='description'>
                                        Aceite de tilapia 902 calorías /100 gms
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={FreeFish} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        FreeFish
                                        </p>
                                        <p className='description'>
                                        Hi, only example
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={BoneMeetFlour} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Harina de carne y hueso 50% (R)
                                        </p>
                                        <p className='description'>
                                        Harina de carne de rumiante del 50%, excelentes condiciones de calidad
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={ChickenFlour} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Harina de aves 55% (byprodoct meal)
                                        </p>
                                        <p className='description'>
                                        Harina de aves 55%
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid3 grid-container">
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={PoultryArgentina} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Poultry Meal 60% Argentina
                                        </p>
                                        <p className='description'>
                                        Quality Product
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={PoultryMeal} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Poultry by product meal
                                        </p>
                                        <p className='description'>
                                        The best poultry
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={BoneMeetFlour2} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Farinha de carne e osso bovino
                                        </p>
                                        <p className='description'>
                                        Farinha de carne e osso 50%
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={FeatherMeal} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Feather meal
                                        </p>
                                        <p className='description'>
                                        Describe product
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={MBM} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Mbm
                                        </p>
                                        <p className='description'>
                                        Great Product From Brazil
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Meat} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Meat
                                        </p>
                                        <p className='description'>
                                        Dasdsa
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Example1} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        UI Testing produts, cards, sizes
                                        </p>
                                        <p className='description'>
                                        There are many variations of passages of Lorem Ipsum available, but the 
                                        majority have suffered alteration in some form, by injected humour, or 
                                        randomised words which don't look even slightly believable. If you are 
                                        going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                                        anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
                                        generators on the Internet tend to repeat predefined chunks as necessary, 
                                        making this the first true generator on the Internet. It uses a dictionary 
                                        of over 200 Latin words, combined with a handful of model sentence 
                                        structures, to generate Lorem Ipsum which looks reasonable. The generated 
                                        Lorem Ipsum is therefore always free from repetition, injected humour, or 
                                        non-characteristic words etc.
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item">
                            <div className='hearticon'>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Example2} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Example product with large name
                                        </p>
                                        <p className='description'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                                        1500s, when an unknown printer took a galley of type and scrambled it to 
                                        make a type specimen book. It has survived not only five centuries, but 
                                        also the leap into electronic typesetting, remaining essentially 
                                        unchanged. It was popularised in the 1960s with the release of Letraset 
                                        sheets containing Lorem Ipsum passages, and more recently with desktop 
                                        publishing software like Aldus PageMaker including versions of Lorem 
                                        Ipsum.
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-item">

                                <div className='hearticon'>
                                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                    testid="FavoriteBorderOutlinedIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1. 1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></svg>
                                </div>
                                <div className='content'>
                                    <button>
                                        <img src={Example3} className="imageCardCompras"></img>
                                    </button>
                                
                                    <div className='textCard'>
                                        <p className='cardCategory'>
                                        Supply to feed mills
                                        </p>
                                        <p className='cardTitle'>
                                        Example product1
                                        </p>
                                        <p className='description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                                        est laborum.
                                        </p>
                                        <div className='signin'>
                                            <a href='#'><span>Sign in</span></a>
                                            <p> to see</p>
                                        </div>
                                    </div>

                                    <div className='buttonsbuycompare'>
                                        <div className='compare'>
                                            <button>
                                                <img src={Compare} alt="compare-symbol" />
                                            </button>
                                        </div>

                                        <div className='trolley'>
                                        <button>
                                            <svg   
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-
                                            testid="ShoppingCartOutlinedIcon"><path d="M15.55 13c.75 0 1.41-.41 
                                            1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 
                                            7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2
                                            H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 
                                            2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 
                                            2-.9 2-2-.9-2-2-2z"></path></svg>Add cart
                                        </button>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        

                    </div>

                </div>
    
            </section>
        </div>
    )
}

export default Corpo;
          
     
                