import { pushRotate as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BiMap} from 'react-icons/bi';
import { GrGrid, GrCpu, GrMemory, GrServers, GrSelection, GrCatalog, GrCodeSandbox } from "react-icons/gr";
import './burgerMenu.css';

const BurgerMenu = (props) => {
    return (
        <Menu {...props}>
          <div className='bm-logo'>
            <NavLink to="/">
              <GrCodeSandbox style={{ fontSize: '6rem' }}/>
            </NavLink>
          </div>
          <div style={{
            fontSize: '1.6rem',
            marginTop: '.75rem',
            marginLeft: '.2rem',
          }}>
            <div>
              <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrMemory style={{ fontSize: '2.1rem', marginBottom: '-.4rem' }}/> Солнечные электростанции</NavLink>
              <NavLink to="/industrial" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrServers style={{ paddingRight: '.25rem' }}/> Предприятиям</NavLink>
              <NavLink to="/household" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrSelection style={{ paddingRight: '.25rem' }}/> Домовладениям</NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrCatalog style={{ paddingRight: '.25rem' }}/> Портфолио</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap style={{ paddingRight: '.25rem' }}/> Контакты</NavLink>
            </div>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;