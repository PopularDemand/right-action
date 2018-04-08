import 'jquery';
import '../../stylesheets/pages/home.scss';

$(function () {
  var $content = $('#content');
  var data = {
    rss_url: 'https://medium.com/feed/@RightActioning'
  };
  $.get('/api/posts', function (response) {
    console.log(response);
  });
});
