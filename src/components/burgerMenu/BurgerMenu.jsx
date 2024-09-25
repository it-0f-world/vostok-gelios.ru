import { scaleDown as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BiMap} from 'react-icons/bi';
import { GrMemory, GrServers, GrSelection, GrCatalog } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { RiHomeOfficeLine } from "react-icons/ri";
import './burgerMenu.css';
import LogoWhite from '../../assets/images/logo/Logo-white-pure.svg';

const BurgerMenu = (props) => {
    return (
        <Menu {...props}>
          <div className='bm-logo'>
            <NavLink to="/">
              <img src={LogoWhite} alt="Logo" style={{ width: '16rem' }} />
              <h4 style={{ textTransform: 'uppercase', fontWeight: 'normal', fontSize: '1.7rem' }}>Восток Гелиос</h4>
            </NavLink>
          </div>
          <div>
            <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrMemory style={{ fontSize: '2.1rem', marginBottom: '-.4rem' }}/> Солнечные электростанции</NavLink>
            <NavLink to="/industrial" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrServers style={{ paddingRight: '.25rem' }}/> Предприятиям</NavLink>
            <NavLink to="/household" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrSelection style={{ paddingRight: '.25rem' }}/> Домовладениям</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrCatalog style={{ paddingRight: '.25rem' }}/> Портфолио</NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap style={{ paddingRight: '.25rem' }}/> Контакты</NavLink>
          </div>
          <div className='bm-address'>
            <p><RiHomeOfficeLine style={{ fontSize: '1.6em'}} /> 143930, Московская обл., г. Балашиха, мкр. Салтыковка, ш. Разинское, д. 69, помещ. 171, офис 522А</p>
            <p><FiPhoneCall style={{ fontSize: '1.5em'}} /> +7 (495) 000-00-00</p>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;