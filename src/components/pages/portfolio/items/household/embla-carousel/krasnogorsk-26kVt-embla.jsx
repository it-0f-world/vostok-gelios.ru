import { DotButton, useDotButton } from '../../EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../../EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import '../../embla.css'

import IMG_1 from '../../../img/krasnogorsk26kVt/IMG_1.webp'
import IMG_2 from '../../../img/krasnogorsk26kVt/IMG_2.webp'
import IMG_3 from '../../../img/krasnogorsk26kVt/IMG_3.webp'
import IMG_4 from '../../../img/krasnogorsk26kVt/IMG_4.webp'
import IMG_5 from '../../../img/krasnogorsk26kVt/IMG_5.webp'
import IMG_6 from '../../../img/krasnogorsk26kVt/IMG_6.webp'
import IMG_7 from '../../../img/krasnogorsk26kVt/IMG_7.jpg'
import IMG_8 from '../../../img/krasnogorsk26kVt/IMG_8.jpg'
import IMG_9 from '../../../img/krasnogorsk26kVt/IMG_9.jpg'
import IMG_10 from '../../../img/krasnogorsk26kVt/IMG_10.jpg'
import IMG_11 from '../../../img/krasnogorsk26kVt/IMG_11.jpg'
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
                            <img src={IMG_1} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_2} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_3} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_4} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_5} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_6} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_7} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_8} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_9} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_10} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_11} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
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