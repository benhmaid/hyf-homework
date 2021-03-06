window.handleHomeRequest = () => {
   document.body.innerHTML = `
 <header>
    <div class="menu">
        <div class="logo">
            <a href="meals" data-navigo>
                <h1>mealinfo
               <samp>:</samp>
            </h1>
            </a>
        </div>
        <div>
            <ul> <a href="/" data-navigo>Home</a>
                <a href="meals" data-navigo>Meals</a>
                <button type="button" class="btn btn-outline ">See All Meals </button> 
                </a>
            </ul>
        </div>
    </div>
</header>
<div style="background: #002065" class="jumbotron big-banner bg-cover text-white ">
    <div class="container py-5 text-center ">
        <h1 class="display-4 font-weight-bold">Looking for a Meal</h1>

        <a href="meals" role="button" class="btn btn-primary m-3 px-5">See All Meals</a>

        <form action="" class="search-form py-4 m-auto col-lg-6">
            <div class="p-2 bg-light rounded rounded-pill shadow-sm mb-4">
                <div class="input-group">
                    <input type="search" id="input_meal" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light">
                    <div class="input-group-append">
                        <button id="button-addon1" class="meal-search" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </form>

    </div>
</div>

<div class="slider_meal  p-4 ">
    <div class="glider-contain multiple">
        <button class="glider-prev">
            <i class="fa fa-chevron-left"></i>
        </button>
        <div class="glider">
        </div>
        <button class="glider-next">
            <i class="fa fa-chevron-right"></i>
        </button>
        <div id="dots" class="glider-dots"></div>
    </div>
</div>
<div class="section_add_meal">
    <div class="container col-lg-4 justify-content-center">
        <div class="text-center">
            <h1 class="display-4 mb-4">Hungry yet? </h1>
            <p>See something you like? Have an idea for an amazing meal of your own, or even something chill and casual?</p>
        </div>
        <div class="row justify-content-center ">
            <div class="px-2"> <a href="/meals/new" class="shadow-sm px-4 p-2 btn btn-outline-info waves-effect" role="button" aria-pressed="true">Create a Meal</a>
            </div>
            <div class="px-2"> <a href="meals" data-navigo class="shadow-sm px-4 p-2 btn btn-outline-success waves-effect" role="button" aria-pressed="true">See All Meals</a>
            </div>
        </div>
    </div>
</div>
<div class="row mt-4 mx-auto col-8 justify-content-center">
    <h1> Reviews </h1>
</div>

<section class="pb-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-8 mx-auto">
                <div class="p-5 bg-white shadow rounded ">
                    <!-- Bootstrap carousel-->
                    <div class="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                        <!-- Bootstrap carousel indicators [nav] -->

                        <!-- Bootstrap inner [slides]-->
                        <div class="carousel-inner px-5 pb-4">
                            <!-- Carousel slide-->
                            <div class="carousel-item active">
                                <div class="media"><img class="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-1_ffutqr.jpg" alt="" width="75">
                                    <div class="media-body ml-3">
                                        <blockquote class="blockquote border-0 p-0">
                                            <p class="font-italic lead"> <i class="fa fa-quote-left mr-3 text-success"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <footer class="blockquote-footer">Someone famous in
                                                <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <!-- Carousel slide-->
                            <div class="carousel-item">
                                <div class="media"><img class="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-3_hdxocq.jpg" alt="" width="75">
                                    <div class="media-body ml-3">
                                        <blockquote class="blockquote border-0 p-0">
                                            <p class="font-italic lead"> <i class="fa fa-quote-left mr-3 text-success"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <footer class="blockquote-footer">Someone famous in
                                                <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <!-- Carousel slide-->
                            <div class="carousel-item">
                                <div class="media"><img class="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-2_gibm2s.jpg" alt="" width="75">
                                    <div class="media-body ml-3">
                                        <blockquote class="blockquote border-0 p-0">
                                            <p class="font-italic lead"> <i class="fa fa-quote-left mr-3 text-success"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <footer class="blockquote-footer">Someone famous in
                                                <cite title="Source Title">Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Bootstrap controls [dots]-->
                        <a class="carousel-control-prev width-auto" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <i class="fa fa-angle-left text-dark text-lg"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next width-auto" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <i class="fa fa-angle-right text-dark text-lg"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<footer id="footer">
	<div class="footer-container">
		<div class="social-icons">
			<ul>
				<li>
					<a href="https://www.facebook.com/ghofranebh90" class="social-icon">	<i class="fa fa-facebook"></i>
					</a>
				</li>
				<li>
					<a href="" class="social-icon">	<i class="fa fa-instagram"></i>
					</a>
				</li>
				<li>
					<a href="https://www.behance.net/Ghofranebh" class="social-icon">	<i class="fa fa-behance"></i>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/ghofranebenhmaid/" class="social-icon">	<i class="fa fa-linkedin"></i>
					</a>
				</li>
				<li>
					<a href="https://dribbble.com/Ghofrane" class="social-icon">	<i class="fa fa-dribbble"></i>
					</a>
				</li>
				<li>
					<a href="https://github.com/benhmaid" class="social-icon">	<i class="fa fa-github"></i>
					</a>
				</li>
			</ul>
		</div>
		<hr class="line" />
		<div>
			<h4>&copy; 2020 Ghofrane Ben Hmaid</h4>
		</div>
	</div>
</footer>
   `;

   const mealSearch = document.querySelector('.meal-search');
   function loadMeals() {
      fetch('/api/meals')
         .then((res) => res.json())
         .then((data) => {
            const search = document.querySelector('.search-form');
            search.addEventListener('submit', (e) => {
               e.preventDefault();
               let input = input_meal.value;

               const filterMeals = data.filter((meal) => {
                  if (meal.title.toUpperCase().includes(input.toUpperCase())) {
                     console.log(meal.title);
                     //const div = document.createElement('div');
                     let searchList = '';

                     searchList += `
					 <div class="card" style="width: 20rem;">
                    	<div class="card-body">
                    		<img class="card-img-top" src="https://source.unsplash.com/400x260?${meal.title}" alt="${meal.title}" />
                    		<h5 class="card-title">${meal.title}</h5>
                    		<p class="card-text">${meal.description}</p>
                    		<a href="meal/${meal.id}" class="btn btn-primary">Read More</a>
                    	</div>
                    </div>
               
                    `;
                     if (mealSearch.style.display === 'none') {
                        mealSearch.style.display = 'block';
                     } else {
                        mealSearch.style.display = 'none';
                     }

                     mealSearch.innerHTML = searchList;
                     return searchList;
                  }
               });
            });

            data.forEach((element) => {
               const carouselItem = document.querySelector('.glider-track');
               const div = document.createElement('figure');
               div.innerHTML = ` <div class="card" style="width: 20rem;">
             	                    <div class="card-body">
             	                    <img class="card-img-top" src="https://source.unsplash.com/400x260?${element.title}" alt="${element.title}" />
             	                    <h5 class="card-title">${element.title}</h5>
             	                    <p class="card-text">${element.description}</p>
             	                    <a href="meal/${element.id}" class="btn btn-primary">Read More</a>
             	                    </div>
                                  </div>`;
               carouselItem.appendChild(div);
            });
         });
   }

   function loadReviews() {
      fetch('/api/reviews')
         .then((res) => res.json())
         .then((data) => {
            const carouselReviews = document.querySelector('.carousel-inner');

            data.forEach((element) => {
               // const div = document.createElement('figure');
               const carouselRev = document.querySelector('.carousel-item');
               carouselRev.innerHTML = `  
               <div class="media"><img class="rounded-circle img-thumbnail" src="https://source.unsplash.com/400x400?${element.id}" alt="" width="75">
               <div class="media-body ml-3">
               <div><h4>${element.name}</h4></div>
                                        <blockquote class="blockquote border-0 p-0">
                                            <p class="font-italic lead"> <i class="fa fa-quote-left mr-3 text-success"></i>${element.description}</p>
                                            <footer class="blockquote-footer">Someone famous in
                                                <cite title="Source Title"> ${element.name}</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            
                        
                                `;
               carouselReviews.appendChild(carouselRev);
            });
         });
      //carouselReviews.innerHTML = '';
   }

   loadMeals();
   loadReviews();

   router.updatePageLinks();
};
