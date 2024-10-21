import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handelAddToBookmark}) => {
    const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-2xl mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div  className='flex mb-8'>
                   <img className='w-14' src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl font-semibold'>{author}</h3>
                    <p>{posted_date}</p>
                   </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handelAddToBookmark(blog)} className='ml-2 text-2xl text-red-500'><FaRegBookmark></FaRegBookmark></button>
                </div>   
            </div>
            
            <h2 className='text-4xl'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddToBookmark: PropTypes.func
}
export default Blog;