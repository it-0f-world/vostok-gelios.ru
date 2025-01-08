import style from './contactForm.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import { LuImagePlus } from "react-icons/lu";
import ContactFormAdditional from './contactFormAdditional';

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
                <h2>Обратная связь</h2>
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
                        </div>
                        <div className={style.combineRow1}>
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
                        <div className={style.Row}>
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
                        <div className={style.RowButtonSend}>
                            <button
                                className={`${style.primary} ${isSending ? style.sending : ''}`}
                                disabled={isSending}
                            >
                                {isSending ? 'Отправляю...' : 'Отправить Заявку'}
                            </button>
                        </div>
                        {isSuccess && <p className={style.successMessage}>Данные с формы получены, ожидайте ответа.</p>}
                    </form>
                </div>
            </div>
            <ContactFormAdditional />
        </div>
    );
}
