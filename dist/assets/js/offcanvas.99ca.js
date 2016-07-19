$(document).ready(function() {
  $(function() {
    $('nav#menu').mmenu({
      "extensions": [
        "pagedim-black",
        "theme-dark"
      ],
      "offCanvas": {
        "position": "right",
        "zposition": "front",
        "pageSelector": ".content"
      },
      "searchfield": {
        "resultsPanel": true,
        "showTextItems": true
      },
      "navbars": [
        {
          "position": "top",
          "content": [
            "searchfield"
          ]
        }
      ]
    }, {
      "searchfield": {
        "clear": true
      }
    });
  });
});
