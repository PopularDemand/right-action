import 'jquery';
import 'jquery-format';
import '../../stylesheets/pages/home.scss';

$(function () {
  var $content = $('#content');

  $.get('/api/posts/author/rightactioning', function (response) {
    if (response.status == 'ok') {
      var output = '';
      $.each(response.items, function (k, item) {
        output += '<div class="blog-teaser-wrapper">';
        output += '<div class="blog-post"><header>';
        var tagIndex = item.description.indexOf('<img');
        var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex;
        var srcStart = srcIndex + 5; // 5 for the length of 'src="'
        var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart;
        var src = item.description.substring(srcStart, srcEnd);

        if (src.indexOf('cdn-images-1') < 0) src = 'http://az616578.vo.msecnd.net/files/2016/06/15/636016285941226674637698081_1127.jpg'; // TODO: change to default image when authors in DB

        output += '<div class="blog-element">'
        output += `<a href="${item.link}""><img class="teaser-image image-responsive" src="${src}""></a></div></header>`;
        output += `<div class="blog-content"><h4><a href="${item.link}">${item.title}</a></h4>`;
        output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
        var content = item.description.replace(/<img[^>]*>/g,"");
        var maxLength = 240;
        var trimmed = content.substr(0, maxLength);
        trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))
        output += '<p>' + trimmed + '...</p>';
        output += '</div></div></div>';
      });
      $content.html(output);
    }
  });
});
