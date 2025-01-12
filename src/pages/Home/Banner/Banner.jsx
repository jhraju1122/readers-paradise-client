import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import book1 from '../../../assets/img/Book11.jpg'
import book2 from '../../../assets/img/book1120.webp'
import book3 from '../../../assets/img/book119.jpg'
import book4 from '../../../assets/img/book117.jpg'
import book5 from '../../../assets/img/book118.webp'
 
const Banner = () => {
    return (
        
              <Carousel>
                <div>
                    <img src={book1} />
                    
                </div>
                <div>
                    <img src= {book2} />
                    
                </div>
                <div>
                    <img src={book3} />
                  
                </div>
                <div>
                    <img src={book4} />
                  
                </div>
                <div>
                    <img src={book5} />
                  
                </div>
            </Carousel>
        
    );
};

export default Banner;