import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import art from '../../assets/images/art.png';
import henories from '../../assets/images/hon.png';
import home from '../../assets/images/home.png';
import arrow from '../../assets/images/arrow.png';

const Honories = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { images } = location.state || { images: [] };

    const clickHome = () => {
        navigate('/');
    };

    const [showAllImages, setShowAllImages] = useState(false);
    const [displayedImages, setDisplayedImages] = useState([]);

    useEffect(() => {
        setDisplayedImages(images.slice(0, 2));
    }, [images]);

    const handleClickArrow = () => {
        setShowAllImages(!showAllImages);
    };

    useEffect(() => {
        if (showAllImages) {
            setDisplayedImages(images);
        } else {
            setDisplayedImages(images.slice(0, 2));
        }
    }, [showAllImages, images]);

    return (
        <div className='flex flex-col min-h-screen justify-between bg-[url("assets/images/fon_phone.png")] bg-cover bg-center bg-fixed bg-repeat'>
            <div>
                <div className='bg-white h-20    flex justify-between mb-20'>
                    <img className='w-32 h-16' src={henories} alt="" />
                    <img onClick={clickHome} className='w-16 h-12 pr-5 mt-3 cursor-pointer' src={home} alt="" />
                </div>
                <div className='flex-grow flex items-center justify-center'>
                    <div className='grid grid-cols-1 gap-4'>
                        {displayedImages.map((image, index) => (
                            <div className='relative flex justify-center items-center' key={index}>
                                <div className='relative w-4/5 h-4/5'>
                                    <img className='w-full h-full bg-white' src={art} alt="" />
                                    <img className='w-3/5 h-3/5 absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={image.src} alt="" />
                                    <img className='w-3/5 absolute bottom-[10%] left-1/2 transform -translate-x-1/2' src={image.text} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {images.length > 2 && !showAllImages && (
                <div className='flex justify-center z-50 mb-5'>
                    <img className='w-8 h-8 cursor-pointer' src={arrow} alt="" onClick={handleClickArrow} />
                </div>
            )}
        </div>
    );
}

export default Honories;
