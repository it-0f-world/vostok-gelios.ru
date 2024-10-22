// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import style from './sppTypesModals.module.css';
import image from '../img/hybridSPP.webp';
import './modal.css';

const hybridSPP = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={"Автономная гибридная электроустановка. Солнечная электростанция с резервным вводом генератора на ископаемом топливе"}
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
                        <img src={image} alt="Схема работы. Автономная гибридная электроустановка. Солнечная электростанция с резервным вводом генератора на ископаемом топливе" />
                        <div className={style.slogan}>
                            <div className={style.squares}>
                                <div className={style.orangeSquare}></div>
                                <div className={style.blueTitle}><h6>Типы СЭС</h6></div>
                                
                            </div>
                            <h4>АВТОНОМНАЯ <br/>ГИБРИДНАЯ <br/>ЭЛЕКТРОУСТАНОВКА</h4>
                        </div>
                    </div>
                    <div className={style.description}>
                        <button onClick={onRequestClose} className={style.CloseModal}>
                            <ImCross />
                        </button>
                        <div className={style.descriptionContent}>
                            <h3>ПРИНЦИП РАБОТЫ</h3>
                            <p className={style.ModalP}>
                                Энергия солнца используется для питания объекта днем, а также для зарядки АКБ. Вечером и ночью для электроснабжения используется энергия, накопленная АКБ. В случае, если для питания объекта не хватает энергии солнца и АКБ, то автоматически происходит запуск генератора.
                            </p>
                            <div className={style.list}>
                                <h3>СОСТАВ УСТАНОВКИ</h3>
                                <ul>
                                    <li>фотоэлектрические модули</li>
                                    <li>гибридный инвертор</li>
                                    <li>система аккумуляторных батарей</li>
                                    <li>дизельный или бензиновый генератор</li>
                                    <li>система мониторинга (опция)</li>
                                </ul>
                            </div>
                            <div className={style.list}>
                                <h3>АКТУАЛЬНО ДЛЯ</h3>
                                <ul>
                                    <li>районов без централизованного электроснабжения</li>
                                    <li>реконструкции дизельных электростанций</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default hybridSPP;