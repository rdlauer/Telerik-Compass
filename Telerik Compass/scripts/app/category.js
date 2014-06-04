app.Category = (function () {

    var categoryViewModel = (function () {
        
        var init = (function() {
            
            var data = Everlive.$.data('Category');
			data.get()
    		.then(function (data) {
        		//alert(JSON.stringify(data));
                //console.log(data);
                
                $.each(data.result, function( index, value ) {
                    $("#category-list").append("<li><a data-role='button' class='btn btn-login' href='#viewCategory?id=" + value.Id + "'>" + value.CategoryName + "</a></li>");
                    
                  //console.log(value);
                });
                
            },
            function (error) {
                alert(JSON.stringify(error));
            });
            

        })();
        
       
    
        var getYear = (function () {
            var currentTime = new Date();
            return currentTime.getFullYear();
        }());

        return {
            init: init,
            getYear: getYear
        };

    }());

    return categoryViewModel;

}());