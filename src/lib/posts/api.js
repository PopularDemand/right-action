// $.get('/api/posts/author/rightactioning', function (response) {
//   if (response.status == 'ok') {
//     var output = '';
//     $.each(response.items.slice(0, 4), function (k, item) {
//       output += '<div class="blog-teaser-wrapper"><header>';
//       var tagIndex = item.description.indexOf('<img');
//       var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex;
//       var srcStart = srcIndex + 5; // 5 for the length of 'src="'
//       var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart;
//       var src = item.description.substring(srcStart, srcEnd);

//       if (src.indexOf('cdn-images-1') < 0) src = 'http://az616578.vo.msecnd.net/files/2016/06/15/636016285941226674637698081_1127.jpg'; // TODO: change to default image when authors in DB

//       output += '<div class="blog-element">'
//       output += `<a href="${item.link}" class="teaser-image-link"><img class="teaser-image" src="${src}""></a></div></header>`;
//       output += `<div class="blog-content"><h4><a href="${item.link}">${item.title}</a></h4>`;
//       output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
//       var content = item.description.replace(/<img[^>]*>/g,"");
//       content = content.replace(/<\/?[a-zA-Z0-9]*>/g," ");
//       var maxLength = 100;
//       var trimmed = content.substr(0, maxLength);
//       trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))
//       output += '<p class="teaser-content">' + trimmed + '</p>';
//       output += '</div></div>';
//     });
//     $content.html(output);
//   }
// });