import style from './contactForm.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
                <h2>Отправить заявку:</h2>
                <div className={style.containerForm}>
                    <div className={style.contactForm}>
                        <form onSubmit={handleSubmit(onSubmitForm)}>
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
                                        pattern: { value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g, message: "Неверный формат" },
                                    })}
                                    placeholder="Телефон"
                                />
                                <span>{errors?.phone?.message}</span>
                            </div>
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
                            <div className={style.RowButtonChoose}>
                                <label htmlFor="picture" className={style.customFileLabel}>Файл изображений...</label>
                                <input
                                    type="file"
                                    id="picture"
                                    name="picture"
                                    {...register("picture", { required: false })}
                                    className={style.hiddenFileInput}
                                />
                            </div>
                            
                        </form>
                    </div>
                    <div className={style.rightContainer}>
                        <div className={style.rightContainerItem}>
                            <h3>12</h3>
                            <p>Реализованных проектов</p>
                        </div>
                        <div className={style.rightContainerItem}>
                            <h3>28МВт</h3>
                            <p>Установленных мощностей</p>
                        </div>
                        <div className={style.rightContainerItem}>
                            <h3>31 415м²</h3>
                            <p>Площадь спроектировнных СЭС</p>
                        </div>
                    </div>
                </div>
                <div className={style.RowButtonSend}>
                    <button className={style.primary}>Отправить Заявку</button>
                </div>
            </div>
        </div>
    );
}
