import React, { useEffect, useRef } from 'react';
import style from './contacts.module.css';
import ContactForm from "../main/contactForm";
import Top from './top';

export default function Contacts() {
    const mapRef = useRef(null);
    const scriptRef = useRef(null); // Create a ref to store the script element

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae889698b09df5588e5045ee8963b6bb515721a24d8e3eda71fc59be0a91be0ef&width=100%25&height=400&lang=ru_RU&scroll=false";

        // Store the current ref in a variable
        const currentMapRef = mapRef.current;

        if (currentMapRef) {
            currentMapRef.appendChild(script);
            scriptRef.current = script; // Store the script reference
        }

        return () => {
            // Use the stored script reference in the cleanup function
            if (currentMapRef && scriptRef.current) {
                // Check if the script is still a child before attempting to remove it
                if (currentMapRef.contains(scriptRef.current)) {
                    currentMapRef.removeChild(scriptRef.current);
                }
            }
        };
    }, []);

    return (
        <div>
            <Top />
            <ContactForm />
            <div className={style.map} ref={mapRef}></div>
            <div style={{ backgroundColor: '#1B1F3D', height: '29px'}}><p> </p></div>
        </div>
    );
}
