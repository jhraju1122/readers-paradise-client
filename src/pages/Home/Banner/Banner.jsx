import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import book1 from '../../../assets/img/Book11.jpg'
import book2 from '../../../assets/img/book1120.webp'
import book3 from '../../../assets/img/book119.jpg'
import book4 from '../../../assets/img/book117.jpg'
import book5 from '../../../assets/img/book118.webp'
import { Link } from "react-router-dom";
 
const Banner = () => {
    return (
        
              <Carousel>
                <div>
                    <img src={book1} />
                    <Link className="btn relative top-[-60px]">Book Details</Link>
                 </div>
                <div>
                    <img src= {book2} />
                    <Link className="btn relative top-[-60px]">Book Details</Link>
                </div>
                <div>
                    <img src={book3} />
                    <Link className="btn relative top-[-60px]">Book Details</Link>
                </div>
                <div>
                    <img src={book4} />
                    <Link className="btn relative top-[-60px]">Book Details</Link>
                </div>
                <div>
                    <img src={book5} />
                    <Link className="btn relative top-[-60px]">Book Details</Link>
                </div>
            </Carousel>
        
    );
};

export default Banner;