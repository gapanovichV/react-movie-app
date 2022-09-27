import React from 'react';
import poster from '../assets/img/poster.jpg';

const Main = () => {
	return (
		<div className="main">
			<div className="container">
				<div className="movie">
					<a href="/" className="movie-link">
						<div className="card">
							<img src={poster} height="270" alt="Постер" />
							<div className="card__text">
								<p className="card__text-title">Огонь</p>
								<p className="card__text-year">2022</p>
								<p className="card__text-genre">Боевик</p>
								<p className="card__text-descr">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit
									mollitia numquam dolorem, at odit aliquam officiis inventore eius alias ducimus
									ipsam aperiam repudiandae qui adipisci sapiente tempore incidunt soluta!
								</p>
							</div>
						</div>
					</a>
					<a href="/" className="movie-link">
						<div className="card">
							<img src={poster} height="270" alt="Постер" />
							<div className="card__text">
								<p className="card__text-title">Огонь</p>
								<p className="card__text-year">2022</p>
								<p className="card__text-genre">Боевик</p>
								<p className="card__text-descr">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis velit
									mollitia numquam dolorem, at odit aliquam officiis inventore eius alias ducimus
									ipsam aperiam repudiandae qui adipisci sapiente tempore incidunt soluta!
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Main;
