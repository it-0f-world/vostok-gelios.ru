// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import style from './sppInstallModals.module.css';
import image from '../img/earthInstallation.webp';
import './modal.css';

const earthSpp = ({ isOpen, onRequestClose }) => {
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
                            <h4>СЭС НА ЗЕМЛЕ</h4>
                            <p>
                                Данный тип конструкции СЭС актуален при наличии свободных земельных площадей. <br/>Благодаря возможности расположить фотоэлектрические модули под оптимальным углом к горизонту, данный тип СЭС обладает наибольшим КПД. Также возможно применение одноосевых или двухосевых трекерных систем, повышающих КПД от 10 до 40%. <br/>Как правило, применяется забивной тип свай опорных конструкций, что позволяет снизить стоимость и сроки проведения монтажных работ.
                            </p>
                        </div>
                    <div className={style.description}>
                        <button onClick={onRequestClose} className={style.CloseModal}>
                            <ImCross />
                        </button>
                        <div className={style.descriptionContent}>
                            <h3>ПРЕИМУЩЕСТВА</h3>
                            <ul>
                                <li>Простота конструкции</li>
                                <li>Для изготовления опорных конструкций используются горячеоцинкованная сталь с толщиной цинка 80-250 мкм</li>
                                <li>Высокий КПД за счёт оптимального расположения ФЭМ</li>
                                <li>Возможность применения трекерных систем</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default earthSpp;