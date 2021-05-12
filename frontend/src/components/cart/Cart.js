const Cart = () => {
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
                                        <a href="javascript:void(0)" className="header-action-btn header-action-btn-search"><i className="pe-7s-search" /></a>
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
                                        <a href="javascript:void(0)" className="header-action-btn header-action-btn-cart">
                                            <i className="pe-7s-shopbag" />
                                            <span className="header-action-num">3</span>
                                        </a>
                                        {/* Shopping Cart Header Action Button End */}
                                        {/* Mobile Menu Hambarger Action Button Start */}
                                        <a href="javascript:void(0)" className="header-action-btn header-action-btn-menu d-xl-none d-lg-block">
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
            {/* Breadcrumb Section Start */}
            <div className="section">
                {/* Breadcrumb Area Start */}
                <div className="breadcrumb-area bg-light">
                    <div className="container-fluid">
                        <div className="breadcrumb-content text-center">
                            <h1 className="title">Shopping Cart</h1>
                            <ul>
                                <li>
                                    <a href="index.html">Home </a>
                                </li>
                                <li className="active"> Shopping Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb Area End */}
            </div>
            {/* Breadcrumb Section End */}
            {/* Shopping Cart Section Start */}
            <div className="section section-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Cart Table Start */}
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    {/* Table Head Start */}
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">Image</th>
                                            <th className="pro-title">Product</th>
                                            <th className="pro-price">Price</th>
                                            <th className="pro-quantity">Quantity</th>
                                            <th className="pro-subtotal">Total</th>
                                            <th className="pro-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    {/* Table Head End */}
                                    {/* Table Body Start */}
                                    <tbody>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/products/small-product/1.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Brother Hoddies in Grey <br /> s / green</a></td>
                                            <td className="pro-price"><span>$95.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="quantity">
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" defaultValue={0} type="text" />
                                                        <div className="dec qtybutton">-</div>
                                                        <div className="inc qtybutton">+</div>
                                                        <div className="dec qtybutton"><i className="fa fa-minus" /></div>
                                                        <div className="inc qtybutton"><i className="fa fa-plus" /></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$95.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/products/small-product/2.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Basic Jogging Shorts <br /> Blue</a></td>
                                            <td className="pro-price"><span>$75.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="quantity">
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" defaultValue={0} type="text" />
                                                        <div className="dec qtybutton">-</div>
                                                        <div className="inc qtybutton">+</div>
                                                        <div className="dec qtybutton"><i className="fa fa-minus" /></div>
                                                        <div className="inc qtybutton"><i className="fa fa-plus" /></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$75.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/products/small-product/10.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Lust For Life <br /> Bulk/S</a></td>
                                            <td className="pro-price"><span>$295.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="quantity">
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" defaultValue={0} type="text" />
                                                        <div className="dec qtybutton">-</div>
                                                        <div className="inc qtybutton">+</div>
                                                        <div className="dec qtybutton"><i className="fa fa-minus" /></div>
                                                        <div className="inc qtybutton"><i className="fa fa-plus" /></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$295.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/products/small-product/4.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Simple Woven Fabrics</a></td>
                                            <td className="pro-price"><span>$60.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="quantity">
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" defaultValue={2} type="text" />
                                                        <div className="dec qtybutton">-</div>
                                                        <div className="inc qtybutton">+</div>
                                                        <div className="dec qtybutton"><i className="fa fa-minus" /></div>
                                                        <div className="inc qtybutton"><i className="fa fa-plus" /></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$110.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="pe-7s-trash" /></a></td>
                                        </tr>
                                    </tbody>
                                    {/* Table Body End */}
                                </table>
                            </div>
                            {/* Cart Table End */}
                            {/* Cart Update Option Start */}
                            <div className="cart-update-option d-block d-md-flex justify-content-between">
                                {/* Apply Coupon Wrapper Start */}
                                <div className="apply-coupon-wrapper">
                                    <form action="#" method="post" className=" d-block d-md-flex">
                                        <input type="text" placeholder="Enter Your Coupon Code" required />
                                        <button className="btn btn-dark btn-hover-primary rounded-0">Apply Coupon</button>
                                    </form>
                                </div>
                                {/* Apply Coupon Wrapper End */}
                                {/* Cart Update Start */}
                                <div className="cart-update mt-sm-16">
                                    <a href="#" className="btn btn-dark btn-hover-primary rounded-0">Update Cart</a>
                                </div>
                                {/* Cart Update End */}
                            </div>
                            {/* Cart Update Option End */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 ms-auto col-custom">
                            {/* Cart Calculation Area Start */}
                            <div className="cart-calculator-wrapper">
                                {/* Cart Calculate Items Start */}
                                <div className="cart-calculate-items">
                                    {/* Cart Calculate Items Title Start */}
                                    <h3 className="title">Cart Totals</h3>
                                    {/* Cart Calculate Items Title End */}
                                    {/* Responsive Table Start */}
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody><tr>
                                                <td>Sub Total</td>
                                                <td>$230</td>
                                            </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>$70</td>
                                                </tr>
                                                <tr className="total">
                                                    <td>Total</td>
                                                    <td className="total-amount">$300</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                    {/* Responsive Table End */}
                                </div>
                                {/* Cart Calculate Items End */}
                                {/* Cart Checktout Button Start */}
                                <a href="checkout.html" className="btn btn-dark btn-hover-primary rounded-0 w-100">Proceed To Checkout</a>
                                {/* Cart Checktout Button End */}
                            </div>
                            {/* Cart Calculation Area End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Shopping Cart Section End */}
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
                                                <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                                                <div className="mailchimp-success text-success" />{/* mailchimp-success end */}
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
        </div>
    )
}
export default Cart;