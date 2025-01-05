import style from './questionnaire.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LuImagePlus } from "react-icons/lu";

export default function Questionnaire() {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    async function onSubmitForm(data) {
        const formData = new FormData();

        // Append all form data to FormData object
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('message', data.message);

        // Append the selected file (if any)
        if (data.picture && data.picture.length > 0) {
            formData.append('picture', data.picture[0]); // Only send one file
        }

        try {
            const response = await axios.post('http://localhost:5000/api/contactapi', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                reset();  // Reset form after successful submission
                navigate('/');  // Redirect to homepage or another route
            }
        } catch (err) {
            console.log(err);  // Log any errors
        }
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Опросный лист</h1>
                <div className={style.contactForm}>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <div className={style.combineRow}>
                            <div className={style.Row}>
                                <input
                                    type="text"
                                    name="name"
                                    {...register("name", { required: { value: true, message: 'Вам нужно ввести ваше имя' } })}
                                    placeholder="Как к Вам обращаться?"
                                />
                                <span>{errors?.name?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <input
                                    type="text"
                                    name="email"
                                    {...register("email", {
                                        required: { value: false, message: 'Вам нужно ввести ваш e-mail адрес' },
                                        minLength: { value: 7, message: 'Не меньше 7 символов' },
                                        maxLength: { value: 120, message: 'Слишком много символов' },
                                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Введите почту в правильном формате' }
                                    })}
                                    placeholder="Электронная почта"
                                />
                                <span>{errors?.email?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <input
                                    type="phone"
                                    name="phone"
                                    {...register("phone", {
                                        required: { value: true, message: "Вам нужно ввести ваш номер телефона" },
                                        minLength: { value: 4, message: "Телефон должен быть длинее 4 символов" },
                                        maxLength: { value: 21, message: 'Слишком много цифр' },
                                        pattern: { value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g, message: "Неверный формат" },
                                    })}
                                    placeholder="Телефон"
                                />
                                <span>{errors?.phone?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <input
                                    type="text"
                                    name="time"
                                    {...register("time", { required: { value: false, message: 'Удобное время для связи по МСК' } })}
                                    placeholder="Время для связи по МСК"
                                />
                                <span>{errors?.name?.message}</span>
                            </div>
                        </div>
                        <div className={style.combineRowWithColumns}>
                            <div className={style.Row}>
                                <select
                                    name="object"
                                    {...register("object", {
                                        required: { value: true, message: "Вам нужно выбрать тип объекта" },
                                    })}
                                >
                                    <option value="" disabled selected>
                                        Выберите тип объекта
                                    </option>
                                    <option value="Жилой дом (частный)">Жилой дом (частный)</option>
                                    <option value="Многоквартирный дом">Многоквартирный дом</option>
                                    <option value="Коммерческое здание">Коммерческое здание</option>
                                    <option value="Промышленный объект">Промышленный объект</option>
                                    <option value="Другое">Другое (укажите тип объекта)</option>
                                </select>
                                <span>{errors?.object?.message}</span>
                            </div>
                            {watch("object") === "Другое" && (
                                <div className={style.Row}>
                                    <input
                                        type="text"
                                        name="otherObject"
                                        {...register("otherObject", {
                                            required: {
                                                value: true,
                                                message: "Пожалуйста, укажите тип объекта",
                                            },
                                        })}
                                        placeholder="Укажите тип объекта"
                                    />
                                    <span>{errors?.otherObject?.message}</span>
                                </div>
                            )}
                            <div className={style.Row}>
                                <select
                                    name="objectPurpose"
                                    {...register("objectPurpose", {
                                        required: { value: true, message: "Вам нужно выбрать цели и задачи проекта" },
                                    })}
                                >
                                    <option value="" disabled selected>
                                        Выберите цели и задачи проекта
                                    </option>
                                    <option value="Снижение затрат на электроэнергию">Снижение затрат на электроэнергию</option>
                                    <option value="Полная энергетическая автономия">Полная энергетическая автономия</option>
                                    <option value="Резервный источник питания">Резервный источник питания</option>
                                    <option value="Экологичное решение для бизнеса">Экологичное решение для бизнеса</option>
                                    <option value="Другое (опишите, уникальные цели)">Другое (опишите, уникальные цели)</option>
                                </select>
                                <span>{errors?.object?.message}</span>
                            </div>
                            {watch("objectPurpose") === "Другое (опишите, уникальные цели)" && (
                                <div className={style.Row}>
                                    <input
                                        type="text"
                                        name="otherObjectPurpose"
                                        {...register("otherObjectPurpose", {
                                            required: {
                                                value: true,
                                                message: "Пожалуйста, укажите цель проекта",
                                            },
                                        })}
                                        placeholder="Укажите цель проекта"
                                    />
                                    <span>{errors?.otherObject?.message}</span>
                                </div>
                            )}
                            <div className={style.Row}>
                                <select
                                    name="installationType"
                                    {...register("installationType", {
                                        required: { value: true, message: "Вам нужно выбрать цели и задачи проекта" },
                                    })}
                                >
                                    <option value="" disabled selected>
                                        Выберите интересный вам тип установки
                                    </option>
                                    <option value="Стационарные панели (на крыше)">Стационарные панели (на крыше)</option>
                                    <option value="Наземная установка">Наземная установка</option>
                                    <option value="Панели на фасаде здания">Панели на фасаде здания</option>
                                    <option value="Гибридные системы (солнечная и другая энергия)">Гибридные системы (солнечная и другая энергия)</option>
                                    <option value="Нужна консультация для выбора оптимального варианта">Нужна консультация для выбора оптимального варианта</option>
                                </select>
                                <span>{errors?.object?.message}</span>
                            </div>
                        </div>
                        <div className={style.combineRow}>
                            <div className={style.Row}>
                                <select
                                    name="installationPower"
                                    {...register("installationPower", {
                                        required: { value: true, message: "Вам нужно выбрать ориентировочную мощность установки" },
                                    })}
                                >
                                    <option value="" disabled selected>
                                        Представляете ли вы, какой мощности установка вам нужна?
                                    </option>
                                    <option value="Да, у меня есть примерное представление">Да, у меня есть примерное представление (укажите мощность, если известно)</option>
                                    <option value="Рассчитываю на помощь специалистов">Нет, рассчитываю на помощь специалистов</option>
                                </select>
                                <span>{errors?.object?.message}</span>
                            </div>
                            {watch("installationPower") === "Да, у меня есть примерное представление" && (
                                <div className={style.Row}>
                                    <input
                                        type="text"
                                        name="installationPowerWatt"
                                        {...register("installationPowerWatt", {
                                            required: {
                                                value: true,
                                                message: "Пожалуйста, укажите мощность установки в кВт",
                                            },
                                        })}
                                        placeholder="Укажите мощность установки в кВт"
                                    />
                                    <span>{errors?.otherObject?.message}</span>
                                </div>
                            )}
                            <div className={style.Row}>
                                <label htmlFor="picture" className={style.customFileLabel}><LuImagePlus style={{ paddingRight: '.5rem' }} /> загрузить фото</label>
                                <input
                                    type="file"
                                    id="picture"
                                    name="picture"
                                    {...register("picture", { required: false })}
                                    className={style.hiddenFileInput}
                                />
                            </div>
                        </div>
                        <div className={style.combineRow}>
                            <div className={style.Row}>
                                <select
                                    name="installationType"
                                    {...register("installationType", {
                                        required: { value: false, message: "Вам нужно обозначить сроки реализации проекта" },
                                    })}
                                >
                                    <option value="" disabled selected>
                                        Какой срок реализации проекта 
                                    </option>
                                    <option value="Как можно скорее">Как можно скорее</option>
                                    <option value="В течение 1-3 месяцев">В течение 1-3 месяцев</option>
                                    <option value="В течение полугода">В течение полугода</option>
                                    <option value="Нет жестких сроков, главное – качество">Нет жестких сроков, главное – качество</option>
                                </select>
                                <span>{errors?.object?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <select
                                    name="installationType"
                                    {...register("installationType", {
                                        required: { value: false, message: "Вам нужно обозначить бюджет проекта" },
                                    })}
                                >
                                    <option value="" disabled selected>
                                        Ваш бюджет на проект 
                                    </option>
                                    <option value="До 500 тыс. рублей">До 500 тыс. рублей</option>
                                    <option value="500 тыс. – 1 млн рублей">500 тыс. – 1 млн рублей</option>
                                    <option value="1 млн – 2 млн рублей">1 млн – 2 млн рублей</option>
                                    <option value="Более 2 млн рублей">Более 2 млн рублей</option>
                                    <option value="Бюджет пока не определен">Бюджет пока не определен, рассчитываю на рекомендации специалистов</option>
                                </select>
                                <span>{errors?.object?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <select
                                    name="installationType"
                                    {...register("installationType", {
                                        required: { value: false, message: "Укажите нужна ли вам поддержка в обслуживании" },
                                    })}
                                >
                                    <option value="" disabled selected>
                                        Нужна ли вам поддержка в обслуживании  
                                    </option>
                                    <option value="Да, важно получить долгосрочную поддержку и сервис">Да, важно получить долгосрочную поддержку и сервис</option>
                                    <option value="Нет, достаточно базовой гарантии">Нет, достаточно базовой гарантии</option>
                                    <option value="Еще не решил(а)">Еще не решил(а)</option>
                                </select>
                                <span>{errors?.object?.message}</span>
                            </div>
                        </div>
                        <div className={style.Row}>
                            <p>Нужна ли вам поддержка в обслуживании после установки?</p>
                        </div>
                        <div className={style.Col}>
                            <p>Есть ли у вас вопросы или комментарии?</p>
                            <div className={style.Row}>
                            <textarea
                                type="text"
                                name="message"
                                rows="5"
                                {...register("message", {
                                    required: { value: false, message: "Вам нужно ввести здесь ваше сообщение" },
                                    maxLength: { value: 1618, message: "Сообщение не может быть больше 1618 символов" },
                                    minLength: { value: 4, message: "Сообщение должно быть длиннее 4 символов" }
                                })}
                                placeholder="Сообщение"></textarea>
                            <span>{errors?.message?.message}</span>
                        </div>
                        </div>
                        <div className={style.RowButtonSend}>
                            <button className={style.primary}>Отправить Заявку</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
