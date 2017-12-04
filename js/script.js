function openImageModal(props) {
	const modal = $(
		`<div class="imagemodal">
			<img class="imagemodal-content ${props.opts || ''}" src="${props.img}">
		</div>`);
	$(props.elem).after(modal);
	modal.css('display', 'flex');
	modal.click(function() {
		$(this).addClass('closing');
		$(this).find('.imagemodal-content').addClass('closing');
		setTimeout(() => $(this).remove(), 180);
	});
}

$(document).ready(() => {
	$('.modal').modal();
	$('.imagemodal-trigger').click(function() {
		openImageModal({
			elem: $(this),
			opts: $(this).attr('opts'),
			img: $(this).attr('img')
		});
	});
});