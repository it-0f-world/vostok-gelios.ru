import style from "./portfolio.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Vladimir from "../../../assets/images/portfolio/vladimir/gallery1.webp";
import Voronezh from "../../../assets/images/portfolio/voronezh_airport/gallery.webp";
import Ivanovo from "../../../assets/images/portfolio/ivanovo/gallery.webp";
import Lukoil from "../../../assets/images/portfolio/lukoil/gallery.webp";


export default function Portfolio() {
      const WithStyles = ({ description, headline, image }) => (
        <div className={style.imageContainer}>
          <img src={image} alt={headline} className={style.image} />
          <h3>{headline}</h3>
          <p>{description}</p>
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
                    <div className={style.blueTitle}><h6>Портфолио</h6></div>
                </div>
                <div className={style.header}>
                    <div className={style.title}>
                        <h2>ВЫПОЛНЕННЫЕ ПРОЕКТЫ</h2>
                        <div className={style.subtitle}>
                            <p>Мы нарабатываем и реализуем опыт для удовлетворения индивидуальных потребностей каждого клиента в альтернативной энергетике.</p>
                        </div>
                    </div>
                    
                    <div className={style.buttonContainer}>
                        <button className={style.button}>СТРАНИЦА ПОРТФОЛИО ПРОЕКТОВ</button>
                    </div>
                </div>
                <div style={{ backgroundColor: '#ff8c00', height: '4px', width: '25%'}}></div>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2300}
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
                    description="44КВт на плоской кровле"
                    headline="г. Владимир"
                    image={Vladimir}
                />
                <WithStyles
                    description="96КВт на плоской кровле"
                    headline="г. Воронеж, Аэропорт"
                    image={Voronezh}
                />
                <WithStyles
                    description="153КВт на земле"
                    headline="г. Иваново"
                    image={Ivanovo}
                />
                <WithStyles
                    description="32Квт на плоской кровле в городской застройке"
                    headline="г. Москва, офис Лукоил"
                    image={Lukoil}
                />
            </Carousel>
        </div>
    )
}