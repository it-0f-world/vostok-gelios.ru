// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import style from './sppInstallModals.module.css';
import image from '../img/parkingInstallation.webp';
import './modal.css';

const frontSpp = ({ isOpen, onRequestClose }) => {
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
                        <img src={image} alt="Крышная солнечная электростанция на для фасадов зданий, автомобильных парковок" />
                        {/* Overlay */}
                        <div className={style.overlay}></div>
                    </div>
                    <div className={style.slogan}>
                            <div className={style.squares}>
                                <div className={style.orangeSquare}></div>
                                <div className={style.blueTitle}><h6>Варианты размещения</h6></div>
                            </div>
                            <h4>СЭС ДЛЯ ФАСАДОВ ЗДАНИЙ, ПАРКОВОК</h4>
                            <p>
                                Системы навеса и карпорты позволяют оптимально использовать пространство парковочных зон. <br/>Данное решение обеспечивает удобную парковку, защиту автотранспорта, возможность размещения электрозаправочных станций, использующих «зелёную» электроэнергию, а также имеют уникальный эстетический вид, подчеркивающий направленность к использованию возобновляемых источников энергии.
                            </p>
                        </div>
                    <div className={style.description}>
                        <button onClick={onRequestClose} className={style.CloseModal}>
                            <ImCross />
                        </button>
                        <div className={style.descriptionContent}>
                            <h3>ДОСТОИНСТВА</h3>
                            <ul>
                                <li>Современный и лаконичный дизайн</li>
                                <li>Быстрое время сборки</li>
                                <li>Использование существующей инфраструктуры</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default frontSpp;