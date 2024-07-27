import React from 'react'
import { CategoryData } from '../../WebsiteData/Text';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Category = () => {
 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]
  };
    return (
        <>
            <div className='mainCategory'>
                <div className='CategoryChild'>
                    <div className='categoryHeading'>
                        <h1 className='categoryH1'>Browse By Category</h1>
                    </div>
                    <div className='categorySlider'>
                    <Slider {...settings}>
                        {
                            CategoryData.map((data) => {
                                return(
                                <div className='newClass' key={data.name}>
                                    <img src={data.img} className='categoryImg'></img>
                                    <h4 className='my-2'>{data.name}</h4>
                                </div>
                                )
                            })
                        }
                    </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category