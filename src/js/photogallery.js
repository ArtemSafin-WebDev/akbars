import './fotorama'


export default function() {

  if (typeof playerPhotoDataSource !== 'undefined' && playerPhotoDataSource.length > 0) {
    $('.js-player-photogallery')
      .on('fotorama:show', function(e, fotorama, extra) {
        $('.js-player-photo-description').html(fotorama.activeFrame.title)
      })
      .fotorama({
        data: playerPhotoDataSource,
        width: '100%',
        ratio: '1200/800',
        loop: true,
        allowfullscreen: true,
        nav: 'thumbs',
        navposition: 'top',
        hash: true,
        keyboard: true,
        shadows: false,
        margin: 10,
        thumbwidth: 120,
        thumbheight: 80,
        thumbmargin: 10,
        arrows: true
      })
  }


  if (typeof photogalleryDetailsDataSource !== 'undefined' && photogalleryDetailsDataSource.length > 0) {
    console.log('Gallery initialized')
    $('.js-photogallery')
      .on('fotorama:show', function(e, fotorama, extra) {
        $('.js-photogallery-photo-description').html(fotorama.activeFrame.title)
      })
      .fotorama({
        data: photogalleryDetailsDataSource,
        width: '100%',
        ratio: '1200/800',
        loop: true,
        allowfullscreen: true,
        nav: 'thumbs',
        navposition: 'top',
        hash: true,
        keyboard: true,
        shadows: false,
        margin: 10,
        thumbwidth: 120,
        thumbheight: 80,
        thumbmargin: 10,
        arrows: true
      })
  }
}
