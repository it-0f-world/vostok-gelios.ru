// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import style from './sppTypesModals.module.css';
import image from '../img/reserverPowerSPP.webp';
import './modal.css';

const reservePowerSPP = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={"Солнечные электростанции с резервным электропитанием"}
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
                        <div className={style.slogan}>
                            <div className={style.squares}>
                                <div className={style.orangeSquare}></div>
                                <div className={style.blueTitle}><h6>Типы СЭС</h6></div>
                                
                            </div>
                            <h4>СЭС С РЕЗЕРВНЫМ <br/>ЭЛЕКТРОПИТАНИЕМ</h4>
                        </div>
                    </div>
                    <div className={style.description}>
                        <button onClick={onRequestClose} className={style.CloseModal}>
                            <ImCross />
                        </button>
                        <div className={style.descriptionContent}>
                            <h3>ПРИНЦИП РАБОТЫ</h3>
                            <p className={style.ModalP}>
                                При отсутствии основной электрической сети питание на объект поступает от АКБ и фотоэлектрических модулей. Когда основная сеть присутствует, энергия от панелей:
                            </p>
                            <ul style={{margin: '.5rem 0 0'}}>
                                <li>используется для зарядки АКБ</li>
                                <li>поступает на покрытие нужд потребителя</li>
                            </ul>
                            <div className={style.list}>
                                <h3>СОСТАВ УСТАНОВКИ</h3>
                                <ul>
                                    <li>фотоэлектрические модули</li>
                                    <li>гибридный инвертор</li>
                                    <li>система аккумуляторных батарей</li>
                                    <li>устройство ограничения мощности (опция)</li>
                                </ul>
                            </div>
                            <div className={style.list}>
                                <h3>АКТУАЛЬНО ДЛЯ</h3>
                                <ul>
                                    <li>объектов с частыми перебоями в электроснабжении</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default reservePowerSPP;