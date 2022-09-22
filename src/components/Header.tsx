import React from 'react';
import logo from '../assets/img/logo.png';

const Header = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__wrapper">
					<a className="header__logo" href="/">
						<span className="header__logo-box">MB</span> Megobax
					</a>
					<div className="header__right">
						<input type="text" placeholder="Поиск..." className="header__search" />
						<a href="/">
							<img width={40} height={40} src={logo} alt="avatar" className="header__logo" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
