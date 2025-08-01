import { Carousel } from 'antd';
import { memo } from 'react'
import '../../scss/components/BannerStyles.scss'

export default memo(function Banner() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return (
        <>
        <div className="banner-wrapper">
            <h2>Latest Version</h2>
            <h1>6.9.11</h1>
            <p className='banner-date'>{year}/{month}/{day}</p>
             <Carousel autoplay arrows infinite={false}>
                <div>
                    <h3 className='banner-content'>1</h3> {}
                </div>
            </Carousel>
            <a href="#" className='banner-link'>Check out what's new</a>
        </div>
        </>
    );
});