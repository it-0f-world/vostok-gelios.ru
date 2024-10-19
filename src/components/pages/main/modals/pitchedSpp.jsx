// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import style from './sppInstallModals.module.css';
import image from '../img/pitchedRoof.webp';
import './modal.css';

const pitchedSpp = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={"Крышная солнечная электростанция на для фасадов зданий, автомобильных парковок"}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, .7)',
                    zIndex: '16',
                },
                content: {
                    zIndex: '16',
                }
            }}
        >
            <div className={style.ModalWrapper}>
                <div className={style.ModalContent}>
                    <div className={style.image}>
                        <img src={image} alt="webSPP" />
                        {/* Overlay */}
                        <div className={style.overlay}></div>
                    </div>
                    <div className={style.slogan}>
                            <div className={style.squares}>
                                <div className={style.orangeSquare}></div>
                                <div className={style.blueTitle}><h6>Варианты размещения</h6></div>
                            </div>
                            <h4>КРЫШНАЯ СЭС ДЛЯ СКАТНОЙ КРОВЛИ</h4>
                            <p>
                                Установка СЭС на скатах кровли предназначена в первую очередь для производственных зданий, фермерских хозяйств, ангаров, небольших магазинов.<br/>Для установки модулей используются легкие алюминиевые опорные конструкции, не нагружающие кровлю.<br/>Установка фотоэлектрических модулей осуществляется параллельно покрытию кровли, позволяя уменьшать парусность и массу всей конструкции.
                            </p>
                        </div>
                    <div className={style.description}>
                        <button onClick={onRequestClose} className={style.CloseModal}>
                            <ImCross />
                        </button>
                        <div className={style.descriptionContent}>
                            <h3>ВОЗМОЖНА УСТАНОВКА НА ВСЕ ВИДЫ КРОВЛИ</h3>
                            <ul>
                                <li>Профлист</li>
                                <li>Все виды черепиц</li>
                                <li>Мягкие кровельные покрытия</li>
                                <li>Фальцевая кровля</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default pitchedSpp;