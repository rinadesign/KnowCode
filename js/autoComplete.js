$(function(){
	$("#autocomplete-1").autocomplete({
		source:
		[
			{ value:"Android", url:"index.html"},
			{ value:"ios", url:"index.html"},
			{ value:"C", url:"index.html"},
			{ value:"Programming", url:"index.html"},
			{ value:"Mobile", url:"index.html"},
		],
		
		select: function(event,ui){
			window.location=ui.item.url;
		}

		});
});

// $(function(){
// 	$("#autocomplete-1").autocomplete({

// 		source:"./autoComplete.json",
// 		select: function(event,ui){
// 			window.location=ui.item.url;
// 		}

// 		});
// });



// $(function(){
// 	$.getJSON('./autoComplete.json', function(data){
//         search_array = new Array();
//         $.each(data, function(key,value) { 
//            search_array.push(key);
//         });
//      })


//         //Now you definitely have the cars so you can do the autocomplete
//    	$('#autocomplete-1').autocomplete({
//         source: search_array,
//         minLength: 3,
//         focus: function( event, ui ) {},
//         select: function( event, ui ) {
//         window.location=ui.item.url;
//         return false;
//     	}
// 	});
// });

