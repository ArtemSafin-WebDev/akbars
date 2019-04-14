import Plyr from 'plyr'

export default function() {
  const player = new Plyr('#player')
 
  player.source = {
    type: 'video',
    sources: [
      {
        src: 'https://www.youtube.com/watch?v=4_9wpG3mjrk',
        provider: 'youtube'
      }
    ]
  }

  player.play()
}
