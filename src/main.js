import { MovieService } from './movies-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {

  $('#movieSelection').click(function() {
    const movie = $('#movieSearch').val();
    $('#movieSearch').val("");

    (async () => {
      let movieService = new MovieService();
      const response = await movieService.get(movie);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.list').append(`"<li>" The official title of ${movie} is ${response.results[0].title}"</li>"`);
        $('.list').append(`"<li>" Here's what it's about: ${response.results[0].overview} "<li>"`);
      } else {
        $('.list').append(`"<li>" No movies for you!"</li>"`);
        $('.list').append(`"<li>" Please check your inputs and try again! "</li>"`);
      }
    }

  });
});