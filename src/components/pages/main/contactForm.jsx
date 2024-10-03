import style from './contactForm.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_KEY from '../../../assets/apiKey'

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const router = useNavigate();
    
    async function onSubmitForm(values) {
        
        let config = {
            method: 'post',
            url: `${API_KEY.url}/api/contactapi`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);
            console.log(response);
            if (response.status == 200) {
                reset();
                router.push('/');
            }
        } catch (err) { console.log(err); }
    }
    return (
        <div className={style.container}>
                <h2>Отправить заявку:</h2>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className={style.Row}>
                    <input
                        type="text"
                        name="name"
                        {...register("name", { required: { value: true, message: 'You must enter you name' } })}
                        placeholder="Name"
                    />
                    <span>{errors?.name?.message}</span>
                </div>
                <div className={style.Row}>
                    <input
                        type="text"
                        name="email"
                        {...register("email", {
                            required: { value: false, message: 'You must enter you email address' },
                            minLength: { value: 7, message: 'This is not long enough to be an email' },
                            maxLength: { value: 120, message: 'This is too long' },
                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'This needs to be a valid email address' }
                        })}
                        placeholder="E-mail"
                    />
                    <span>{errors?.email?.message}</span>
                </div>
                <div className={style.Row}>
                    <input                        
                        type="phone"
                        name="phone"
                        {...register("phone", {
                            required: { value: true, message: "You need to enter your phone" },
                            minLength: { value: 4, message: "Your phone must be longer than this" },
                            maxLength: { value: 12, message: 'This is too long' },
                            pattern: { value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g, message: "Wrong format" },
                        })}
                        placeholder="Phone"
                    />
                    <span>{errors?.phone?.message}</span>
                </div>
                <div className={style.Row}>
                    <textarea
                        type="text"
                        name="message"
                        rows="5"
                        {...register("message", {
                            required: { value: false, message: "You need to enter your message" },
                            maxLength: { value: 1618, message: "Your message can't be more than 1618 characters" },
                            minLength: { value: 4, message: "Your message must be longer than this" }
                        })}
                        placeholder="Message"></textarea>
                    <span>{errors?.message?.message}</span>
                </div>
                <div className={style.RowButtonChoose}>
                    <label htmlFor="picture">Select a file</label>
                    <input
                        type="file"
                        id="picture"
                        name="picture"
                        multiple
                        {...register("picture", { required: false })}                              
                    />
                </div>
                <div className={style.RowButtonSend}>
                    <button className="primary">Send request</button>
                </div>
            </form>
        </div>
    )
}