import './fotorama'


export default function() {

  if (typeof photogalleryDetailsDataSource !== 'undefined' && photogalleryDetailsDataSource.length > 0) {
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
        thumbwidth: 80,
        thumbheight: 80,
        thumbmargin: 10,
        arrows: true
      })
  }
}
