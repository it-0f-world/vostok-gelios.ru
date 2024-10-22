import React, { useEffect } from 'react'
import style from './contacts.module.css'
import ContactForm from "../main/contactForm"

export default function Contacts() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae889698b09df5588e5045ee8963b6bb515721a24d8e3eda71fc59be0a91be0ef&width=100%&height=400&lang=ru_RU&scroll=false";
        
        document.getElementById('map').appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.getElementById('map').removeChild(script);
        };
    }, []);
    return (
        <div>
            <ContactForm />
            <div className={style.map} id="map"></div>
            <div style={{ backgroundColor: '#1B1F3D', height: '29px'}}><p> </p></div>
        </div>
    )
}