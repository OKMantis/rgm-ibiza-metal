// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

require('./vendor/affix')
require('./vendor/bootstrap-progressbar.min')
require('./vendor/bootstrap.bundle')
require('./vendor/html5shiv.min.js')
require('./vendor/isotope.pkgd.min')
require('./vendor/jflickrfeed.min')
require('./vendor/jquery-3.3.1.min')
require('./vendor/jquery-migrate-3.0.0.min')
require('./vendor/jquery.appear')
require('./vendor/jquery.cookie')
require('./vendor/jquery.countdown.min')
require('./vendor/jquery.countTo')
require('./vendor/jquery.easing.1.3')
require('./vendor/jquery.easypiechart.min')
require('./vendor/jquery.hoverIntent')
require('./vendor/jquery.localScroll.min')
require('./vendor/jquery.parallax-1.1.3')
// require('./vendor/jquery.prettyPhoto')
require('./vendor/jquery.scrollbar.min')
require('./vendor/jquery.scrollTo.min')
require('./vendor/jquery.ui.totop')
// require('./vendor/modernizr-2.6.2.min')
require('./vendor/owl.carousel.min')
// require('./vendor/photoswipe-ui.default.min')
// require('./vendor/photoswipe')
// require('./vendor/respond.min')
require('./vendor/spectragram.min')
require('./vendor/superfish')
require('./bootstrap.addons')
require('./compressed')
require('./main')






// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
});
