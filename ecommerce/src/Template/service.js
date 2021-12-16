import React from 'react';
const Services = () => {
    return(<>
     <section id="featured" className="description_content">
            <div className="text-content container"> 
            	<div className="col-md-6">
            		<h1>Have a look to our dishes!</h1>
            		<div className="icon-hotdog fa-2x"></div>
            		<p className="desc-text">Each food is handmade at the crack of dawn, using only the simplest of ingredients to bring out smells and flavors that beckon the whole block. Stop by anytime and experience simplicity at its finest.</p>
            	</div>
            	<div className="col-md-6">
            		<ul className="image_box_story2">
            			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            				
            				<ol className="carousel-indicators">
            					<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
            					<li data-target="#carousel-example-generic" data-slide-to="2"></li>
            				</ol>

            				
            				<div className="carousel-inner">
            					<div className="item active">
            						<img src="images/slider1.jpg"  alt="..." />
            						<div className="carousel-caption">

            						</div>
            					</div>
            					<div className="item">
            						<img src="images/slider2.jpg" alt="..." />
            						<div className="carousel-caption">

            						</div>
            					</div>
            					<div className="item">
            						<img src="images/slider3.JPG" alt="..." />
            						<div className="carousel-caption">

            						</div>
            					</div>
            				</div>
            			</div>
            		</ul>
            	</div>
            </div>
        </section>
     </>)
}

export default Services;