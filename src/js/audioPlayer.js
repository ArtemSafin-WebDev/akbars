import Plyr from 'plyr/dist/plyr.polyfilled'


export default function() {
  const audios = Array.from(document.querySelectorAll('.js-audio'))

  audios.forEach(audio => {
    const player = new Plyr(audio, {
      settings: []
    });
  })
}