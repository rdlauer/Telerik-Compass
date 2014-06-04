app.ShowLocation = (function () { 

    var show = function (e) {
        //console.log(e.view.params.id);
        
        e.view.scroller.reset();
        
        var id = e.view.params.id;
        
        var data = Everlive.$.data('Location');
		data.get()
		.then(function (data) {
    		//alert(JSON.stringify(data));
            //console.log(data);
            
            $.each(data.result, function( index, value ) {
                
                if (value.Id == id) {
                    $("#singlelocname").text(value.LocationName);
                    
                    // set the image source
                    $("#locimg").attr("src", Everlive.$.Files.getDownloadUrl(value.LocationPicture));
                    
                    // set the loc name
                    $("#locname").text(value.LocationName);
                    
                    
                    // get all of the reviews for this location
                    var filter = { 
                        'Location': id
                    };
                    
					var revdata = Everlive.$.data('Review');
        			revdata.get(filter)
            		.then(function (rev) {
                		//alert(JSON.stringify(data));
                        console.log(rev);
                        
                        $("#reviewCount").text(rev.count);
                        
                        var reviewTotal = 0;
                        
                        $("#allreviews").empty();
                        $.each(rev.result, function( index2, value2 ) {
                            $("#allreviews").append("<li style='margin-left:-15px'><b>" + formatMyDate(value2.CreatedAt) + "</b><br />" + value2.ReviewRating + " stars out of 5<br /><span class='smtext'>" + value2.ReviewText + "</span></li>");
                            reviewTotal = reviewTotal + parseFloat(value2.ReviewRating);
                            
                          //console.log(value2);
                        });
                        
                        $("#reviewAvg").text((reviewTotal/rev.count).toFixed(1));
                        
                 
                     
                        
                    });
                    
                }
                
                
                //$("#category-list").append("<li><a data-role='button' class='btn btn-login' href='#viewCategory?id=" + value.Id + "'>" + value.CategoryName + "</a></li>");
                
              //console.log(value);
            });
            
        });
    };
    
    return {
        show: show
    };
})();