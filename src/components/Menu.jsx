import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Главная', end: true },
  { to: '/drift', label: 'Дрифт-такси' },
  { to: '/timeattack', label: 'Time Attack' },
  { to: '/forza', label: 'Forza Karting' },
];

function getClassName({ isActive }) {
  return isActive ? 'menu__item menu__item-active' : 'menu__item';
}

export default function Menu() {
  return (
    <nav className="menu">
      {links.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} className={getClassName}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
