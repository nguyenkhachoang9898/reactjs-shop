
const Home = () => {
    return (
        <div>
            <div className="header section">
                {/* Header Top Start */}
                <div className="header-top bg-light">
                    <div className="container">
                        <div className="row row-cols-xl-2 align-items-center">
                            {/* Header Top Language, Currency & Link Start */}
                            <div className="col d-none d-lg-block">
                                <div className="header-top-lan-curr-link">
                                    <div className="header-top-lan dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown">English <i className="fa fa-angle-down" /></button>
                                        <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                                            <li><a className="dropdown-item" href="#">English</a></li>
                                            <li><a className="dropdown-item" href="#">Japanese</a></li>
                                            <li><a className="dropdown-item" href="#">Arabic</a></li>
                                            <li><a className="dropdown-item" href="#">Romanian</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-top-curr dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown">USD <i className="fa fa-angle-down" /></button>
                                        <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                                            <li><a className="dropdown-item" href="#">USD</a></li>
                                            <li><a className="dropdown-item" href="#">Pound</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-top-links">
                                        <span>Call Us</span><a href="#"> 01234567</a>
                                    </div>
                                </div>
                            </div>
                            {/* Header Top Language, Currency & Link End */}
                            {/* Header Top Message Start */}
                            <div className="col">
                                <p className="header-top-message">Ends Monday: $100 off any dining table + 2 sets of chairs. <a href="shop-grid.html">Shop Now</a></p>
                            </div>
                            {/* Header Top Message End */}
                        </div>
                    </div>
                </div>
                {/* Header Top End */}
                {/* Header Bottom Start */}
                <div className="header-bottom">
                    <div className="header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* Header Logo Start */}
                                <div className="col-xl-2 col-6">
                                    <div className="header-logo">
                                        <a href="index.html"><img src="assets/images/logo/logo.png" alt="Site Logo" /></a>
                                    </div>
                                </div>
                                {/* Header Logo End */}
                                {/* Header Menu Start */}
                                <div className="col-xl-8 d-none d-xl-block">
                                    <div className="main-menu position-relative">
                                        <ul>
                                            <li className="has-children">
                                                <a href="#"><span>Home</span> <i className="fa fa-angle-down" /></a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="index-2.html">Home 2</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children position-static">
                                                <a href="#"><span>Shop</span> <i className="fa fa-angle-down" /></a>
                                                <ul className="mega-menu row-cols-4">
                                                    <li className="col">
                                                        <h4 className="mega-menu-title">Shop Layout</h4>
                                                        <ul className="mb-n2">
                                                            <li><a href="shop-grid.html">Shop Grid</a></li>
                                                            <li><a href="shop-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                            <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                            <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a></li>
                                                            <li><a href="shop-list-right-sidebar.html">List Right Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col">
                                                        <h4 className="mega-menu-title">Product Layout</h4>
                                                        <ul className="mb-n2">
                                                            <li><a href="single-product.html">Single Product</a></li>
                                                            <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                                            <li><a href="single-product-group.html">Single Product Group</a></li>
                                                            <li><a href="single-product-normal.html">Single Product Normal</a></li>
                                                            <li><a href="single-product-affiliate.html">Single Product Affiliate</a></li>
                                                            <li><a href="single-product-slider.html">Single Product Slider</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col">
                                                        <h4 className="mega-menu-title">Product Layout</h4>
                                                        <ul className="mb-n2">
                                                            <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                            <li><a href="single-product-gallery-right.html">Gallery Right</a></li>
                                                            <li><a href="single-product-tab-style-left.html">Tab Style Left</a></li>
                                                            <li><a href="single-product-tab-style-right.html">Tab Style Right</a></li>
                                                            <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                            <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col">
                                                        <h4 className="mega-menu-title">Other Pages</h4>
                                                        <ul className="mb-n2">
                                                            <li><a href="my-account.html">My Account</a></li>
                                                            <li><a href="login-register.html">Loging | Register</a></li>
                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="compare.html">Compare</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <a href="#"><span>Pages</span> <i className="fa fa-angle-down" /></a>
                                                <ul className="sub-menu">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="404-error.html">404 Error</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <a href="#"><span>Blog</span> <i className="fa fa-angle-down" /></a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html"> <span>Contact</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Header Menu End */}
                                {/* Header Action Start */}
                                <div className="col-xl-2 col-6">
                                    <div className="header-actions">
                                        {/* Search Header Action Button Start */}
                                        <a className="header-action-btn header-action-btn-search"><i className="pe-7s-search" /></a>
                                        {/* Search Header Action Button End */}
                                        {/* User Account Header Action Button Start */}
                                        <a href="login-register.html" className="header-action-btn d-none d-md-block"><i className="pe-7s-user" /></a>
                                        {/* User Account Header Action Button End */}
                                        {/* Wishlist Header Action Button Start */}
                                        <a href="wishlist.html" className="header-action-btn header-action-btn-wishlist d-none d-md-block">
                                            <i className="pe-7s-like" />
                                        </a>
                                        {/* Wishlist Header Action Button End */}
                                        {/* Shopping Cart Header Action Button Start */}
                                        <a className="header-action-btn header-action-btn-cart">
                                            <i className="pe-7s-shopbag" />
                                            <span className="header-action-num">3</span>
                                        </a>
                                        {/* Shopping Cart Header Action Button End */}
                                        {/* Mobile Menu Hambarger Action Button Start */}
                                        <a className="header-action-btn header-action-btn-menu d-xl-none d-lg-block">
                                            <i className="fa fa-bars" />
                                        </a>
                                        {/* Mobile Menu Hambarger Action Button End */}
                                    </div>
                                </div>
                                {/* Header Action End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Bottom End */}
                {/* Mobile Menu Start */}
                <div className="mobile-menu-wrapper">
                    <div className="offcanvas-overlay" />
                    {/* Mobile Menu Inner Start */}
                    <div className="mobile-menu-inner">
                        {/* Button Close Start */}
                        <div className="offcanvas-btn-close">
                            <i className="pe-7s-close" />
                        </div>
                        {/* Button Close End */}
                        {/* Mobile Menu Start */}
                        <div className="mobile-navigation">
                            <nav>
                                <ul className="mobile-menu">
                                    <li className="has-children">
                                        <a href="#">Home <i className="fa fa-angle-down" /></a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home One</a></li>
                                            <li><a href="index-2.html">Home Two</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">Shop <i className="fa fa-angle-down" aria-hidden="true" /></a>
                                        <ul className="dropdown">
                                            <li><a href="shop-grid.html">Shop Grid</a></li>
                                            <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                            <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                            <li><a href="shop-list-fullwidth.html">Shop List Fullwidth</a></li>
                                            <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                            <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="cart.html">Shopping Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="compare.html">Compare</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">Product <i className="fa fa-angle-down" aria-hidden="true" /></a>
                                        <ul className="dropdown">
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                            <li><a href="single-product-group.html">Single Product Group</a></li>
                                            <li><a href="single-product-normal.html">Single Product Normal</a></li>
                                            <li><a href="single-product-affiliate.html">Single Product Affiliate</a></li>
                                            <li><a href="single-product-slider.html">Single Product Slider</a></li>
                                            <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                            <li><a href="single-product-gallery-right.html">Gallery Right</a></li>
                                            <li><a href="single-product-tab-style-left.html">Tab Style Left</a></li>
                                            <li><a href="single-product-tab-style-right.html">Tab Style Right</a></li>
                                            <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                            <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">Pages <i className="fa fa-angle-down" aria-hidden="true" /></a>
                                        <ul className="dropdown">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="faq.html">Faq</a></li>
                                            <li><a href="404-error.html">Error 404</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="login-register.html">Loging | Register</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-children">
                                        <a href="#">Blog <i className="fa fa-angle-down" aria-hidden="true" /></a>
                                        <ul className="dropdown">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                            <li><a href="blog-details-sidebar.html">Blog Details Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        {/* Mobile Menu End */}
                        {/* Language, Currency & Link Start */}
                        <div className="offcanvas-lag-curr mb-6">
                            <h2 className="title">Languages</h2>
                            <div className="header-top-lan-curr-link">
                                <div className="header-top-lan dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown">English <i className="fa fa-angle-down" /></button>
                                    <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                                        <li><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Japanese</a></li>
                                        <li><a className="dropdown-item" href="#">Arabic</a></li>
                                        <li><a className="dropdown-item" href="#">Romanian</a></li>
                                    </ul>
                                </div>
                                <div className="header-top-curr dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown">USD <i className="fa fa-angle-down" /></button>
                                    <ul className="dropdown-menu dropdown-menu-right animate slideIndropdown">
                                        <li><a className="dropdown-item" href="#">USD</a></li>
                                        <li><a className="dropdown-item" href="#">Pound</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Language, Currency & Link End */}
                        {/* Contact Links/Social Links Start */}
                        <div className="mt-auto">
                            {/* Contact Links Start */}
                            <ul className="contact-links">
                                <li><i className="fa fa-phone" /><a href="#"> +012 3456 789 123</a></li>
                                <li><i className="fa fa-envelope-o" /><a href="#"> info@example.com</a></li>
                                <li><i className="fa fa-clock-o" /> <span>Monday - Sunday 9.00 - 18.00</span> </li>
                            </ul>
                            {/* Contact Links End */}
                            {/* Social Widget Start */}
                            <div className="widget-social">
                                <a title="Facebook" href="#"><i className="fa fa-facebook-f" /></a>
                                <a title="Twitter" href="#"><i className="fa fa-twitter" /></a>
                                <a title="Linkedin" href="#"><i className="fa fa-linkedin" /></a>
                                <a title="Youtube" href="#"><i className="fa fa-youtube" /></a>
                                <a title="Vimeo" href="#"><i className="fa fa-vimeo" /></a>
                            </div>
                            {/* Social Widget Ende */}
                        </div>
                        {/* Contact Links/Social Links End */}
                    </div>
                    {/* Mobile Menu Inner End */}
                </div>
                {/* Mobile Menu End */}
                {/* Offcanvas Search Start */}
                <div className="offcanvas-search">
                    <div className="offcanvas-search-inner">
                        {/* Button Close Start */}
                        <div className="offcanvas-btn-close">
                            <i className="pe-7s-close" />
                        </div>
                        {/* Button Close End */}
                        {/* Offcanvas Search Form Start */}
                        <form className="offcanvas-search-form" action="#">
                            <input type="text" placeholder="Search Product..." className="offcanvas-search-input" />
                        </form>
                        {/* Offcanvas Search Form End */}
                    </div>
                </div>
                {/* Offcanvas Search End */}
                {/* Cart Offcanvas Start */}
                <div className="cart-offcanvas-wrapper">
                    <div className="offcanvas-overlay" />
                    {/* Cart Offcanvas Inner Start */}
                    <div className="cart-offcanvas-inner">
                        {/* Button Close Start */}
                        <div className="offcanvas-btn-close">
                            <i className="pe-7s-close" />
                        </div>
                        {/* Button Close End */}
                        {/* Offcanvas Cart Content Start */}
                        <div className="offcanvas-cart-content">
                            {/* Offcanvas Cart Title Start */}
                            <h2 className="offcanvas-cart-title mb-10">Shopping Cart</h2>
                            {/* Offcanvas Cart Title End */}
                            {/* Cart Product/Price Start */}
                            <div className="cart-product-wrapper mb-6">
                                {/* Single Cart Product Start */}
                                <div className="single-cart-product">
                                    <div className="cart-product-thumb">
                                        <a href="single-product.html"><img src="assets/images/products/small-product/1.jpg" alt="Cart Product" /></a>
                                    </div>
                                    <div className="cart-product-content">
                                        <h3 className="title"><a href="single-product.html">Brother Hoddies in Grey</a></h3>
                                        <span className="price">
                                            <span className="new">$38.50</span>
                                            <span className="old">$40.00</span>
                                        </span>
                                    </div>
                                </div>
                                {/* Single Cart Product End */}
                                {/* Product Remove Start */}
                                <div className="cart-product-remove">
                                    <a href="#"><i className="fa fa-trash" /></a>
                                </div>
                                {/* Product Remove End */}
                            </div>
                            {/* Cart Product/Price End */}
                            {/* Cart Product/Price Start */}
                            <div className="cart-product-wrapper mb-6">
                                {/* Single Cart Product Start */}
                                <div className="single-cart-product">
                                    <div className="cart-product-thumb">
                                        <a href="single-product.html"><img src="assets/images/products/small-product/2.jpg" alt="Cart Product" /></a>
                                    </div>
                                    <div className="cart-product-content">
                                        <h3 className="title"><a href="single-product.html">Basic Jogging Shorts</a></h3>
                                        <span className="price">
                                            <span className="new">$14.50</span>
                                            <span className="old">$18.00</span>
                                        </span>
                                    </div>
                                </div>
                                {/* Single Cart Product End */}
                                {/* Product Remove Start */}
                                <div className="cart-product-remove">
                                    <a href="#"><i className="fa fa-trash" /></a>
                                </div>
                                {/* Product Remove End */}
                            </div>
                            {/* Cart Product/Price End */}
                            {/* Cart Product/Price Start */}
                            <div className="cart-product-wrapper mb-6">
                                {/* Single Cart Product Start */}
                                <div className="single-cart-product">
                                    <div className="cart-product-thumb">
                                        <a href="single-product.html"><img src="assets/images/products/small-product/3.jpg" alt="Cart Product" /></a>
                                    </div>
                                    <div className="cart-product-content">
                                        <h3 className="title"><a href="single-product.html">Enjoy The Rest T-Shirt</a></h3>
                                        <span className="price">
                                            <span className="new">$20.00</span>
                                            <span className="old">$21.00</span>
                                        </span>
                                    </div>
                                </div>
                                {/* Single Cart Product End */}
                                {/* Product Remove Start */}
                                <div className="cart-product-remove">
                                    <a href="#"><i className="fa fa-trash" /></a>
                                </div>
                                {/* Product Remove End */}
                            </div>
                            {/* Cart Product/Price End */}
                            {/* Cart Product Total Start */}
                            <div className="cart-product-total">
                                <span className="value">Subtotal</span>
                                <span className="price">220$</span>
                            </div>
                            {/* Cart Product Total End */}
                            {/* Cart Product Button Start */}
                            <div className="cart-product-btn mt-4">
                                <a href="cart.html" className="btn btn-dark btn-hover-primary rounded-0 w-100">View cart</a>
                                <a href="checkout.html" className="btn btn-dark btn-hover-primary rounded-0 w-100 mt-4">Checkout</a>
                            </div>
                            {/* Cart Product Button End */}
                        </div>
                        {/* Offcanvas Cart Content End */}
                    </div>
                    {/* Cart Offcanvas Inner End */}
                </div>
                {/* Cart Offcanvas End */}
            </div>
            {/* Hero/Intro Slider Start */}
            <div className="section">
                <div className="hero-slider">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* Hero Slider Item Start */}
                            <div className="hero-slide-item swiper-slide">
                                {/* Hero Slider Bg Image Start */}
                                <div className="hero-slide-bg">
                                    <img src="assets/images/slider/slide-1.jpg" alt="Slider Image" />
                                </div>
                                {/* Hero Slider Bg image End */}
                                {/* Hero Slider Content Start */}
                                <div className="container">
                                    <div className="hero-slide-content">
                                        <h2 className="title">
                                            Women New <br />
                            Collection
                        </h2>
                                        <p>Up to 70% off selected Product</p>
                                        <a href="shop-grid.html" className="btn btn-lg btn-primary btn-hover-dark">Shop Now</a>
                                    </div>
                                </div>
                                {/* Hero Slider Content End */}
                            </div>
                            {/* Hero Slider Item End */}
                            {/* Hero Slider Item Start */}
                            <div className="hero-slide-item swiper-slide">
                                {/* Hero Slider Bg Image Start */}
                                <div className="hero-slide-bg">
                                    <img src="assets/images/slider/slide-1-2.jpg" alt="Slider Image" />
                                </div>
                                {/* Hero Slider Bg Image End */}
                                {/* Hero Slider Content Start */}
                                <div className="container">
                                    <div className="hero-slide-content">
                                        <h2 className="title">
                                            Trend Fashion<br />
                            Collection
                        </h2>
                                        <p>Up to 40% off selected Product</p>
                                        <a href="shop-grid.html" className="btn btn-lg btn-primary btn-hover-dark">Shop Now</a>
                                    </div>
                                </div>
                                {/* Hero Slider Content End */}
                            </div>
                            {/* Hero Slider Item End */}
                        </div>
                        {/* Swiper Pagination Start */}
                        <div className="swiper-pagination d-md-none" />
                        {/* Swiper Pagination End */}
                        {/* Swiper Navigation Start */}
                        <div className="home-slider-prev swiper-button-prev main-slider-nav d-md-flex d-none"><i className="pe-7s-angle-left" /></div>
                        <div className="home-slider-next swiper-button-next main-slider-nav d-md-flex d-none"><i className="pe-7s-angle-right" /></div>
                        {/* Swiper Navigation End */}
                    </div>
                </div>
            </div>
            {/* Hero/Intro Slider End */}
            {/* Banner Section Start */}
            <div className="section section-margin">
                <div className="container">
                    {/* Banners Start */}
                    <div className="row mb-n6">
                        {/* Banner Start */}
                        <div className="col-lg-4 col-md-6 col-12 mb-6">
                            <div className="banner" data-aos="fade-up" data-aos-delay={300}>
                                <div className="banner-image">
                                    <a href><img src="assets/images/banner/banner-1.jpg" alt="" /></a>
                                </div>
                                <div className="info">
                                    <div className="small-banner-content">
                                        <h4 className="sub-title">Sun Hat</h4>
                                        <h3 className="title">Get Offer <br />For Summer</h3>
                                        <a href="shop-grid.html" className="btn btn-dark btn-sm">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Banner End */}
                        {/* Banner Start */}
                        <div className="col-lg-4 col-md-6 col-12 mb-6">
                            <div className="banner" data-aos="fade-up" data-aos-delay={500}>
                                <div className="banner-image">
                                    <a href><img src="assets/images/banner/banner-2.jpg" alt="" /></a>
                                </div>
                                <div className="info">
                                    <div className="small-banner-content">
                                        <h4 className="sub-title">Ladies Bag</h4>
                                        <h3 className="title">Buy One <br />Get One Free</h3>
                                        <a href="shop-grid.html" className="btn btn-dark btn-sm">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Banner End */}
                        {/* Banner Start */}
                        <div className="col-lg-4 col-md-6 col-12 mb-6">
                            <div className="banner" data-aos="fade-up" data-aos-delay={700}>
                                <div className="banner-image">
                                    <a href><img src="assets/images/banner/banner-3.jpg" alt="" /></a>
                                </div>
                                <div className="info">
                                    <div className="small-banner-content">
                                        <h4 className="sub-title">Smart Watch</h4>
                                        <h3 className="title">20% Off <br />Smart Watch</h3>
                                        <a href="shop-grid.html" className="btn btn-dark btn-sm">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Banner End */}
                    </div>
                    {/* Banners End */}
                </div>
            </div>
            {/* Banner Section End */}
            {/* Feature Section Start */}
            <div className="section">
                <div className="container">
                    <div className="feature-wrap">
                        <div className="row row-cols-lg-4 row-cols-xl-auto row-cols-sm-2 row-cols-1 justify-content-between mb-n5">
                            {/* Feature Start */}
                            <div className="col mb-5" data-aos="fade-up" data-aos-delay={300}>
                                <div className="feature">
                                    <div className="icon text-primary align-self-center">
                                        <img src="assets/images/icons/feature-icon-2.png" alt="Feature Icon" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Free Shipping</h5>
                                        <p>Free shipping on all order</p>
                                    </div>
                                </div>
                            </div>
                            {/* Feature End */}
                            {/* Feature Start */}
                            <div className="col mb-5" data-aos="fade-up" data-aos-delay={500}>
                                <div className="feature">
                                    <div className="icon text-primary align-self-center">
                                        <img src="assets/images/icons/feature-icon-3.png" alt="Feature Icon" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Support 24/7</h5>
                                        <p>Support 24 hours a day</p>
                                    </div>
                                </div>
                            </div>
                            {/* Feature End */}
                            {/* Feature Start */}
                            <div className="col mb-5" data-aos="fade-up" data-aos-delay={700}>
                                <div className="feature">
                                    <div className="icon text-primary align-self-center">
                                        <img src="assets/images/icons/feature-icon-4.png" alt="Feature Icon" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Money Return</h5>
                                        <p>Back guarantee under 5 days</p>
                                    </div>
                                </div>
                            </div>
                            {/* Feature End */}
                            {/* Feature Start */}
                            <div className="col mb-5" data-aos="fade-up" data-aos-delay={900}>
                                <div className="feature">
                                    <div className="icon text-primary align-self-center">
                                        <img src="assets/images/icons/feature-icon-1.png" alt="Feature Icon" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">Order Discount</h5>
                                        <p>Onevery order over $150</p>
                                    </div>
                                </div>
                            </div>
                            {/* Feature End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature Section End */}
            {/* Product Section Start */}
            <div className="section section-padding mt-0">
                <div className="container">
                    {/* Section Title & Tab Start */}
                    <div className="row">
                        {/* Tab Start */}
                        <div className="col-12">
                            <ul className="product-tab-nav nav justify-content-center mb-10 title-border-bottom mt-n3">
                                <li className="nav-item" data-aos="fade-up" data-aos-delay={300}><a className="nav-link active mt-3" data-bs-toggle="tab" href="#tab-product-all">New Arrivals</a></li>
                                <li className="nav-item" data-aos="fade-up" data-aos-delay={400}><a className="nav-link mt-3" data-bs-toggle="tab" href="#tab-product-clothings">Best Sellers</a></li>
                                <li className="nav-item" data-aos="fade-up" data-aos-delay={500}><a className="nav-link mt-3" data-bs-toggle="tab" href="#tab-product-all">Sale Items</a></li>
                            </ul>
                        </div>
                        {/* Tab End */}
                    </div>
                    {/* Section Title & Tab End */}
                    {/* Products Tab Start */}
                    <div className="row">
                        <div className="col">
                            <div className="tab-content position-relative">
                                <div className="tab-pane fade show active" id="tab-product-all">
                                    <div className="product-carousel">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper mb-n10">
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={300}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/1.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/5.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Brother Hoddies in Grey</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$38.50</span>
                                                                <span className="old">$42.85</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={400}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/2.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/3.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Basic Jogging Shorts</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$14.50</span>
                                                                <span className="old">$18.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={400}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/4.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/10.jpg" alt="Product" />
                                                            </a>
                                                            <span className="badges">
                                                                <span className="sale">New</span>
                                                            </span>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Simple Woven Fabrics</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '67%' }} />
                                                                </span>
                                                                <span className="rating-num">(2)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$45.50</span>
                                                                <span className="old">$48.85</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={500}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/5.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/6.jpg" alt="Product" />
                                                            </a>
                                                            <span className="badges">
                                                                <span className="sale">Sold</span>
                                                            </span>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Make Thing Happen T-Shirt</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '80%' }} />
                                                                </span>
                                                                <span className="rating-num">(2)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$16.00</span>
                                                                <span className="old">$18.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={500}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/7.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/9.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Lather Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Basic Lather Sneaker</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(12)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$65.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={600}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/10.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/4.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Fabric Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Simple Woven Fashion</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '70%' }} />
                                                                </span>
                                                                <span className="rating-num">(09)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$27.00</span>
                                                                <span className="old">$29.50</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={600}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/11.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/10.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Design Source</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Handmade Shoulder Bag</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(06)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$96.50</span>
                                                                <span className="old">$100.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={700}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/3.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/5.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Enjoy The Rest T-Shirt</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$22.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={700}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/7.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/9.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Lather Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Basic Lather Sneaker</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(12)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$65.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10" data-aos="fade-up" data-aos-delay={800}>
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/10.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/4.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Fabric Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Simple Woven Fashion</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '70%' }} />
                                                                </span>
                                                                <span className="rating-num">(09)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$27.00</span>
                                                                <span className="old">$29.50</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                            </div>
                                            {/* Swiper Pagination Start */}
                                            <div className="swiper-pagination d-md-none" />
                                            {/* Swiper Pagination End */}
                                            {/* Next Previous Button Start */}
                                            <div className="swiper-product-button-next swiper-button-next swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-right" /></div>
                                            <div className="swiper-product-button-prev swiper-button-prev swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-left" /></div>
                                            {/* Next Previous Button End */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-product-clothings">
                                    <div className="product-carousel">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper mb-n10">
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/2.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/3.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Basic Jogging Shorts</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$14.50</span>
                                                                <span className="old">$18.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/1.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/5.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Brother Hoddies in Grey</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$38.50</span>
                                                                <span className="old">$42.85</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/11.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/10.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Design Source</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Handmade Shoulder Bag</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(06)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$96.50</span>
                                                                <span className="old">$100.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/3.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/5.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Enjoy The Rest T-Shirt</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$22.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/4.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/10.jpg" alt="Product" />
                                                            </a>
                                                            <span className="badges">
                                                                <span className="sale">New</span>
                                                            </span>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Simple Woven Fabrics</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '67%' }} />
                                                                </span>
                                                                <span className="rating-num">(2)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$45.50</span>
                                                                <span className="old">$48.85</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/5.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/6.jpg" alt="Product" />
                                                            </a>
                                                            <span className="badges">
                                                                <span className="sale">Sold</span>
                                                            </span>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Make Thing Happen T-Shirt</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '80%' }} />
                                                                </span>
                                                                <span className="rating-num">(2)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$16.00</span>
                                                                <span className="old">$18.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/7.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/9.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Lather Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Basic Lather Sneaker</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(12)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$65.00</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                    {/* Single Product Start */}
                                                    <div className="product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product.html" className="image">
                                                                <img className="first-image" src="assets/images/products/medium-size/10.jpg" alt="Product" />
                                                                <img className="second-image" src="assets/images/products/medium-size/4.jpg" alt="Product" />
                                                            </a>
                                                            <div className="actions">
                                                                <a href="#" className="action wishlist"><i className="pe-7s-like" /></a>
                                                                <a href="#" className="action quickview" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><i className="pe-7s-search" /></a>
                                                                <a href="#" className="action compare"><i className="pe-7s-shuffle" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="sub-title"><a href="single-product.html">Fabric Design</a></h4>
                                                            <h5 className="title"><a href="single-product.html">Simple Woven Fashion</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '70%' }} />
                                                                </span>
                                                                <span className="rating-num">(09)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$27.00</span>
                                                                <span className="old">$29.50</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product End */}
                                                </div>
                                                {/* Product End */}
                                            </div>
                                            {/* Swiper Pagination Start */}
                                            <div className="swiper-pagination d-md-none" />
                                            {/* Swiper Pagination End */}
                                            {/* Next Previous Button Start */}
                                            <div className="swiper-product-button-next swiper-button-next swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-right" /></div>
                                            <div className="swiper-product-button-prev swiper-button-prev swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-left" /></div>
                                            {/* Next Previous Button End */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Products Tab End */}
                </div>
            </div>
            {/* Product Section End */}
            {/* Banner Fullwidth Start */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-delay={300}>
                            <div className="banner">
                                <div className="banner-image">
                                    <a href="shop-grid.html"><img src="assets/images/banner/big-banner.jpg" alt="Banner" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner Fullwidth End */}
            {/* Product Deal Section Start */}
            <div className="section section-padding mt-0 overflow-hidden">
                <div className="container">
                    {/* Section Title & Tab Start */}
                    <div className="row">
                        {/* Tab Start */}
                        <div className="col-12">
                            <div className="section-title-produt-tab-wrapper">
                                <div className="section-title m-0" data-aos="fade-right" data-aos-delay={300}>
                                    <h1 className="title">Daily Deals</h1>
                                </div>
                                <ul className="product-tab-nav nav mt-n3" data-aos="fade-left" data-aos-delay={300}>
                                    <li className="nav-item"><a className="nav-link active mt-3" data-bs-toggle="tab" href="#product-deal-all">New Arrivals</a></li>
                                    <li className="nav-item"><a className="nav-link mt-3" data-bs-toggle="tab" href="#product-deal-clothings">Best Sellers</a></li>
                                    <li className="nav-item"><a className="nav-link mt-3" data-bs-toggle="tab" href="#product-deal-all">Sale Items</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Tab End */}
                    </div>
                    {/* Section Title & Tab End */}
                    {/* Products Tab Start */}
                    <div className="row">
                        <div className="col">
                            <div className="tab-content position-relative">
                                <div className="tab-pane fade show active" id="product-deal-all">
                                    <div className="product-deal-carousel">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper" data-aos="fade-right" data-aos-delay={600}>
                                                    {/* Single Product Deal Start */}
                                                    <div className="product single-deal-product product-border-left">
                                                        <div className="thumb">
                                                            <a href="single-product-sale.html" className="image">
                                                                <img src="assets/images/products/medium-size/1.jpg" alt="Product" />
                                                            </a>
                                                            <span className="badges">
                                                                <span className="sale">-30%</span>
                                                            </span>
                                                        </div>
                                                        <div className="content">
                                                            <p className="inner-desc">Hurry Up! Offer Ends In:</p>
                                                            <div className="countdown-area">
                                                                <div className="countdown-wrapper d-flex" data-countdown="2022/12/24" />
                                                            </div>
                                                            <h4 className="sub-title"><a href="single-product-sale.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product-sale.html">Enjoy The Rest T-Shirt</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$38.00</span>
                                                                <span className="old">$42.05</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product Deal End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper" data-aos="fade-left" data-aos-delay={600}>
                                                    {/* Single Product Deal Start */}
                                                    <div className="product single-deal-product product-border-left">
                                                        <div className="thumb">
                                                            <a href="single-product-sale.html" className="image">
                                                                <img src="assets/images/products/medium-size/8.jpg" alt="Product" />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <p className="inner-desc">Hurry Up! Offer Ends In:</p>
                                                            <div className="countdown-area">
                                                                <div className="countdown-wrapper d-flex" data-countdown="2022/12/24" />
                                                            </div>
                                                            <h4 className="sub-title"><a href="single-product-sale.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product-sale.html">Classic Trucker Hat</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '65%' }} />
                                                                </span>
                                                                <span className="rating-num">(3)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$07.00</span>
                                                                <span className="old">$08.40</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product Deal End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper">
                                                    {/* Single Product Deal Start */}
                                                    <div className="product single-deal-product product-border-left">
                                                        <div className="thumb">
                                                            <a href="single-product-sale.html" className="image">
                                                                <img src="assets/images/products/medium-size/9.jpg" alt="Product" />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <p className="inner-desc">Hurry Up! Offer Ends In:</p>
                                                            <div className="countdown-area">
                                                                <div className="countdown-wrapper d-flex" data-countdown="2022/12/24" />
                                                            </div>
                                                            <h4 className="sub-title"><a href="single-product-sale.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product-sale.html">Basic Lather Sneaker</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '80%' }} />
                                                                </span>
                                                                <span className="rating-num">(2)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$88.00</span>
                                                                <span className="old">$92.50</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product Deal End */}
                                                </div>
                                                {/* Product End */}
                                            </div>
                                            {/* Swiper Pagination Start */}
                                            <div className="swiper-pagination d-md-none" />
                                            {/* Swiper Pagination End */}
                                            {/* Next Previous Button Start */}
                                            <div className="swiper-product-deal-next swiper-button-next swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-right" /></div>
                                            <div className="swiper-product-deal-prev swiper-button-prev swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-left" /></div>
                                            {/* Next Previous Button End */}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="product-deal-clothings">
                                    <div className="product-deal-carousel">
                                        <div className="swiper-container">
                                            <div className="swiper-wrapper">
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper mb-n10">
                                                    {/* Single Product Deal Start */}
                                                    <div className="product single-deal-product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product-sale.html" className="image">
                                                                <img src="assets/images/products/medium-size/9.jpg" alt="Product" />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <p className="inner-desc">Hurry Up! Offer Ends In:</p>
                                                            <div className="countdown-area">
                                                                <div className="countdown-wrapper d-flex" data-countdown="2022/12/24" />
                                                            </div>
                                                            <h4 className="sub-title"><a href="single-product-sale.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product-sale.html">Basic Lather Sneaker</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '80%' }} />
                                                                </span>
                                                                <span className="rating-num">(2)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$88.00</span>
                                                                <span className="old">$92.50</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product Deal End */}
                                                </div>
                                                {/* Product End */}
                                                {/* Product Start */}
                                                <div className="swiper-slide product-wrapper mb-n10">
                                                    {/* Single Product Deal Start */}
                                                    <div className="product single-deal-product product-border-left mb-10">
                                                        <div className="thumb">
                                                            <a href="single-product-sale.html" className="image">
                                                                <img src="assets/images/products/medium-size/1.jpg" alt="Product" />
                                                            </a>
                                                            <span className="badges">
                                                                <span className="sale">-30%</span>
                                                            </span>
                                                        </div>
                                                        <div className="content">
                                                            <p className="inner-desc">Hurry Up! Offer Ends In:</p>
                                                            <div className="countdown-area">
                                                                <div className="countdown-wrapper d-flex" data-countdown="2022/12/24" />
                                                            </div>
                                                            <h4 className="sub-title"><a href="single-product-sale.html">Studio Design</a></h4>
                                                            <h5 className="title"><a href="single-product-sale.html">Enjoy The Rest T-Shirt</a></h5>
                                                            <span className="ratings">
                                                                <span className="rating-wrap">
                                                                    <span className="star" style={{ width: '100%' }} />
                                                                </span>
                                                                <span className="rating-num">(4)</span>
                                                            </span>
                                                            <span className="price">
                                                                <span className="new">$38.00</span>
                                                                <span className="old">$42.05</span>
                                                            </span>
                                                            <button className="btn btn-sm btn-outline-dark btn-hover-primary">Add To Cart</button>
                                                        </div>
                                                    </div>
                                                    {/* Single Product Deal End */}
                                                </div>
                                                {/* Product End */}
                                            </div>
                                            {/* Swiper Pagination Start */}
                                            <div className="swiper-pagination d-md-none" />
                                            {/* Swiper Pagination End */}
                                            {/* Next Previous Button Start */}
                                            <div className="swiper-product-deal-next swiper-button-next swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-right" /></div>
                                            <div className="swiper-product-deal-prev swiper-button-prev swiper-button-white d-md-flex d-none"><i className="pe-7s-angle-left" /></div>
                                            {/* Next Previous Button End */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Products Tab End */}
                </div>
            </div>
            {/* Product Deal Section End */}
            {/* Banner Section Start */}
            <div className="section">
                <div className="container">
                    {/* Banners Start */}
                    <div className="row mb-n6 overflow-hidden">
                        {/* Banner Start */}
                        <div className="col-md-6 col-12 mb-6" data-aos="fade-right" data-aos-delay={300}>
                            <div className="banner">
                                <div className="banner-image">
                                    <a href="shop-grid.html"><img src="assets/images/banner/banner-4.jpg" alt="Banner Image" /></a>
                                </div>
                                <div className="info">
                                    <div className="small-banner-content">
                                        <h4 className="sub-title">Up to <span>50%</span> Off</h4>
                                        <h3 className="title">Office Dress</h3>
                                        <a href="shop-grid.html" className="btn btn-primary btn-hover-dark btn-sm">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Banner End */}
                        {/* Banner Start */}
                        <div className="col-md-6 col-12 mb-6" data-aos="fade-left" data-aos-delay={300}>
                            <div className="banner">
                                <div className="banner-image">
                                    <a href="shop-grid.html"><img src="assets/images/banner/banner-5.jpg" alt="Banner Image" /></a>
                                </div>
                                <div className="info">
                                    <div className="small-banner-content">
                                        <h4 className="sub-title">Up to <span>40%</span> Off</h4>
                                        <h3 className="title">All Products</h3>
                                        <a href="shop-grid.html" className="btn btn-primary btn-hover-dark btn-sm">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Banner End */}
                    </div>
                    {/* Banners End */}
                </div>
            </div>
            {/* Banner Section End */}
            {/* Product List Start */}
            <div className="section section-padding">
                <div className="container">
                    <div className="row mb-n8">
                        <div className="col-md-6 col-lg-4 col-12 mb-8" data-aos="fade-up" data-aos-delay={300}>
                            {/* Product List Title Start */}
                            <div className="product-list-title">
                                <h2 className="title pb-3 mb-0">Best Offer</h2>
                                <span />
                            </div>
                            {/* Product List Title End */}
                            {/* Product List Carousel Start */}
                            <div className="product-list-carousel">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {/* Product List Wrapper Start */}
                                        <div className="swiper-slide product-list-wrapper mb-n6">
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/1.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Brother Hoddies in Grey</a></h5>
                                                    <span className="price">
                                                        <span className="new">$38.00</span>
                                                        <span className="old">$42.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/2.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/3.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Basic Jogging Shorts</a></h5>
                                                    <span className="price">
                                                        <span className="new">$21.00</span>
                                                        <span className="old">$22.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '60%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/4.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/10.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Simple Woven Fabrics</a></h5>
                                                    <span className="price">
                                                        <span className="new">$86.00</span>
                                                        <span className="old">$90.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '80%' }} />
                                                        </span>
                                                        <span className="rating-num">(1)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                        </div>
                                        {/* Product List Wrapper End */}
                                        {/* Product List Wrapper Start */}
                                        <div className="swiper-slide product-list-wrapper mb-n6">
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/6.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Make Thing Happen T-Shirt</a></h5>
                                                    <span className="price">
                                                        <span className="new">$66.50</span>
                                                        <span className="old">$70.55</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/4.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/10.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Simple Woven Fabrics</a></h5>
                                                    <span className="price">
                                                        <span className="new">$86.00</span>
                                                        <span className="old">$90.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '80%' }} />
                                                        </span>
                                                        <span className="rating-num">(1)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/1.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Brother Hoddies in Grey</a></h5>
                                                    <span className="price">
                                                        <span className="new">$38.00</span>
                                                        <span className="old">$42.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                        </div>
                                        {/* Product List Wrapper End */}
                                    </div>
                                    {/* Swiper Pagination Start */}
                                    {/* 
                        <div class="swiper-pagination d-md-none"></div>
                        */}
                                    {/* Swiper Pagination End */}
                                    {/* Next Previous Button Start */}
                                    <div className="swiper-product-list-next swiper-button-next"><i className="pe-7s-angle-right" /></div>
                                    <div className="swiper-product-list-prev swiper-button-prev"><i className="pe-7s-angle-left" /></div>
                                    {/* Next Previous Button End */}
                                </div>
                            </div>
                            {/* Product List Carousel End */}
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 mb-8" data-aos="fade-up" data-aos-delay={500}>
                            {/* Product List Title Start */}
                            <div className="product-list-title">
                                <h2 className="title pb-3 mb-0">New Products</h2>
                                <span />
                            </div>
                            {/* Product List Title End */}
                            {/* Product List Start */}
                            <div className="product-list-carousel-2">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {/* Product List Wrapper Start */}
                                        <div className="swiper-slide product-list-wrapper mb-n6">
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/6.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Make Thing Happen T-Shirt</a></h5>
                                                    <span className="price">
                                                        <span className="new">$66.50</span>
                                                        <span className="old">$70.55</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/4.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/10.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Simple Woven Fabrics</a></h5>
                                                    <span className="price">
                                                        <span className="new">$86.00</span>
                                                        <span className="old">$90.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '80%' }} />
                                                        </span>
                                                        <span className="rating-num">(1)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/1.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Brother Hoddies in Grey</a></h5>
                                                    <span className="price">
                                                        <span className="new">$38.00</span>
                                                        <span className="old">$42.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                        </div>
                                        {/* Product List Wrapper End */}
                                        {/* Product List Wrapper Start */}
                                        <div className="swiper-slide product-list-wrapper mb-n6">
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/7.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/9.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Basic Lather Sneaker</a></h5>
                                                    <span className="price">
                                                        <span className="new">$65.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/11.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/10.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Handmade Shoulder Bag</a></h5>
                                                    <span className="price">
                                                        <span className="new">$86.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '80%' }} />
                                                        </span>
                                                        <span className="rating-num">(1)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/3.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Enjoy The Rest T-Shirt</a></h5>
                                                    <span className="price">
                                                        <span className="new">$44.00</span>
                                                        <span className="old">$48.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                        </div>
                                        {/* Product List Wrapper End */}
                                    </div>
                                    {/* Swiper Pagination Start */}
                                    {/* 
                        <div class="swiper-pagination d-md-none"></div>
                        */}
                                    {/* Swiper Pagination End */}
                                    {/* Next Previous Button Start */}
                                    <div className="swiper-product-list-next swiper-button-next"><i className="pe-7s-angle-right" /></div>
                                    <div className="swiper-product-list-prev swiper-button-prev"><i className="pe-7s-angle-left" /></div>
                                    {/* Next Previous Button End */}
                                </div>
                            </div>
                            {/* Product List End */}
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 mb-8" data-aos="fade-up" data-aos-delay={700}>
                            {/* Product List Title Start */}
                            <div className="product-list-title">
                                <h2 className="title pb-3 mb-0">Best Sellers</h2>
                                <span />
                            </div>
                            {/* Product List Title End */}
                            {/* Product List Start */}
                            <div className="product-list-carousel-3">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        {/* Product List Wrapper Start */}
                                        <div className="swiper-slide product-list-wrapper mb-n6">
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/7.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/9.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Basic Lather Sneaker</a></h5>
                                                    <span className="price">
                                                        <span className="new">$65.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/11.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/10.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Handmade Shoulder Bag</a></h5>
                                                    <span className="price">
                                                        <span className="new">$86.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '80%' }} />
                                                        </span>
                                                        <span className="rating-num">(1)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/3.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Enjoy The Rest T-Shirt</a></h5>
                                                    <span className="price">
                                                        <span className="new">$44.00</span>
                                                        <span className="old">$48.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                        </div>
                                        {/* Product List Wrapper End */}
                                        {/* Product List Wrapper Start */}
                                        <div className="swiper-slide product-list-wrapper mb-n6">
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/1.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/5.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Brother Hoddies in Grey</a></h5>
                                                    <span className="price">
                                                        <span className="new">$38.00</span>
                                                        <span className="old">$42.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '100%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/2.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/3.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Basic Jogging Shorts</a></h5>
                                                    <span className="price">
                                                        <span className="new">$21.00</span>
                                                        <span className="old">$22.50</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '60%' }} />
                                                        </span>
                                                        <span className="rating-num">(4)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                            {/* Single Product List Start */}
                                            <div className="single-product-list product-hover mb-6">
                                                <div className="thumb">
                                                    <a href="single-product.html" className="image">
                                                        <img className="first-image" src="assets/images/products/small-product/4.jpg" alt="Product" />
                                                        <img className="second-image" src="assets/images/products/small-product/10.jpg" alt="Product" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="title"><a href="single-product.html">Simple Woven Fabrics</a></h5>
                                                    <span className="price">
                                                        <span className="new">$86.00</span>
                                                        <span className="old">$90.00</span>
                                                    </span>
                                                    <span className="ratings">
                                                        <span className="rating-wrap">
                                                            <span className="star" style={{ width: '80%' }} />
                                                        </span>
                                                        <span className="rating-num">(1)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Single Product List End */}
                                        </div>
                                        {/* Product List Wrapper End */}
                                    </div>
                                    {/* Swiper Pagination Start */}
                                    {/* 
                        <div class="swiper-pagination d-md-none"></div>
                        */}
                                    {/* Swiper Pagination End */}
                                    {/* Next Previous Button Start */}
                                    <div className="swiper-product-list-next swiper-button-next"><i className="pe-7s-angle-right" /></div>
                                    <div className="swiper-product-list-prev swiper-button-prev"><i className="pe-7s-angle-left" /></div>
                                    {/* Next Previous Button End */}
                                </div>
                            </div>
                            {/* Product List End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Product List End */}
            {/* Brand Logo Start */}
            <div className="section">
                <div className="container">
                    <div className="border-top">
                        <div className="row">
                            <div className="col-12">
                                {/* Brand Logo Wrapper Start */}
                                <div className="brand-logo-carousel">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {/* Single Brand Logo Start */}
                                            <div className="swiper-slide single-brand-logo" data-aos="fade-up" data-aos-delay={300}>
                                                <a href="#"><img src="assets/images/brand-logo/1.png" alt="Brand Logo" /></a>
                                            </div>
                                            {/* Single Brand Logo End */}
                                            {/* Single Brand Logo Start */}
                                            <div className="swiper-slide single-brand-logo" data-aos="fade-up" data-aos-delay={400}>
                                                <a href="#"><img src="assets/images/brand-logo/2.png" alt="Brand Logo" /></a>
                                            </div>
                                            {/* Single Brand Logo End */}
                                            {/* Single Brand Logo Start */}
                                            <div className="swiper-slide single-brand-logo" data-aos="fade-up" data-aos-delay={500}>
                                                <a href><img src="assets/images/brand-logo/3.png" alt="Brand Logo" /></a>
                                            </div>
                                            {/* Single Brand Logo End */}
                                            {/* Single Brand Logo Start */}
                                            <div className="swiper-slide single-brand-logo" data-aos="fade-up" data-aos-delay={600}>
                                                <a href="#"><img src="assets/images/brand-logo/4.png" alt="Brand Logo" /></a>
                                            </div>
                                            {/* Single Brand Logo End */}
                                            {/* Single Brand Logo Start */}
                                            <div className="swiper-slide single-brand-logo" data-aos="fade-up" data-aos-delay={700}>
                                                <a href="#"><img src="assets/images/brand-logo/5.png" alt="Brand Logo" /></a>
                                            </div>
                                            {/* Single Brand Logo End */}
                                        </div>
                                    </div>
                                </div>
                                {/* Brand Logo Wrapper End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Brand Logo End */}
            {/* Footer Section Start */}
            <footer className="section footer-section">
                {/* Footer Top Start */}
                <div className="footer-top section-padding">
                    <div className="container">
                        <div className="row mb-n10">
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-10" data-aos="fade-up" data-aos-delay={200}>
                                <div className="single-footer-widget">
                                    <h2 className="widget-title">Contact Us</h2>
                                    <p className="desc-content">Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididun</p>
                                    {/* Contact Address Start */}
                                    <ul className="widget-address">
                                        <li><span>Address: </span> 123 Main Street, Anytown, CA 12345 - USA.</li>
                                        <li><span>Call to: </span> <a href="#"> (012) 800 456 789-987</a></li>
                                        <li><span>Mail to: </span> <a href="#"> yourmail@example.com</a></li>
                                    </ul>
                                    {/* Contact Address End */}
                                    {/* Soclial Link Start */}
                                    <div className="widget-social justify-content-start mt-4">
                                        <a title="Facebook" href="#"><i className="fa fa-facebook-f" /></a>
                                        <a title="Twitter" href="#"><i className="fa fa-twitter" /></a>
                                        <a title="Linkedin" href="#"><i className="fa fa-linkedin" /></a>
                                        <a title="Youtube" href="#"><i className="fa fa-youtube" /></a>
                                        <a title="Vimeo" href="#"><i className="fa fa-vimeo" /></a>
                                    </div>
                                    {/* Social Link End */}
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 col-xl-2 mb-10" data-aos="fade-up" data-aos-delay={300}>
                                <div className="single-footer-widget">
                                    <h2 className="widget-title">Information</h2>
                                    <ul className="widget-list">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="about.html">Delivery Information</a></li>
                                        <li><a href="about.html">Privacy Policy</a></li>
                                        <li><a href="about.html">Terms &amp; Conditions</a></li>
                                        <li><a href="about.html">Customer Service</a></li>
                                        <li><a href="about.html">Return Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 col-xl-2 mb-10" data-aos="fade-up" data-aos-delay={400}>
                                <div className="single-footer-widget aos-init aos-animate">
                                    <h2 className="widget-title">My Account</h2>
                                    <ul className="widget-list">
                                        <li><a href="account.html">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="contact.html">Newsletter</a></li>
                                        <li><a href="contact.html">Help Center</a></li>
                                        <li><a href="contact.html">Conditin</a></li>
                                        <li><a href="contact.html">Term Of Use</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-10" data-aos="fade-up" data-aos-delay={500}>
                                <div className="single-footer-widget">
                                    <h2 className="widget-title">Newsletter</h2>
                                    <div className="widget-body">
                                        <p className="desc-content mb-0">Get E-mail updates about our latest shop and special offers.</p>
                                        {/* Newsletter Form Start */}
                                        <div className="newsletter-form-wrap pt-4">
                                            <form id="mc-form" className="mc-form">
                                                <input type="email" id="mc-email" className="form-control email-box mb-4" placeholder="Enter your email here.." name="EMAIL" />
                                                <button id="mc-submit" className="newsletter-btn btn btn-primary btn-hover-dark" type="submit">Subscribe</button>
                                            </form>
                                            {/* mailchimp-alerts Start */}
                                            <div className="mailchimp-alerts text-centre">
                                                <div className="mailchimp-submitting" />
                                                {/* mailchimp-submitting end */}
                                                <div className="mailchimp-success text-success" />
                                                {/* mailchimp-success end */}
                                                <div className="mailchimp-error text-danger" />{/* mailchimp-error end */}
                                            </div>
                                            {/* mailchimp-alerts end */}
                                        </div>
                                        {/* Newsletter Form End */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Top End */}
                {/* Footer Bottom Start */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 text-center">
                                <div className="copyright-content">
                                    <p className="mb-0">Copyright © 2021 <a href="https://hasthemes.com/">HasThemes.</a> All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom End */}
            </footer>
            {/* Footer Section End */}
            {/* Scroll Top Start */}
            <a href="#" className="scroll-top" id="scroll-top">
                <i className="arrow-top fa fa-long-arrow-up" />
                <i className="arrow-bottom fa fa-long-arrow-up" />
            </a>
            {/* Scroll Top End */}
            {/* Modal Start  */}
            <div className="modalquickview modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button className="btn close" data-bs-dismiss="modal">×</button>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                {/* Product Details Image Start */}
                                <div className="modal-product-carousel">
                                    {/* Single Product Image Start */}
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <a className="swiper-slide" href="#">
                                                <img className="w-100" src="assets/images/products/large-size/1.jpg" alt="Product" />
                                            </a>
                                            <a className="swiper-slide" href="#">
                                                <img className="w-100" src="assets/images/products/large-size/2.jpg" alt="Product" />
                                            </a>
                                            <a className="swiper-slide" href="#">
                                                <img className="w-100" src="assets/images/products/large-size/3.jpg" alt="Product" />
                                            </a>
                                            <a className="swiper-slide" href="#">
                                                <img className="w-100" src="assets/images/products/large-size/4.jpg" alt="Product" />
                                            </a>
                                            <a className="swiper-slide" href="#">
                                                <img className="w-100" src="assets/images/products/large-size/5.jpg" alt="Product" />
                                            </a>
                                            <a className="swiper-slide" href="#">
                                                <img className="w-100" src="assets/images/products/large-size/6.jpg" alt="Product" />
                                            </a>
                                        </div>
                                        {/* Swiper Pagination Start */}
                                        {/* 
                        <div class="swiper-pagination d-md-none"></div>
                        */}
                                        {/* Swiper Pagination End */}
                                        {/* Next Previous Button Start */}
                                        <div className="swiper-product-button-next swiper-button-next"><i className="pe-7s-angle-right" /></div>
                                        <div className="swiper-product-button-prev swiper-button-prev"><i className="pe-7s-angle-left" /></div>
                                        {/* Next Previous Button End */}
                                    </div>
                                    {/* Single Product Image End */}
                                </div>
                                {/* Product Details Image End */}
                            </div>
                            <div className="col-md-6 col-12 overflow-hidden position-relative">
                                {/* Product Summery Start */}
                                <div className="product-summery">
                                    {/* Product Head Start */}
                                    <div className="product-head mb-3">
                                        <h2 className="product-title">Sample product</h2>
                                    </div>
                                    {/* Product Head End */}
                                    {/* Price Box Start */}
                                    <div className="price-box mb-2">
                                        <span className="regular-price">$80.00</span>
                                        <span className="old-price"><del>$90.00</del></span>
                                    </div>
                                    {/* Price Box End */}
                                    {/* Rating Start */}
                                    <span className="ratings justify-content-start">
                                        <span className="rating-wrap">
                                            <span className="star" style={{ width: '100%' }} />
                                        </span>
                                        <span className="rating-num">(4)</span>
                                    </span>
                                    {/* Rating End */}
                                    {/* SKU Start */}
                                    <div className="sku mb-3">
                                        <span>SKU: 12345</span>
                                    </div>
                                    {/* SKU End */}
                                    {/* Description Start */}
                                    <p className="desc-content mb-5">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    {/* Description End */}
                                    {/* Product Meta Start */}
                                    <div className="product-meta mb-3">
                                        {/* Product Size Start */}
                                        <div className="product-size">
                                            <span>Size :</span>
                                            <a href><strong>S</strong></a>
                                            <a href><strong>M</strong></a>
                                            <a href><strong>L</strong></a>
                                            <a href><strong>XL</strong></a>
                                        </div>
                                        {/* Product Size End */}
                                    </div>
                                    {/* Product Meta End */}
                                    {/* Product Color Variation Start */}
                                    <div className="product-color-variation mb-3">
                                        <button type="button" className="btn bg-danger" />
                                        <button type="button" className="btn bg-primary" />
                                        <button type="button" className="btn bg-dark" />
                                        <button type="button" className="btn bg-success" />
                                    </div>
                                    {/* Product Color Variation End */}
                                    {/* Product Meta Start */}
                                    <div className="product-meta mb-5">
                                        {/* Product Metarial Start */}
                                        <div className="product-metarial">
                                            <span>Metarial :</span>
                                            <a href><strong>Metal</strong></a>
                                            <a href><strong>Resin</strong></a>
                                            <a href><strong>Lather</strong></a>
                                            <a href><strong>Polymer</strong></a>
                                        </div>
                                        {/* Product Metarial End */}
                                    </div>
                                    {/* Product Meta End */}
                                    {/* Quantity Start */}
                                    <div className="quantity mb-5">
                                        <div className="cart-plus-minus">
                                            <input className="cart-plus-minus-box" defaultValue={0} type="text" />
                                            <div className="dec qtybutton" />
                                            <div className="inc qtybutton" />
                                        </div>
                                    </div>
                                    {/* Quantity End */}
                                    {/* Cart & Wishlist Button Start */}
                                    <div className="cart-wishlist-btn pb-4 mb-n3">
                                        <div className="add-to_cart mb-3">
                                            <a className="btn btn-outline-dark btn-hover-primary" href="cart.html">Add to cart</a>
                                        </div>
                                        <div className="add-to-wishlist mb-3">
                                            <a className="btn btn-outline-dark btn-hover-primary" href="wishlist.html">Add to Wishlist</a>
                                        </div>
                                    </div>
                                    {/* Cart & Wishlist Button End */}
                                    {/* Social Shear Start */}
                                    <div className="social-share">
                                        <span>Share :</span>
                                        <a href="#"><i className="fa fa-facebook-square facebook-color" /></a>
                                        <a href="#"><i className="fa fa-twitter-square twitter-color" /></a>
                                        <a href="#"><i className="fa fa-linkedin-square linkedin-color" /></a>
                                        <a href="#"><i className="fa fa-pinterest-square pinterest-color" /></a>
                                    </div>
                                    {/* Social Shear End */}
                                    {/* Product Delivery Policy Start */}
                                    <ul className="product-delivery-policy border-top pt-4 mt-4 border-bottom pb-4">
                                        <li> <i className="fa fa-check-square" /> <span>Security Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><i className="fa fa-truck" /><span>Delivery Policy (Edit With Customer Reassurance Module)</span></li>
                                        <li><i className="fa fa-refresh" /><span>Return Policy (Edit With Customer Reassurance Module)</span></li>
                                    </ul>
                                    {/* Product Delivery Policy End */}
                                </div>
                                {/* Product Summery End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal End  */}
        </div>
    )
}

export default Home;