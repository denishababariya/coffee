
import './App.css';
import myimg1 from './image/logo.png';
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiNumberCircleZeroFill } from "react-icons/pi";


function App() {
  return (
    <div>

      <div>
        <header>
            <div class="container flex justify-between align-center" >
               <div className="logo_div">
                 <img className="logo" src={myimg1}></img>
               </div>
                <div className="menu">
                  <ul class="flex align-center justify-center">
                    <li className='home'>HOME</li>
                    <li>OUR PRODUCTS</li>
                    <li>BLOG</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li className>STYLEGUIDE</li>
                    <MdOutlineShoppingBag className='cart_icon'></MdOutlineShoppingBag>
                    <li className='flex justify-center align-center'>CART<PiNumberCircleZeroFill className='zero_icon'></PiNumberCircleZeroFill></li>
                    


                  </ul>
                </div>

            </div>
        </header>
      </div>


      {/* coffee mugs */}
      <div>
          <div className='side_spacer'>
            <div className='banner_img flex align-center justify-center'>
              <div className='banner'> 
                <div className='best'>BEST PLACE TO BUY DESIGN</div>
                
                <div className='cof_mug'>Coffee Mugs</div>
                <p className='cof_txt'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
                
             <a className='btn_explore'>Explore Our Products</a>
             
               </div>

             
            </div>
          

          </div>
      </div>
      

      {/* text section */}

      <div className='spacer1 container'>


       
       <div className='txt_sec  flex flex align-center justify-center'>
          
         <div className='txt'>
         <h2>Even the all-powerful Pointing has no control about the blind texts.</h2>
          <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          <a href='#' className='underline'>Read the full Story</a>
         </div>
        </div>
      
        <div className='spacer'>
          
          <div className='heading flex justify-center align-center'><div className='line'></div>FEATURED MUGS<div className='line'></div></div>
          
          
          
      </div> 
        <div className='main_img flex'>
        <div className='image_grid'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig1.jpeg')}></img></a>
              {/* <div className='explore'>Explore mug</div> */}
            </div>
            <div className='txt_div'>
              <h4>Pink Premium Ceramic</h4>
              <p>$ 99.00 USD</p>
            </div>
            </div>
          </div>
          <div className='image_grid'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig2.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
              <h4>Golden Designers Mug</h4>
              <p className='flex justify-center'><p>$50.00</p><s>$ 69.00 USD</s> </p>
            </div>
            </div>
          </div>    
       </div> 

       <div className='spacer' >
          
          <div className='heading flex justify-center align-center' style={{padding:"100px 0px"}}><div className='line'></div>
MORE PRODUCTS<div className='line'></div></div>

        <div className='main_img1 flex'>
            
        <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig4.jpeg')}></img></a>
            </div>
            <div className='txt_div '>
              <h4>
Red Love Cup
</h4>
             <p className='flex'> <p>$25.00</p><s>$ 37.00 USD</s></p>
            </div>
            </div>
          </div>  
          </div>          
          
          <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig5.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
              <h4>Black Tea Cup</h4>
             <p className='flex'> <p>$15.00</p><s>$ 29.00 USD</s>

</p>
            </div>
            </div>
          </div>  
          </div>          
          
          
          <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig6.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
            <h4>B&W Essentials Mug</h4>
              <p>$ 19.00 USD</p>
             

            </div>
            </div>
          </div>  
          </div>       

               
        <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig7.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
            <h4>Winter Style Mug</h4>
              <p>$ 25.00 USD</p>
            
            </div>
            </div>
          </div>  
          </div>          
          
          <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig3.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
            <h4>
Ceramic Tea
</h4>
              <p>$ 46.00 USD</p>
            </div>
            </div>
          </div>  
          </div>          
          
          
          <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig8.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
            <h4>
No Handle Bar Cup</h4>
              <p>$ 34.00 USD</p>
            </div>
            </div>
          </div>  
          </div>       

               
        <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig9.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
              
            <h4>Espresso Cup by Mugs.co</h4>
              <p>$ 25.00 USD</p>
              
            </div>
            </div>
          </div>  
          </div>          
          
          <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig1.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
              <h4>Pink Premium Ceramic</h4>
              <p>$ 99.00 USD</p>
            </div>
            </div>
          </div>  
          </div>          
          
          
          <div className='flex'>
          <div className='image_grid1'>
            <div className='flex justify-center align-center'>
            <div className='img_div'>
              <a href='#'><img src={require('./image/ig10.jpeg')}></img></a>
            </div>
            <div className='txt_div'>
              <h4>Summer Designer Cup</h4>
              <p>$ 29.00 USD</p>
            </div>
            </div>
          </div>  
          </div>    

        </div>
          
          
      </div> 
       
      </div>

      
{/* BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE */}


<div className='container spacer behind_mug'>
      <div className='flex justify-center align-center s_txt'>
              <div className='line'></div>
              <div className='txt1 txt2'>
BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
</div>
              <div className='line '></div>
            </div>
      </div>

    <div className='container flex justify-between parallax_upr' >
      <div className='pre_txt'>
        <div>Premium Offer</div>
        <h2>Get our Coffee Magazine</h2>
        <p>The most versatile furniture system ever created. Designed to fit your life.</p>
        <a className='start_btn'><div>Start Shopping</div></a>
      </div>
      <div className='flex img_3_main'>
        <div className='flex '> 
          <img src={require('./image/d1.jpeg')} height={"280px"} width={"280px"}></img>
        </div>
        <div className='flex img_3'>
          <img src={require('./image/d2.jpeg')} height={"130px"} width={"160px"}></img>
          <img src={require('./image/d3.jpeg')} height={"130px"} width={"160px"}></img>
        </div>
      </div>
    </div>


      {/* parallax */}

      <div className='parallax'></div>

      
      
{/* BEHIND THE MUGS, LIFESTYLE STORIES */}

      <div className='container spacer behind_mug'>
      <div className='flex justify-center align-center s_txt'>
              <div className='line'></div>
              <div className='txt1 txt2'>
BEHIND THE MUGS, LIFESTYLE STORIES</div>
              <div className='line '></div>
            </div>
      </div>
      <div className='container spacer flex behind_main_img'>
        <div className='behind_img flex '>
          <div><img src={require('./image/b1.jpeg')}></img></div>
          <div><a>Health Check: why do I get a headache when I haven’t had my coffee?</a></div>
          <div className='img_cnt'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. </div>
          <div className='img_cnt'>OCTOBER 9, 2018</div>
        </div>

        <div className='behind_img flex '>
          <div><img src={require('./image/b2.jpeg')}></img></div>
          <div><a>
How long does a cup of coffee keep you awake?</a></div>
          <div className='img_cnt'>It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem. </div>
          <div className='img_cnt'>OCTOBER 9, 2018</div>
        </div>

        <div className='behind_img flex '>
          <div><img src={require('./image/b3.jpeg')}></img></div>
          <div><a>Recent research suggests that heavy coffee drinkers may reap health benefits.</a></div>
          <div className='img_cnt'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. </div>
          <div className='img_cnt'>OCTOBER 9, 2018</div>
        </div>
      </div>

      {/* sign up */}
      <div className='side_spacer'>
        <div className='sign_up flex justify-center align-center'>
            <div className='flex justify-center align-center s_txt'>
              <div className='line line1'></div>
              <div className='txt1'>Sign up and get free coffee bags</div>
              <div className='line line1'></div>
            </div>
            <div className='coffee_up'>Coffee Updates</div>
            <div className='input flex'>
              <input type='text' placeholder='customer@coffeestyle.io'></input>
              <div>subscribe</div>
            </div>
        </div>
      </div>
      

      {/* footer */}
      <footer>
        <div className='container'>
            {/* <div className='flex grid'>
                <div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                </div>
                <div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                </div>
                <div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                </div>
               
            </div> */}
            <div className='grid w-grid'>
            
                  <img src={require('./image/logo.png')}></img>
                  <p className='grid-2'> Delivering the best coffee life since 1996. From coffee geeks to the real ones.</p>
                  <p className='grid-3'>CoffeeStyle Inc. © 1996</p>
                  <div><span className='grid-4'>Menu</span></div>
                
                
                  <div className='grid-5'>
                    <a href='#'>Home </a>
                    <a href='#'>Our Products</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                    <a href='#'>Styleguide</a>
                  </div>
                  <div className='grid-6'>
                    <span>Follow Us</span>
                  </div>
                  <div className='grid-5'>
                    <a href='#'>facebook</a>
                    <a href='#'>instagram</a>
                    <a href='#'>pinterest</a>
                    <a href='#'>twitter</a>
                  </div>
                  <div className='grid-6'><span>Contact Us</span></div>
                  <div className='grid-5 mail_link'>
                    <p className='help_p'>We’re Always Happy to Help</p>
                    <a href='mailto:us@coffeestyle.io' >us@coffeestyle.io</a>
                  </div>
                  <a className='grid-9 grid-3'>Powered by Webflow</a>
                
              
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
