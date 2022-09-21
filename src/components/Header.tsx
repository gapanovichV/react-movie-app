import React from 'react';
import logo from './logo.svg';

const Header = () => {
	return (
		<div className="header">
			<div className="container">
      <div className="header__wrapper">
				<a className="header__logo" href="/">
					Megobax
				</a>
				<div className="header__right">
					<input type="text" placeholder="Поиск..." className="search" />
					<a href="/">
						<img width={25} src={logo} alt="avatar" className="avatar" />
					</a>
				</div>
			</div>
      </div>
		</div>
	);
};

export default Header;
