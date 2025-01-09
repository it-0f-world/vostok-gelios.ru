import style from './callBack.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';

export default function PhoneCallBackModal({ isOpen, onRequestClose }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmitForm = async (data) => {
        setIsSending(true);
        setIsSuccess(false);

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));

        try {
            const response = await axios.post('http://localhost:5000/api/contactapi', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.status === 200) {
                reset();
                setIsSuccess(true);
                setTimeout(() => setIsSuccess(false), 6000);
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.error || 'Произошла ошибка. Попробуйте позже.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Сетевые солнечные электростанции"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, .7)',
                    zIndex: 16,
                    display: 'flex',
                },
                content: {
                    position: 'static',
                    margin: '0 auto',
                    display: 'flex',
                    border: 'none',
                    maxHeight: '260px',
                    overflow: 'visible',
                    alignSelf: 'center',
                    backgroundColor: 'transparent',
                },
            }}
        >
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h2>Заказать обратный звонок</h2>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <div className={style.combineRow}>
                            <InputField
                                name="name"
                                placeholder="Как к Вам обращаться?"
                                register={register}
                                errors={errors}
                                validation={{
                                    required: 'Нужно ввести ваше имя',
                                }}
                            />
                            <InputField
                                name="phone"
                                placeholder="Телефон"
                                register={register}
                                errors={errors}
                                validation={{
                                    required: 'Нужно ввести ваш номер телефона',
                                    minLength: { value: 4, message: 'Телефон должен быть длинее 4 символов' },
                                    maxLength: { value: 21, message: 'Слишком много цифр' },
                                    pattern: {
                                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g,
                                        message: 'Неверный формат',
                                    },
                                }}
                            />
                            <InputField
                                name="time"
                                placeholder="Время для связи по МСК"
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <div className={style.RowButtonSend}>
                            <button
                                className={`${style.primary} ${isSending ? style.sending : ''}`}
                                disabled={isSending}
                            >
                                {isSending ? 'Отправляю...' : 'Отправить Заявку'}
                            </button>
                        </div>
                        {isSuccess && <p className={style.successMessage}>Данные с формы получены, ожидайте звонка.</p>}
                    </form>
                </div>
                <div>
                    <button onClick={onRequestClose} className={style.CloseModal}>
                        <ImCross />
                    </button>
                </div>
            </div>
        </Modal>
    );
}

function InputField({ name, placeholder, register, errors, validation }) {
    return (
        <div className={style.Row}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                {...register(name, validation)}
            />
            <span>{errors?.[name]?.message}</span>
        </div>
    );
}
