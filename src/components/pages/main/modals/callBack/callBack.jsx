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
    async function onSubmitForm(data) {
        setIsSending(true); // Set sending state
        setIsSuccess(false); // Reset success state
        const formData = new FormData();
        // Append all text data
        formData.append('name', data.name);
        formData.append('phone', data.phone);
        formData.append('time', data.time);
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
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={"Сетевые солнечные электростанции"}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, .7)',
                    zIndex: '16',
                    display: 'flex',
                },
                content: {
                    position: 'static',
                    margin: '0 auto',
                    display: 'flex',
                    border: 'none',
                    background: 'transparent',
                    overflow: 'visible'
                }
            }}
        >
            <div className={style.wrapper}>
                <div className={style.block}>
                    <div className={style.container}>
                        <h2>Заказать обратный звонок</h2>
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
                        <button onClick={onRequestClose} className={style.CloseModal}>
                        <ImCross />
                        </button>
                    </div>
                    
                </div>
            </div>
        </Modal>
    );
}