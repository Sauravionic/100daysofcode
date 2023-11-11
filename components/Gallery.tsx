import { Box } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Photo1 from "../public/photo1.jpg";
import Photo2 from "../public/photo2.jpg";
import Photo3 from "../public/photo3.jpg";
import Image from 'next/image';
const Gallery = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        lazyload: true,
        speed: 500,
        centermode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    }
    return (
        <>
            <Box className = "slider_container">
                <Slider {...settings}>
                    <Box className="slider">
                        <Image src={Photo1} alt='Photo1' width={100} height={100} unoptimized={true}
                            style={{
                                width: '23vw',
                                height: '25vw',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    <Box className="slider">
                        <Image src={Photo2} alt='Photo1' width={100} height={100} unoptimized={true}
                            style={{
                                width: '23vw',
                                height: '25vw',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    <Box className="slider">
                        <Image src={Photo3} alt='Photo1' width={100} height={100} unoptimized={true}
                            style={{
                                width: '23vw',
                                height: '25vw',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    <Box className="slider">
                        <Image src={Photo2} alt='Photo1' width={100} height={100} unoptimized={true}
                            style={{
                                width: '23vw',
                                height: '25vw',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    <Box className="slider">
                        <Image src={Photo1} alt='Photo1' width={100} height={100} unoptimized={true}
                            style={{
                                width: '23vw',
                                height: '25vw',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Slider>
            </Box>
        </>
    )
}

export default Gallery