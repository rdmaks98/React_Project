import React from 'react';
const Story = () => {
    return(<>
        <section id="story" className="">
            <div className="text-content container">
                <div className="col-md-6">
                    <h1>About us</h1>
                    <div className="fa fa-cutlery fa-2x"></div>
                    <p className="desc-text">Restaurant is a place for simplicity. Good food, good beer, and good service. Simple is the name of the game, and we’re good at finding it in all the right places, even in your dining experience. We’re a small group from Denver, Colorado who make simple food possible. Come join us and see what simplicity tastes like.</p>
                </div>
                <div className="col-md-6">
                    <div className="img-section">
                        <img src="images/kabob.jpg" width="250" height="220" alt=""/>
                        <img src="images/limes.jpg" width="250" height="220" alt=""/>
                        <div className="img-section-space"></div>
                        <img src="images/radish.jpg"  width="250" height="220" alt=""/>
                        <img src="images/corn.jpg"  width="250" height="220" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section id ="pricing" className="description_content">
            
            <div className="text-content container"> 
            	<div className="container">
            		<div className="row">
            			<div id="w">
            				<ul id="filter-list" className="clearfix">
            					<li className="filter" data-filter="all">All</li>
            					<li className="filter" data-filter="breakfast">Breakfast</li>
            					<li className="filter" data-filter="special">Special</li>
            					<li className="filter" data-filter="desert">Desert</li>
            					<li className="filter" data-filter="dinner">Dinner</li>
            				</ul> 
            				<ul id="portfolio">
            					<li className="item breakfast"><img src="images/food_icon01.jpg" alt="Food" />
            						<h2 className="white">$20</h2>
            					</li>

            					<li className="item dinner special"><img src="images/food_icon02.jpg" alt="Food" />
            						<h2 className="white">$20</h2>
            					</li>
            					<li className="item dinner breakfast"><img src="images/food_icon03.jpg" alt="Food" />
            						<h2 className="white">$18</h2>
            					</li>
            					<li className="item special"><img src="images/food_icon04.jpg" alt="Food" />
            						<h2 className="white">$15</h2>
            					</li>
            					<li className="item dinner"><img src="images/food_icon05.jpg" alt="Food" />
            						<h2 className="white">$20</h2>
            					</li>
            					<li className="item special"><img src="images/food_icon06.jpg" alt="Food" />
            						<h2 className="white">$22</h2>
            					</li>
            					<li className="item desert"><img src="images/food_icon07.jpg" alt="Food" />
            						<h2 className="white">$32</h2>
            					</li>
            					<li className="item desert breakfast"><img src="images/food_icon08.jpg" alt="Food" />
            						<h2 className="white">$38</h2>
            					</li>
            				</ul>
            			</div>
            		</div>
            	</div>
            </div>  
    </section>
    </>
    )
}

export default Story;
