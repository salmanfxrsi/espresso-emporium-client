import PropTypes from 'prop-types';
import { BiEdit } from 'react-icons/bi';
import { BsEyeFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
    const { name,chef, taste, photo } = coffee;
    return (
        <div className='p-8 font-raleway bg-[#F5F4F1] rounded-xl flex justify-between items-center'>
            <div className='h-60 w-48 flex justify-center'>
                <img src={photo} alt="" />
            </div>
            <div className='space-y-4'>
                <p className='text-xl font-bold'>Name: <span className='font-normal'>{name}</span></p>
                <p className='text-xl font-bold'>Chef: <span className='font-normal'>{chef}</span></p>
                <p className='text-xl font-bold'>Taste: <span className='font-normal'>{taste}</span></p>
            </div>
            <div className='space-y-4'>
                <Link className='w-10 h-10 bg-[#D2B48C] rounded-md text-white text-2xl flex justify-center py-1.5'><BsEyeFill></BsEyeFill></Link>
                <Link className='w-10 h-10 bg-[#3C393B] rounded-md text-white text-2xl flex justify-center py-1.5'><BiEdit></BiEdit></Link>
                <Link className='w-10 h-10 bg-[#EA4744] rounded-md text-white text-2xl flex justify-center py-1.5'><MdDelete></MdDelete></Link>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
}

export default CoffeeCard;