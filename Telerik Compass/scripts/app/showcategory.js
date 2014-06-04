app.ShowCategory = (function () { 

    var show = function (e) {
        //console.log(e.view.params.id);
        
        var category_id = e.view.params.id;
        
        var data = Everlive.$.data('Category');
		data.get()
		.then(function (data) {
    		//alert(JSON.stringify(data));
            //console.log(data);
            
            $.each(data.result, function( index, value ) {
                
                if (value.Id === category_id) {
                    //console.log(id);
                    $("#singlecatname").text(value.CategoryName);
                    
                    
                    // now we want to get all of the locations with this category
                    var filter = { 
                        'Category': category_id
                    };
                    
                    
                    var locdata = Everlive.$.data('Location');
        			locdata.get(filter)
            		.then(function (loc) {
                		//alert(JSON.stringify(data));
                        console.log(loc);
                        
                        $("#singlecatlist").empty();
                        $.each(loc.result, function( index2, value2 ) {
                                 $("#singlecatlist").append("<li><a href='#viewLocation?id=" + value2.Id + "'>" + value2.LocationName + "</a></li>");
         
                          //console.log(value2);
                        });
                        
                    });
                    
                    //singlecatlist
                    
                }
                
                
                //$("#category-list").append("<li><a data-role='button' class='btn btn-login' href='#viewCategory?id=" + value.Id + "'>" + value.CategoryName + "</a></li>");
                
              //console.log(value);
            });
            
        },
        function (error) {
            alert(JSON.stringify(error));
        });
    };
    
    return {
        show: show
    };
})();