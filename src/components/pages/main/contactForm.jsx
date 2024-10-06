import style from './contactForm.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();  // Correctly named navigate

    // Updated onSubmitForm function
    async function onSubmitForm(values) {
        try {
            const response = await axios.post('http://localhost:5000/api/contactapi', values); // API call to backend server
            if (response.status === 200) {
                reset();  // Reset form after successful submission
                navigate('/');  // Use navigate instead of router.push
            }
        } catch (err) {
            console.log(err);  // Log any errors
        }
    }

    return (
        <div className={style.container}>
            <h2>Отправить заявку:</h2>
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
                            maxLength: { value: 12, message: 'Слишком много цифр' },
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
                    <label htmlFor="picture">Выберите файл изображений:</label>
                    <input
                        type="file"
                        id="picture"
                        name="picture"
                        multiple
                        {...register("picture", { required: false })}
                    />
                </div>
                <div className={style.RowButtonSend}>
                    <button className="primary">Отправить Заявку</button>
                </div>
            </form>
        </div>
    );
}
