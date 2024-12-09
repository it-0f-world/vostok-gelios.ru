// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import style from './sppInstallModals.module.css';
import image from '../img/flatRoofInstall.webp';
import './modal.css';

const flatRoofSpp = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={"Крышная солнечная электростанция на плоской кровле"}
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
                        <img src={image} alt="Крышная солнечная электростанция на плоской кровле" />
                        {/* Overlay */}
                        <div className={style.overlay}></div>
                    </div>
                    <div className={style.slogan}>
                            <div className={style.squares}>
                                <div className={style.orangeSquare}></div>
                                <div className={style.blueTitle}><h6>Варианты размещения</h6></div>
                                <button onClick={onRequestClose} className={style.CloseModalMobile}>
                                    <ImCross />
                                </button>
                            </div>
                            <h4>КРЫШНАЯ СЭС ДЛЯ ПЛОСКОЙ КРОВЛИ</h4>
                            <p>
                                Установка СЭС на кровле актуальна для торговых, логистических центров, когда кровля практически не используется другими инженерными системами. При таком размещении крепление опорных конструкций к поверхности кровли отсутствует: фиксация положения осуществляется за счёт пригрузов, подобранных из расчёта ветровой нагрузки. Наиболее современным решением является установка солнечных модулей с направлением «восток-запад». У данной компоновки более высокий коэффициент полезного использования площади и меньшая парусность.
                            </p>
                        </div>
                    <div className={style.description}>
                        <button onClick={onRequestClose} className={style.CloseModal}>
                            <ImCross />
                        </button>
                        <div className={style.descriptionContent}>
                            <h3>РЕШЕНИЕ ПОЗВОЛЯЕТ</h3>
                            <ul>
                                <li>Установить на 20% больше модулей на единицу площади</li>
                                <li>Минимизировать затенение</li>
                                <li>Увеличить генерацию в утренние и вечерние часы</li>
                                <li>Уменьшить количество металла в опорной конструкции</li>
                                <li>Размещать СЭС на всех видах покрытий, включая мембранные</li>
                                <li>Не нарушать покрытие кровли при монтаже</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default flatRoofSpp;