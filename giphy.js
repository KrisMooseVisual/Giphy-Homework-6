 // the array for dance Dance
 var dances = ["Samba", "Salsa", "Breakdance", "Ballet", "Tap Dance", "Hip Hop Dance", "Swing Dance", "Lindy Hop"];

 function renderButtons() {

     $("#buttons-view").empty();

     //Creating for loop for each dance
     for (var i = 0; i < dances.length; i++) {

         //creating button for each dance
         var a = $("<button>");

         a.addClass("dance");
         a.attr("data-name", dances[i]);
         a.text(dances[i]);
         $("#buttons-view").append(a);
     }
 }
 renderButtons();

 $("#add-dance").on("click", function (event) {

     event.preventDefault();

     var dance = $("#dance-input").val().trim();

     dances.push(dance);

     renderButtons();
 });


 // SPACE IN CODE FOR VISUAL CLARITY!//
 //Setting .on("click") function and variable for giphy API//
 //syntax $(document).on("click...") needed to continue adding buttons with out making other buttons stop working.
 $(document).on("click", ".dance", function () {

     var dance = $(this).attr("data-name");
     console.log(dance);
     //URL for giphy API
     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=jo3e3c4KXVOGa4Z1laCKmxZjup37IXks&limit=10&q=" + dance
     console.log(queryURL);

     //AJAX FOR URL
     $.ajax({
         url: queryURL,
         method: "GET"
     })

         .then(function (results) {
             console.log(results.data);
             // var imageURL = results.data.image_original_url;
             // console.log(imageURL) + "is the image URL");
             // var danceImage = $("<img>");

             // danceImage.attr("src", imageURL);
             // danceImage.attr("alt", "dance image");


             //FOR LOOP!
             for (var i = 0; i < results.data.length; i++) {

                 var danceDiv = $("<div>");

                 var p = $("<p>").text("Rating:" + results.data[i].rating);

                 var danceImage = $("<img>");

                 danceImage.attr("src", results.data[i].images.fixed_height.url);

                 danceDiv.append(p);
                 danceDiv.append(danceImage);

                 $("#gifs-appear-here").prepend(danceDiv);
             }

             //refered to pausing gif soloution
             $(".danceGif").on("click", function () {
                 console.log(click);
                 var state = $(this).attr("data-state");
                 
                 
                 if (state === "still") {
                     $(this).attr("src", $(this).attr("data-animate"));
                     $(this).attr("data-state", "animate");
                 } 
                 else {
                     $(this).attr("src", $(this).attr("data-still"));
                     $(this).attr("data-state", "still");
                 }

             });

         });


 });
