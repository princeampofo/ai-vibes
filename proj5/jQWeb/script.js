
// Naviagtion functions
$(function() {

    // Animate header and navlinks
    $('.jHeader').hide().delay(600).fadeIn(1300)
	$('.navLinks').hide().delay(600).fadeIn(1300);


    // About
    $('.links').eq(0).click(function() {
        $(".displayContent").css('display','flex').hide().delay(100).fadeIn(900);
		$('.links').removeClass('selected');
		$(this).addClass('selected');

		$('.fContent').empty();
		let $about = '<p style="color:white;">California is a state in the Western United States. California borders Oregon to the north, Nevada and Arizona to the east, and the Mexican state of Baja California to the south. With over 39.5 million residents across a total area of approximately 163,696 square miles (423,970 km2), it is the most populous and the third-largest U.S. state by area. It is also the most populated subnational entity in North America and the 34th most populous in the world.</p> <a style="color:white;" href="https://en.wikipedia.org/wiki/California">Source Wikipedia</a><p>';
		
		$('.fContent').html($about).hide().delay(100).fadeIn(900);
	})


    // Video
    $('.links').eq(1).click(function() {
        $(".displayContent").css('display','flex').hide().delay(100).fadeIn(900);
		$('.links').removeClass('selected');
		$(this).addClass('selected');

		$('.fContent').empty();
        let $video = '<iframe width="100%" height="300px" src="https://www.youtube.com/embed/br8_YoU66T8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $('.fContent').html($video).hide().delay(100).fadeIn(900);

		
	})


    // Image
    $('.links').eq(2).click(function() {
        $(".displayContent").css('display','flex').hide().delay(100).fadeIn(900);
		$('.links').removeClass('selected');
		$(this).addClass('selected');


        $('.fContent').empty();
        let $img = "<img src='./ca1.jpg' style=' width:100%; height:300px'>"
        $('.fContent').html($img).hide().delay(100).fadeIn(900);

		
	})





});


// "<p>These are the counties in California.</p><p>Alameda, Alpine, Amador,Butte, Calaveras, Colusa, Contra Costa, Del Norte, El Dorado, Fresno, Glenn, Humboldt,Imperial, Inyo, Kern ,Kings, Lake, Lassen, Los Angeles, Madera,Marin,  Mariposa, Mendocino, Merced, Modoc, Mono, Monterey, Napa, Nevada, Orange, Placer, Plumas, Riverside, Sacramento, San Benito, San Bernardino, San Diego, San Francisco, San Joaquin, San Luis Obispo, San Mateo, Santa Barbara, Santa Clara, Santa Cruz, Shasta, Sierra, Siskiyou, Solano, Sonoma, Stanislaus, Sutter, Tehama, Trinity, Tulare, Tuolumne, Ventura, Yolo and Yuba</p>"