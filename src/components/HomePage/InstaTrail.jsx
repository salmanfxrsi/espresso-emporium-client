import cup9 from '../../assets/insta-trail/Rectangle 9.png'
import cup10 from '../../assets/insta-trail/Rectangle 10.png'
import cup11 from '../../assets/insta-trail/Rectangle 11.png'
import cup12 from '../../assets/insta-trail/Rectangle 12.png'
import cup13 from '../../assets/insta-trail/Rectangle 13.png'
import cup14 from '../../assets/insta-trail/Rectangle 14.png'
import cup15 from '../../assets/insta-trail/Rectangle 15.png'
import cup16 from '../../assets/insta-trail/Rectangle 16.png'

const InstaTrail = () => {
    return (
        <div>
            <p className='font-raleway text-xl text-[#1B1A1A] mb-2 text-center'>Follow Us Now</p>
            <h1 className='text-[#331A15] text-6xl text-center'>Follow On Instagram</h1>
            <div className='grid grid-cols-4 gap-6 mt-12'>
                <img className='rounded-[10px]' src={cup9} alt="" />
                <img className='rounded-[10px]' src={cup10} alt="" />
                <img className='rounded-[10px]' src={cup11} alt="" />
                <img className='rounded-[10px]' src={cup12} alt="" />
                <img className='rounded-[10px]' src={cup13} alt="" />
                <img className='rounded-[10px]' src={cup14} alt="" />
                <img className='rounded-[10px]' src={cup15} alt="" />
                <img className='rounded-[10px]' src={cup16} alt="" />
            </div>
        </div>
    );
};

export default InstaTrail;