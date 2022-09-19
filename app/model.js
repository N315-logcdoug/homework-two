//This is my model and it handles all the service calls
var homeContent = `<section class="home-hero">
<p class="home-hero-title">Sewer Tours</p>
<p class="home-hero-sub">sample tagline to go under the title</p>
<p class="home-hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
<div class="home-hero-dark"></div>
<div class="home-hero-light"></div>
<a href="#" id="tour-btn"><button class="home-hero-button">
    View Tours
</button></a>
</section>
<section class="info">
<p class="info-title">Popular Right Now</p>
<p class="info-text">These are currently the most popular tours available on the site. Click on each of the images to learn more about the tour and claim your spot.</p>
<div class="info-boxes">
    <div class="info-box">
        <div class="info-box-img img-paris-1"></div>
        <p class="info-box-caption">Paris, France</p>
    </div>
    <div class="info-box">
        <div class="info-box-img img-saitama-1"></div>
        <p class="info-box-caption">Saitama, Japan</p>
    </div>
    <div class="info-box">
        <div class="info-box-img img-cologne-1"></div>
        <p class="info-box-caption">Cologne, Germany</p>
    </div>
</div>
<p class="info-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
<hr class="info-box-line">
</section>`;
var aboutContent = `<section class="about-hero">
<p class="about-hero-title">About Us</p>
<p class="about-hero-sub">When it rains no drains</p>
<p class="about-hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
<div class="about-hero-img"></div>
<div class="about-hero-dark"></div>
<div class="about-hero-light"></div>
</section>
<section class="info">
<p class="info-title">History</p>
<p class="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
<div class="info-boxes">
    <div class="info-box">
        <div class="info-box-img img-history-1"></div>
        <p class="info-box-caption">Boston, US</p>
    </div>
    <div class="info-box">
        <div class="info-box-img img-history-2"></div>
        <p class="info-box-caption">Paris, France</p>
    </div>
    <div class="info-box">
        <div class="info-box-img img-history-3"></div>
        <p class="info-box-caption">London, England</p>
    </div>
</div>
<p class="info-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
<hr class="info-box-line">
</section>
<section class="locations">
<hr>
<p class="locations-title">Locations</p>
<div class="locations-map-container">
    <div class="map">
        <div class="map-img"></div>
    </div>
    <div class="map-info">
        <div class="map-info-top">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
        </div>
        <div class="map-info-bottom">
            <p>✦ Headquarters Location</p>
            <p>✧ Location 2</p>
            <p>✧ Location 3</p>
            <p>✧ Location 4</p>
        </div>
    </div>
</div>
</section>
<section class="locations-gallery">
<div class="locations-gallery-content">
    <div class="location-img loc1"></div>
    <div class="location-img loc2"></div>
    <div class="location-img loc3"></div>
    <div class="location-img loc4"></div>
</div>

</section>`;
var toursContent = `<section class="tours-hero">
<p class="tours-hero-title">Tours</p>
<p class="tours-hero-sub">What makes us grate</p>
<p class="tours-hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
<div class="tours-hero-img"></div>
<div class="tours-hero-dark"></div>
<div class="tours-hero-light"></div>
</section>
<section class="tour-selection">
    <div class="tour-selection-container">
        <div class="tour-selection-row">
            <a href="#booking-paris"><div class="tour-selection-box">
                <div class="tour-selection-img select-img-1"></div>
                <p class="tour-selection-text">Paris, France</p>
            </div></a>
            <a href="#booking-cologne"><div class="tour-selection-box">
                <div class="tour-selection-img select-img-2"></div>
                <p class="tour-selection-text">Cologne, Germany</p>
            </div></a>
            <a href="#booking-vienna"><div class="tour-selection-box">
                <div class="tour-selection-img select-img-3"></div>
                <p class="tour-selection-text">Vienna, Austria</p>
            </div></a>
        </div>
        <div class="tour-selection-row">
            <a href="#booking-saitama"><div class="tour-selection-box">
                <div class="tour-selection-img select-img-4"></div>
                <p class="tour-selection-text">Saitama, Japan</p>
            </div></a>
            <a href="#booking-london"><div class="tour-selection-box">
                <div class="tour-selection-img select-img-5"></div>
                <p class="tour-selection-text">London, England</p>
            </div></a>
            <a href="#booking-toronto"><div class="tour-selection-box">
                <div class="tour-selection-img select-img-6"></div>
                <p class="tour-selection-text">Toronto, Canada</p>
            </div></a>
        </div>
    </div>
    <div class="tour-selection-dark"></div>
</section>
<section class="bookings">
    <section class="booking bg-1" id="booking-paris">
        <div class="booking-img bk-img-1"></div>
        <div class="booking-info">
            <p class="booking-title">Paris, France</p>
            <img src="images/5o5.png" alt="5 Stars" class="stars">
            <p class="booking-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor. </p>
            <button class="booking-btn">Book Now!</button>
        </div>
        <div class="booking-gradient"></div>
    </section>
    <section class="booking bg-2" id="booking-cologne">
        <div class="booking-img bk-img-2"></div>
        <div class="booking-info">
            <p class="booking-title">Cologne, Germany</p>
            <img src="images/5o5.png" alt="5 Stars" class="stars">
            <p class="booking-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor. </p>
            <button class="booking-btn">Book Now!</button>
        </div>
        <div class="booking-gradient"></div>
    </section>
    <section class="booking bg-3" id="booking-vienna">
        <div class="booking-img bk-img-3"></div>
        <div class="booking-info">
            <p class="booking-title">Vienna, Austria</p>
            <img src="images/45o5.png" alt="5 Stars" class="stars">
            <p class="booking-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor. </p>
            <button class="booking-btn">Book Now!</button>
        </div>
        <div class="booking-gradient"></div>
    </section>
    <section class="booking bg-4" id="booking-saitama">
        <div class="booking-img bk-img-4"></div>
        <div class="booking-info">
            <p class="booking-title">Saitama, Japan</p>
            <img src="images/45o5.png" alt="5 Stars" class="stars">
            <p class="booking-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor. </p>
            <button class="booking-btn">Book Now!</button>
        </div>
        <div class="booking-gradient"></div>
    </section>
    <section class="booking bg-5" id="booking-london">
        <div class="booking-img bk-img-5"></div>
        <div class="booking-info">
            <p class="booking-title">London, England</p>
            <img src="images/4o5.png" alt="5 Stars" class="stars">
            <p class="booking-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor. </p>
            <button class="booking-btn">Book Now!</button>
        </div>
        <div class="booking-gradient"></div>
    </section>
    <section class="booking bg-6" id="booking-toronto">
        <div class="booking-img bk-img-6"></div>
        <div class="booking-info">
            <p class="booking-title">Toronto, Canada</p>
            <img src="images/4o5.png" alt="5 Stars" class="stars">
            <p class="booking-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor. </p>
            <button class="booking-btn">Book Now!</button>
        </div>
        <div class="booking-gradient"></div>
    </section>
    <div class="bookings-bottom-gradient"></div>
</section>`;
var contactContent = `<section class="contact-hero">
<p class="contact-hero-title">Contact</p>
<p class="contact-hero-sub">Sample tagline for contact page</p>
<p class="contact-hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dignissim sapien vel fermentum. Praesent et consectetur tortor.</p>
<div class="contact-hero-dark"></div>
<div class="contact-hero-light"></div>
<form action="#">
    <input type="email" placeholder="Email..." class="contact-email">
    <textarea name="message" class="contact-message" id="message" cols="30" rows="10" placeholder="Message..."></textarea>
    <input type="submit" class="contact-submit">
</form>
</section>`;

function setCurrentPageContent(pageID) {
  let contentName = pageID + "Content";
  $("#app").html(eval(contentName));
}

export { setCurrentPageContent };
