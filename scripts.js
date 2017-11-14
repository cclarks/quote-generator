function randomQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(res) {
      $("random_quote").html("<p id='random_quote' class='lead text-center'>" +
        res.quoteText + "<br />&dash; " + res.quoteAuthor + " &dash;</p>")
      $("#tweet").attr("href", "https://twitter.com/home/?status=" + res.quoteText +
        ' (' + res.quoteAuthor + ')')
    }
  })
}

$(function() {
  randomQuote()
})

$("button").click(function() {
  randomQuote()
})
