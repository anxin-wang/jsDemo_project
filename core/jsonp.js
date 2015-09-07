window.onload = function(){
    var button = document.getElementById("search");
    var input = document.getElementById("q");
    var body = document.body;
    var images = document.getElementById("images");

    var doJsonP = function(url, callback) {
        jsonpcallback = callback;
        request_url = url + "&callback=jsonpcallback";
        var request = document.createElement("script");
        request.src = request_url;
        body.appendChild(request);
    }

    //button.onclick = function() {
    //    query = input.value;
    //    url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + query;
    //    doJsonP(url, function(json) {
    //        var results = json.responseData.results;
    //        results.forEach(function(result) {
    //            var img = document.createElement("img");
    //            img.src = result.url;
    //            images.appendChild(img);
    //        });
    //    });
    //}

    button.onclick = function() {
        query = input.value;
        url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + query;
        doJsonP(url, function(json) {
            var results = json.responseData.results;
            results.forEach(function(result) {
                var img = document.createElement("img");
                img.src = result.url;
                images.appendChild(img);
            });
        });
    }
}
