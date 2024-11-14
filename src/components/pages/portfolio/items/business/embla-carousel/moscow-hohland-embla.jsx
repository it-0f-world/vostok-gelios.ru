import { DotButton, useDotButton } from '../../EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../../EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import '../../embla.css'

import IMG_1 from '../../../img/hohland/IMG_1.webp'
import IMG_2 from '../../../img/hohland/IMG_2.webp'
import IMG_3 from '../../../img/hohland/IMG_3.webp'
import IMG_4 from '../../../img/hohland/IMG_4.webp'
import IMG_5 from '../../../img/hohland/IMG_5.webp'
import IMG_6 from '../../../img/hohland/IMG_6.webp'
import IMG_7 from '../../../img/hohland/IMG_7.webp'
import IMG_8 from '../../../img/hohland/IMG_8.webp'
import IMG_9 from '../../../img/hohland/IMG_9.webp'
import IMG_10 from '../../../img/hohland/IMG_10.webp'
import IMG_11 from '../../../img/hohland/IMG_11.webp'
import IMG_12 from '../../../img/hohland/IMG_12.webp'
import IMG_13 from '../../../img/hohland/IMG_13.webp'
import IMG_14 from '../../../img/hohland/IMG_14.webp'
import IMG_15 from '../../../img/hohland/IMG_15.webp'
import IMG_16 from '../../../img/hohland/IMG_16.webp'
import IMG_17 from '../../../img/hohland/IMG_17.webp'
import IMG_18 from '../../../img/hohland/IMG_18.webp'
import IMG_19 from '../../../img/hohland/IMG_19.webp'
import IMG_20 from '../../../img/hohland/IMG_20.webp'
import IMG_21 from '../../../img/hohland/IMG_21.webp'
import IMG_22 from '../../../img/hohland/IMG_22.webp'

export default function Carousel(props) {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className="embla__slide__number">
                            <img src={IMG_1} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_2} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_3} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_4} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_5} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_6} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_7} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_8} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_9} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_10} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_11} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_12} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_13} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_14} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_15} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_16} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_17} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_18} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_19} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_20} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_21} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_22} alt="Монтаж солнечных панелей на плоской крыше. Город Москва, производство хохланд. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}