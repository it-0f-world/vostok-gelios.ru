import 'react-multi-carousel/lib/styles.css';
import style from "./portfolio.module.css";
import './portfolio-carousel.css';
import Carousel from 'react-multi-carousel';

import Vladimir from "../portfolio/img/vladimir/gallery1.webp";
import Voronezh from "../portfolio/img/voronezh_airport/gallery.webp";
import Ivanovo from "../portfolio/img/ivanovo/gallery.webp";
import Lukoil from "../portfolio/img/lukoil/gallery.webp";
import Sber from "../portfolio/img/sbercity/gallery.webp";
import Hohland from "../portfolio/img/hohland/gallery.webp";
import Moscow from "../portfolio/img/moscow_household/gallery.webp";
import Rosinki from "../portfolio/img/rosinki/gallery.webp";


export default function Portfolio() {
      const WithStyles = ({ description, headline, image }) => (
        <div className={style.imageContainer}>
          <img src={image} alt={headline} className={style.image} />
          <div className={style.description}>
            <div>
                <h3>{headline}</h3>
                <p>{description}</p>
            </div>
            <button className={style.buttonDesc}>детализация</button>
          </div>
        </div>
      );
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div style={{ display: 'flex' }}>
                    <div className={style.orangeSquare}></div>
                    <div className={style.blueTitle}><h6>Проекты</h6></div>
                </div>
                <div className={style.header}>
                    <div className={style.title}>
                        <h2>ВЫПОЛНЕННЫЕ ПРОЕКТЫ</h2>
                        <div className={style.subtitle}>
                            <p>Мы нарабатываем и реализуем опыт для удовлетворения индивидуальных потребностей каждого клиента в альтернативной энергетике.</p>
                        </div>
                    </div>
                    
                    <div className={style.buttonContainer}>
                        <button className={style.button}>ПОДРОБНЕЕ О РЕАЛИЗОВАННЫХ ПРОЕКТАХ</button>
                    </div>
                </div>
                <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%'}}></div>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2400}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl={true}
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                ssr={true}
                swipeable
                >
                <WithStyles
                    description="23 кВт. Расчётная выработка 19,5 МВт·ч/год"
                    headline="г. Владимир, частный дом"
                    image={Vladimir}
                />
                <WithStyles
                    description="102,4 кВт. Расчётная выработка 102 МВт·ч/год"
                    headline="г. Воронеж, аэропорт"
                    image={Voronezh}
                />
                <WithStyles
                    description="155,52 кВт. Расчётная выработка 127,5 МВт·ч/год"
                    headline="г. Иваново, кондитерская фабрика"
                    image={Ivanovo}
                />
                <WithStyles
                    description="59,3 кВт. Расчётная выработка 47 МВт·ч/год"
                    headline="г. Москва, офис Лукоил"
                    image={Lukoil}
                />
                <WithStyles
                    description="115,2 кВт. Фасадные и крышные СЭС"
                    headline="г. Москва, ЖК Сберсити"
                    image={Sber}
                />
                <WithStyles
                    description="117,5 кВт. Двухсторонние фотоэлектрические модули"
                    headline="г. Москва, производство Хохланд"
                    image={Hohland}
                />
                <WithStyles
                    description="25,9 кВт. Расчётная выработка 18,1 МВт·ч/год"
                    headline="г. Красногорск, частный дом"
                    image={Moscow}
                />
                <WithStyles
                    description="13,4 кВт. Расчётная выработка 11,4 МВт·ч/год"
                    headline="г. Москва, частный дом"
                    image={Rosinki}
                />
            </Carousel>
        </div>
    )
}