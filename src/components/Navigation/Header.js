import { Link } from 'react-router-dom';

const Header = () => {
  const link = [
    { path: '/', name: 'Home' },
    { path: '/mypokemon', name: 'My Pokemon' },
  ];
  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto text-white">
        <div className="flex items-center">
          <div className="w-3/12 font-semibold text-2xl tracking-widest">
            <Link to="/">Next - Poke API</Link>
          </div>
          <div className="w-6/12">
            <ul className="flex items-center space-x-10 py-8 justify-center">
              {link.map(({ path, name }) => {
                return (
                  <li key={path}>
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
