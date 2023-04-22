import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import jQuery from "jquery";
import $ from "jquery";



$(document).ready(function(){
  $('.carousel').Carousel({
    padding:200
  });
  autoplay();

  function autoplay(){
    $('.carousel').Carousel('next');
    setTimeout(autoplay,4500);
  }
});