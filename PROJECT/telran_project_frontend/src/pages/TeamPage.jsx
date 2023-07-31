import React from 'react';
import { Container } from 'react-bootstrap';

import ImgBanner from '../ui/images/effective-leader-new-2022.jpeg';

function TeamPage() {
    return (
    	<div className="page">
			<Container>
				<h1 className="title">
					Our Team
				</h1>
				<img src={ImgBanner} alt="banner" />
				<h2>Title h2</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis qui aliquid odio quos! Laborum a, cupiditate qui possimus ea dicta officia nobis delectus nihil tempore quia quae recusandae quos.
				</p>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
					<li>Item 4</li>
				</ul>
				<h3>Title h3</h3>
				<blockquote>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore accusamus illum sunt nisi, architecto est debitis voluptates atque dicta? Quae aut fuga quasi quia cum voluptatem quas similique nobis!</p>
				</blockquote>
				<h4>Title h4</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis qui aliquid odio quos! Laborum a, cupiditate qui possimus ea dicta officia nobis delectus nihil tempore quia quae recusandae quos.
				</p>
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
					<li>Item 4</li>
				</ul>
				<h5>Title h5</h5>
				<blockquote>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore accusamus illum sunt nisi, architecto est debitis voluptates atque dicta? Quae aut fuga quasi quia cum voluptatem quas similique nobis!</p>
				</blockquote>
				<h6>Title h6</h6>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis qui odio quos! Laborum a, cupiditate qui possimus ea dicta officia nobis delectus nihil tempore quia quae recusandae quos.
				</p>
			</Container>
		</div>
    )
}

export default TeamPage;