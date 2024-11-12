import { DotButton, useDotButton } from '../../EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '../../EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import '../../embla.css'

import IMG_0506 from '../../../img/voronezh_airport/IMG_0506.webp'
import IMG_0507 from '../../../img/voronezh_airport/IMG_0507.webp'
import IMG_0508 from '../../../img/voronezh_airport/IMG_0508.webp'
import IMG_0509 from '../../../img/voronezh_airport/IMG_0509.webp'
import IMG_0510 from '../../../img/voronezh_airport/IMG_0510.webp'
import IMG_0511 from '../../../img/voronezh_airport/IMG_0511.webp'
import IMG_0555 from '../../../img/voronezh_airport/IMG_0555.webp'
import IMG_0556 from '../../../img/voronezh_airport/IMG_0556.webp'

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
                            <img src={IMG_0506} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_0507} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_0508} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_0509} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_0510} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_0511} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_0555} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="embla__slide">
                            <div className="embla__slide__number">
                                <img src={IMG_0556} alt="Монтаж солнечных панелей на плоской крыше. Город Воронеж, Аэропорт. Солнечная электростанция для бизнеса." />
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