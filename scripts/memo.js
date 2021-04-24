$(function() {
  var h2Arr = $('#main h2');
  var sectionArr = $('#main section');

  for (var i = 0; i < sectionArr.length; i++) {

    var navTxt = h2Arr[i].innerHTML;
    var navId = $(sectionArr[i]).attr('id');

    $('.navList').append(
      '<li class="navItem"><a href="#'
      + navId
      + '" class="sectionTitle link'
      + navId
      + '">'
      + navTxt
      + '</a><ul class="navSubList"></ul></li>'
    );
    
    var navSubLinkH3 = $('#' + navId + ' h3');
    navSubLinkH3.each(function(j, e) {
      var navSubTxt = $(this).text();
      var navSubHref = $(this).parent().attr('id');
  
      $('.navList .link' + navId).siblings('.navSubList').append(
        '<li><a href="#'
        + navSubHref
        + '">'
        + navSubTxt
        + '</a></li>'
      );
    });
  }
});