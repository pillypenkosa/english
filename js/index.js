//

const version = '31.01.2022';




$(function(){



	$('#version').html( version );




	//alert( typeof $);


	list_cat.map( function( k ){

		//<span class="pm">+</span> 
		$('.listNav').append(`

			<div class="each" data-key="${ k.key }" data-tfbody="0">
				<div class="head" data-key="${ k.key }">
					<span class="title">${ k.title }</span>
				</div>
				<div class="body hide"></div>
			</div>
		`);
	});



	// клик по спойлеру категории
	$('.listNav').on('click', '.each .head', function(){

		let key = $(this).data('key');
		let tfBody = $('.listNav .each[data-key="' + key + '"]').data('tfbody');

		//console.log( tfBody );
		//console.log( key );

		if ( tfBody == '0' ) {

			$(this).find('.pm').html('-');

			$('.listNav .each[data-key="' + key + '"]').data( 'tfbody', 1 );
			$('.listNav .each[data-key="' + key + '"]').find('.body').removeClass('hide');

			if ( lists[ key ] ) {
				lists[ key ].map( function( k ){
					$('.listNav .each[data-key="' + key + '"]').find('.body').append(`
						<div class="nameVideo" data-youtube="${ k.href }">${ k.title }</div>
					`);
				});
				//console.log( lists[ key ] );
			}

		} else {

			$(this).find('.pm').html('+');

			$('.listNav .each[data-key="' + key + '"]').data( 'tfbody', 0 );
			$('.listNav .each[data-key="' + key + '"]').find('.body').empty().addClass('hide');
		}
	});


	// клик по названию в списке видео в спойлере
	$('.listNav').on('click', '.nameVideo', function(){

		let href = $(this).data('youtube');

		$('.nameVideo').removeClass('active');
		$('.nameVideo[data-youtube="' + href + '"]').addClass('active');

		$('.video').empty();
		$('.video').append(`
			<iframe src="https://www.youtube.com/embed/${ href }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		`);

		$('header .link').html( ' <a href="https://www.youtube.com/watch?v=' + href + '" target="_blank" title="Перейти на YouTube">' + ' ' + href + '</a>');

	})


});





