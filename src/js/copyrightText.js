export default function() {
  document.oncopy = function() {
    var bodyElement = document.body
    var selection = getSelection()
    var href = document.location.href
    var copyright = "<br><br>Источник: <a href='" + href + "'>" + href + '</a><br>© Официальный сайт ХК Ак Барс'
    var text = selection + copyright
    var divElement = document.createElement('div')
    divElement.style.position = 'absolute'
    divElement.style.left = '-99999px'
    divElement.innerHTML = text
    bodyElement.appendChild(divElement)
    selection.selectAllChildren(divElement)
    setTimeout(function() {
      bodyElement.removeChild(divElement)
    }, 0)
  }
}

