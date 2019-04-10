import './fotorama'


export default function() {

  if (typeof photogalleryDetailsDataSource !== 'undefined' && photogalleryDetailsDataSource.length > 0) {
    $('.js-photogallery')
      .on('fotorama:show', function(e, fotorama, extra) {
        $('.js-photogallery-photo-description').html(fotorama.activeFrame.title)
      })
      .on('fotorama:fullscreenenter fotorama:fullscreenexit', function (e, fotorama) {
        if (e.type === 'fotorama:fullscreenenter') {
          // settings for full screen
          fotorama.setOptions({nav: false});
        } else {
          // Back to normal settings
          fotorama.setOptions({nav: 'thumbs'});
        }
      })
      .fotorama({
        data: photogalleryDetailsDataSource,
        width: '100%',
        ratio: '1200/800',
        loop: true,
        allowfullscreen: 'native',
        nav: 'thumbs',
        navposition: 'top',
        hash: true,
        keyboard: true,
        shadows: false,
        margin: 10,
        thumbwidth: 80,
        thumbheight: 80,
        thumbmargin: 10,
        arrows: true
      })
  }
}
