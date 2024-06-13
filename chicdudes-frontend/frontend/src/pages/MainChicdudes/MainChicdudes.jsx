import  text  from '../../assets/images/chicdudes.png'
import  body  from '../../assets/images/main-body.png'
import about from '../..//assets/images/about.png'
import about_line from '../..//assets/images/about_line.png'
import hon from '../..//assets/images/hon.png'
import check from '../..//assets/images/check.png'
import click  from '../..//assets/images/click.png'
import congrats  from '../..//assets/images/congrats.png'
import check_button  from '../..//assets/images/check-button.png'
import twitter  from '../..//assets/images/twitter.png'
import mint  from '../..//assets/images/mint-info.png'
import honories  from '../..//assets/images/honories.png'
import clothes  from '../..//assets/images/clothes.png'
import nowl from '../..//assets/images/nowl.png'
import error_wl from '../..//assets/images/error.png'
import art  from '../..//assets/images/art.png'
import zetman from  '../..//assets/images/zetman.png'
import zet_text from  '../..//assets/images/zet-text.png'
import aup_text from '../..//assets/images/aup-text.png'
import aup from '../..//assets/images/noname.png'
import noname from '../..//assets/images/aup.png'
import line from '../..//assets/images/line.png'
import line_add from '../..//assets/images/lineadd.png'
import yanc from '../..//assets/images/yanc.png'
import click_form from '../..//assets/images/click_form.png'
import way from '../../assets/images/way.png'
import way_text from '../../assets/images/way_text.png'
import world from '../../assets/images/world.png'
import world_text from '../../assets/images/world_text.png'
import apple from '../../assets/images/apple.png'
import apple_text from '../../assets/images/apple_text.png'
import ox from '../../assets/images/ox.png'
import ox_text from '../../assets/images/ox_text.png'
import nirola from '../../assets/images/nirola.png'
import nirola_text from '../../assets/images/nirola_text.png'
import yavc from '../../assets/images/yavc.png'
import yavc_text from '../../assets/images/yavc_text.png'
import kermit from '../../assets/images/kermit.png'
import kermit_text from '../../assets/images/kermit_text.png'
import block from '../../assets/images/block.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import axios from "axios";
import React from 'react';
import Slider from 'react-slick';



const src = "http://127.0.0.1:8000/check_whitelist"

function MainChicdudes() {
    const [wallet, setWallet] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [error, setError] = useState(false);
  
    const handleChange = (e) => {
      setWallet(e.target.value);
    };
  
    const handleSubmit = async () => {
      setLoading(true);
      setError(false);
      try {
        const { data } = await axios.post(src, { wallet: wallet }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(data.status)
        setStatus(data.status);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      }
      setLoading(false);
    };

    const [images, setImages] = useState([
        {src: zetman, text: zet_text},
        {src: aup, text: aup_text},
        {src: yanc, text: aup_text},
        {src: noname, text: aup_text},
        {src: apple, text: apple_text},
        {src: yavc, text: yavc_text},
        {src: kermit, text: kermit_text},
        {src: ox, text: ox_text},
        {src: way, text: way_text},
        {src: world, text: world_text},
        {src: nirola, text: nirola_text},
    ])

    const settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
    };  

    let imgStatus = '';
    if (error) {
        imgStatus = error_wl;
    } else if (status === 'True') {
        imgStatus = congrats;
    } else if (status === 'False') {
        imgStatus = nowl;
    }

    const navigate = useNavigate();

    const handleClick = () => {
        const isMobile = window.innerWidth <= 639 || window.innerWidth <= 1024;
        if (isMobile) {
            console.log('Navigating with images:', images);
            navigate("/honories", { state: { images } });
        } else {
          document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
        }
      };

    return(
        <>
        <div className="h-[800px] w-screen bg-[url('assets/images/group.png')] bg-cover bg-center desktop:h-[80 0px] desktop:w-screen">
            <div className='pt-4'>
                <div className='flex justify-center'>
                    <p class>
                        <img className=' w-[54px] h-[46px] desktop:w-[80px] desktop:h-[80px]' src={body} alt="" />
                    </p>
                </div>
                <div className='flex justify-center'>
                    <p>
                        <img className='w-[250px] mt-1 desktop:w-[300px]' src={text} alt="" />
                    </p>
                </div>
                <div className='flex justify-center relative top-4 left-2'>
                    <p>
                        <img className='w-[300px] animate-spin-slow mt-10 desktop:w-[290px] desktop:mb-24 desktop:mt-0' src={clothes} alt="" />
                    </p>
                </div>
                <div className='opacity-0 flex justify-center relative top-[160px] left-[15px] desktop:top-[35px] desktop:left-[15px]'>
                    <p>
                        <a href='https://forms.gle/AzwVpodvSmGiJxct8'><img className=' w-[200px] desktop:block desktop:w-[259px] desktop:h-[73px] desktop:mb-2 desktop:mt-0' src={click_form} alt="" /></a>
                    </p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 -mt-80 justify-items-end desktop:grid-cols-2 desktop:mt-0'>
            <div className='pl-20'>
                <div className='flex'>
                    <img className='hidden desktop:w-[400px] desktop:h-[76px] desktop:relative desktop:top-20' src={text} alt="" />
                </div>
                <div className='mt-52'>
                    <div className='block'>
                        <p><img className='w-[400px] relative top-[520px] right-[50px]  desktop:top-0 desktop:-right-8 desktop:z-0 desktop:w-[800px]' src={check} alt="" /></p>
                    </div>
                    <div className='relative text-center top-20 desktop:top-0'>
                        <div className='relative inline-block top-[440px] right-16 desktop:top-[2px] desktop:right-0 desktop:left-8'>
                        <input 
                                className='px-5 relative w-[225px] h-[32px] outline-none text-lg desktop:w-[800px] desktop:h-[125px] custom-input'
                                type="text"
                                placeholder=""
                                value={wallet}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='relative top-[510px] right-[60px] desktop:grid desktop:grid-cols-2 desktop:top-0 desktop:right-0'>
                        <div className='desktop:pl-16'>
                            {imgStatus && <img className='absolute mt-8 w-[200px] h-[100px] desktop:w-[450px] desktop:h-[200px]' src={imgStatus} alt={status} />}
                        </div>
                        <div className=''>
                            <div className='flex justify-end'>
                                <button className='relative  w-[80px] left-[50px] bottom-0 desktop:left-10 desktop:w-[200px]' onClick={handleSubmit}><img src={check_button} alt="" /></button>
                                {loading && 
                                    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
                                    <div class="text-center">
                                      <img class="w-36 h-36 animate-spin-slow desktop:w-80 desktop:h-80" src={clothes} alt=""/>
                                    </div>
                                  </div>
                                }
                            </div>
                            <div className='w-[40px] h-[40px] flex justify-end relative  bottom-[300px] desktop:top-0 desktop:left-72 desktop:w-[89px] desktop:h-[89px] laptop:relative laptop:left-28'>
                                <a href='https://twitter.com/ChicDudesBTC'><img src={twitter} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='flex justify-end mr-5'>
                        <Link to="about" smooth={true}>
                        <img className='w-[106px] h-[65px] mt-5 cursor-pointer desktop:w-[215px] desktop:h-[96px] desktop:pr-6 desktop:mt-20' src={about} alt={about} />
                        </Link>
                        <Link id='target-section' to="honories" smooth={true}>
                            <img onClick={handleClick} className='w-[105px] h-[65px] mt-5 cursor-pointer desktop:w-[300px] desktop:h-[103px] desktop:pr-6 desktop:mt-20 ' src={hon} alt={hon} />
                        </Link>
                    </div>
                    <div className='w-max desktop:w-full'>
                        <button  className='w-full mb-20 desktop:mb-0'><img className='w-[250px] h-[260px] desktop:w-[879px] desktop:h-[495px] desktop:ml-4' src={click} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
        <div id='about'  className='pl-12'>
            <div className='mt-14'>
                <img className='w-[150px] h-[40px] relative top-[50px] right-[30px] desktop:w-[300px] desktop:h-[100px]' src={about_line} alt="" />
            </div>
            <p className='pt-10 text-[26px] desktop:text-[42px] desktop:pt-8'>
                Chicdudes is a unique BTC collection of 3 333 freaky hand-drawn pfps by fashion lovers. All treats was drawn by hand on paper with oil pastels so no room for error — just true raw brutal art, ridiculous traits and crazy outfits
                We are building a community of confident cool people who are not afraid to show yourself
            </p>
            <div>
                <img className='w-[150px] h-[100px] desktop:w-[272px] desktop:h-[113px]' src={mint} alt="" />
            </div>
        </div>
        <div id='honories' className='pl-12 pt-6 hidden desktop:block'>
            <div><img src={honories} alt="" /></div>
            <div className='mb-14'>
                <Slider {...settings}>
                {images.map((image) => (
                    <div className='relative' key={image.id}>
                        <div className='relative w-[490px] h-[556px]'>
                        <img className='w-full h-full pr-2' src={art} alt="" />
                        <img className='w-[370px] h-[370px] absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' src={image.src} alt="" />
                        <img className='absolute top-[465px] left-[250px] transform -translate-x-1/2 -translate-y-1/2' src={image.text} alt="" />
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
        <div className='hidden mb-14 relative desktop:block'>
            <img className=' absolute -top-3' src={line_add} alt="" />
            <img className='relative ' src={line} alt="" />
        </div>

        <div className='pt-4 phone:block laptop:block desktop:hidden'>
                    <div className='flex justify-center'>
                        <p>
                        <img className='w-[54px] h-[46px] desktop:w-[143px] desktop:h-[136px]' src={body} alt="" />
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <p>
                        <img className='w-[250px] mt-1 desktop:w-[450px]' src={text} alt="" />
                        </p>
                    </div>
        </div>
  );

        </> 
    )
}


export default MainChicdudes;