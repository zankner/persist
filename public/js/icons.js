$.ajax({
  url: '/img/orion-svg-sprite.svg',
  type: 'GET',
  dataType: 'text',
  success: data => {
    const iconsDiv = $(`<div class="d-none">${data}</div>`);
    $('body').prepend(iconsDiv);
  },
});