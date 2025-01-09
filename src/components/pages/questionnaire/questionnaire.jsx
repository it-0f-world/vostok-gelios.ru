import React, { useState } from 'react';
import style from './questionnaire.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { LuImagePlus } from "react-icons/lu";
import WebSiteSections from './webSiteSections';

export default function Questionnaire() {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function onSubmitForm(data) {
        setIsSending(true); // Set sending state
        setIsSuccess(false); // Reset success state
        const formData = new FormData();
        // Append all text data
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('time', data.time);
        formData.append('installationPower', data.installationPower);
        formData.append('installationPowerOwn', data.installationPowerOwn);
        formData.append('installationType', data.installationType);
        formData.append('installationObject', data.installationObject);
        formData.append('otherInstallationObject', data.otherInstallationObject);
        formData.append('objectPurpose', data.objectPurpose);
        formData.append('otherObjectPurpose', data.otherObjectPurpose);
        formData.append('expiration', data.expiration);
        formData.append('budget', data.budget);
        formData.append('guarantee', data.guarantee);
        formData.append('support', data.support ? "Yes" : "No");  // For checkbox support
        formData.append('message', data.message);
        // Handle file inputs
        const pictureInput = document.querySelector('input[name="picture"]');
        if (pictureInput && pictureInput.files.length > 0) {
            for (let i = 0; i < pictureInput.files.length; i++) {
                formData.append('picture', pictureInput.files[i]);
            }
        }
        try {
            const response = await axios.post('http://localhost:5000/api/contactapi', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                reset(); // Reset form after successful submission
                setIsSuccess(true); // Show success message
                setTimeout(() => setIsSuccess(false), 6000); // Hide success message after 6 seconds
            }
        } catch (err) {
            console.error(err);
            if (err.response && err.response.status === 400) {
                alert(err.response.data.error); // Show error message from the server
            } else {
                console.log(err); // Log other errors
            }
        } finally {
            setIsSending(false); // Reset sending state
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
                                    {...register("name", { required: { value: true, message: 'Нужно ввести ваше имя' } })}
                                    placeholder="Как к Вам обращаться?"
                                />
                                <span>{errors?.name?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <input
                                    type="text"
                                    name="email"
                                    {...register("email", {
                                        required: { value: true, message: 'Нужно ввести ваш e-mail адрес' },
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
                                        required: { value: true, message: "Нужно ввести ваш номер телефона" },
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
                                    {...register("time", { required: { value: false, message: 'Укажите время для связи по МСК' } })}
                                    placeholder="Время для связи по МСК"
                                />
                                <span>{errors?.time?.message}</span>
                            </div>
                        </div>
                        <div className={style.combineRow}>
                            <div className={style.Row}>
                                <select
                                    name="installationPower"
                                    {...register("installationPower", {
                                        required: { value: true, message: "Нужно выбрать ориентировочную мощность установки" },
                                    })}
                                    defaultValue=""
                                >
                                    <option value="" disabled selected>
                                        Представляете ли вы, какой мощности установка вам нужна?
                                    </option>
                                    <option value="Да, у меня есть примерное представление">Да, у меня есть примерное представление (укажите мощность, если известно)</option>
                                    <option value="Рассчитываю на помощь специалистов">Нет, рассчитываю на помощь специалистов</option>
                                </select>
                                <span>{errors?.installationPower?.message}</span>
                            </div>
                            {watch("installationPower") === "Да, у меня есть примерное представление" && (
                                <div className={style.Row}>
                                    <input
                                        type="text"
                                        name="installationPowerOwn"
                                        {...register("installationPowerOwn", {
                                            required: {
                                                value: true,
                                                message: "Укажите мощность установки в кВт",
                                            },
                                        })}
                                        placeholder="Укажите мощность установки в кВт"
                                    />
                                    <span>{errors?.installationPowerOwn?.message}</span>
                                </div>
                            )}
                            <div className={style.Row}>
                                <select
                                    name="installationType"
                                    {...register("installationType", {
                                        required: { value: true, message: "Нужно выбрать тип установки СЭС" },
                                    })}
                                    defaultValue=""
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
                                <span>{errors?.installationType?.message}</span>
                            </div>
                        </div>
                        <div className={style.combineRow}>
                            <div className={style.Row}>
                                <select
                                    name="installationObject"
                                    {...register("installationObject", {
                                        required: { value: true, message: "Нужно выбрать тип объекта" },
                                    })}
                                    defaultValue=""
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
                            {watch("installationObject") === "Другое" && (
                                <div className={style.Row}>
                                    <input
                                        type="text"
                                        name="otherInstallationObject"
                                        {...register("otherInstallationObject", {
                                            required: {
                                                value: true,
                                                message: "Укажите свой тип объекта",
                                            },
                                        })}
                                        placeholder="Укажите тип объекта"
                                    />
                                    <span>{errors?.otherInstallationObject?.message}</span>
                                </div>
                            )}
                            <div className={style.Row}>
                                <select
                                    name="objectPurpose"
                                    {...register("objectPurpose", {
                                        required: { value: true, message: "Нужно выбрать цели и задачи проекта" },
                                    })}
                                    defaultValue=""
                                >
                                    <option value="" disabled selected>
                                        Выберите цели и задачи проекта
                                    </option>
                                    <option value="Снижение затрат на электроэнергию">Снижение затрат на электроэнергию</option>
                                    <option value="Полная энергетическая автономия">Полная энергетическая автономия</option>
                                    <option value="Резервный источник питания">Резервный источник питания</option>
                                    <option value="Экологичное решение для бизнеса">Экологичное решение для бизнеса</option>
                                    <option value="Другое">Другое (опишите, уникальные цели)</option>
                                </select>
                                <span>{errors?.objectPurpose?.message}</span>
                            </div>
                            {watch("objectPurpose") === "Другое" && (
                                <div className={style.Row}>
                                    <input
                                        type="text"
                                        name="otherObjectPurpose"
                                        {...register("otherObjectPurpose", {
                                            required: {
                                                value: true,
                                                message: "Пожалуйста, укажите свою цель проекта",
                                            },
                                        })}
                                        placeholder="Укажите цель проекта"
                                    />
                                    <span>{errors?.otherObjectPurpose?.message}</span>
                                </div>
                            )}
                        </div>
                        <div className={style.combineRow}>
                            <div className={style.Row}>
                                <select
                                    name="expiration"
                                    {...register("expiration", {
                                        required: { value: false, message: "Нужно обозначить сроки реализации проекта" },
                                    })}
                                    defaultValue=""
                                >
                                    <option value="" disabled selected>
                                        Какой срок реализации проекта
                                    </option>
                                    <option value="Как можно скорее">Как можно скорее</option>
                                    <option value="В течение 1-3 месяцев">В течение 1-3 месяцев</option>
                                    <option value="В течение полугода">В течение полугода</option>
                                    <option value="Нет жестких сроков, главное – качество">Нет жестких сроков, главное – качество</option>
                                </select>
                                <span>{errors?.expiration?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <select
                                    name="budget"
                                    {...register("budget", {
                                        required: { value: false, message: "Нужно обозначить бюджет проекта" },
                                    })}
                                    defaultValue=""
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
                                <span>{errors?.budget?.message}</span>
                            </div>
                            <div className={style.Row}>
                                <select
                                    name="guarantee"
                                    {...register("guarantee", {
                                        required: { value: false, message: "Нужна ли вам поддержка в обслуживании" },
                                    })}
                                    defaultValue=""
                                >
                                    <option value="" disabled selected>
                                        Нужна ли вам поддержка в обслуживании
                                    </option>
                                    <option value="Да, важно получить долгосрочную поддержку и сервис">Да, важно получить долгосрочную поддержку и сервис</option>
                                    <option value="Нет, достаточно базовой гарантии">Нет, достаточно базовой гарантии</option>
                                    <option value="Еще не решил(а)">Еще не решил(а)</option>
                                </select>
                                <span>{errors?.guarantee?.message}</span>
                            </div>
                        </div>
                        <div className={style.combineRow}>
                            <div className={`${style.Row} ${style.RowBottom}`}>
                                <p>Хотите ли вы предварительную консультацию от нашего специалиста?</p>
                                <label className={style.switch}>
                                    <input
                                        type="checkbox"
                                        name="support"
                                        {...register("support")}  // Register the checkbox with react-hook-form
                                    />
                                    <span className={style.slider}></span>
                                </label>
                            </div>
                            <div className={`${style.Row} ${style.RowBottom}`}>
                                <label htmlFor="picture" className={style.customFileLabel}><LuImagePlus style={{ paddingRight: '.5rem' }} /> загрузить фото</label>
                                <input
                                    type="file"
                                    id="picture"
                                    name="picture"
                                    className={style.hiddenFileInput}
                                    multiple // Allow multiple file selection
                                    onChange={(e) => {
                                        const files = e.target.files;
                                        if (files.length > 16) {
                                            alert("16 файлов максимум");
                                            e.target.value = ""; // Clear the selection if too many files are selected
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className={style.Col}>
                            <p>Есть ли у вас вопросы или комментарии?</p>
                            <div className={style.RowMessage}>
                                <textarea
                                    type="text"
                                    name="message"
                                    rows="5"
                                    {...register("message", {
                                        required: { value: false, message: "Нужно ввести здесь ваше сообщение" },
                                        maxLength: { value: 1618, message: "Сообщение не может быть больше 1618 символов" },
                                        minLength: { value: 4, message: "Сообщение должно быть длиннее 4 символов" }
                                    })}
                                    placeholder="Сообщение"></textarea>
                                <span>{errors?.message?.message}</span>
                            </div>
                        </div>
                        <div className={style.RowButtonSend}>
                            <button
                                className={`${style.primary} ${isSending ? style.sending : ''}`}
                                disabled={isSending}
                            >
                                {isSending ? 'Отправляю...' : 'Отправить Заявку'}
                            </button>
                        </div>
                        {isSuccess && <p className={style.successMessage}>Данные с опросного листа получены, ожидайте ответа.</p>}
                    </form>
                </div>
                <WebSiteSections />
            </div>
        </div>
    );
}
