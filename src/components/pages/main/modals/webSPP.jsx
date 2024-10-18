// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import style from './sppTypesModals.module.css';
import image from '../img/webSpp.webp';
import './modal.css';

const WebSPP = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={"Working group for formation and control implementation of the roadmap"}
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
                        </div>
                    </div>
                    <div className={style.description}>
                        <button onClick={onRequestClose} className={style.CloseModal}>
                            <ImCross />
                        </button>
                        <div className={style.descriptionContent}>
                            <h3>ПРИНЦИП РАБОТЫ</h3>
                            <p className={style.ModalP}>
                                Вся выработанная ФЭМ электроэнергия поступает через инвертор в электрическую сеть объекта, значительно уменьшая потребление электроэнергии из сети.
                            </p>
                            <div className={style.list}>
                                <h3>СОСТАВ УСТАНОВКИ</h3>
                                <ul>
                                    <li>фотоэлектрические модули</li>
                                    <li>сетевой инвертор</li>
                                    <li>система мониторинга (опция)</li>
                                    <li>устройство ограничения мощности (опция)</li>
                                </ul>
                            </div>
                            <div className={style.list}>
                                <h3>АКТУАЛЬНО ДЛЯ</h3>
                                <ul>
                                    <li>производственных предприятий</li>
                                    <li>частных домовладений с высокой стоимостью электроэнергии</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default WebSPP;