import BlogPost from "../../Shared/BlogPost/BlogPost";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BlogPost></BlogPost>
          <div>
          <h1 className='text-3xl font-bold mb-3 mt-10 text-slate-400 text-center mb-8'>---Horror Collection---</h1>
          <Category></Category>
          </div>
        </div>
    );
};

export default Home;