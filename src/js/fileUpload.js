export default function() {
  const fileInputs = Array.from(document.querySelectorAll('.js-file-input'))


  function returnFileSize(number) {
    if(number < 1024) {
      return number + 'bytes';
    } else if(number > 1024 && number < 1048576) {
      return (number/1024).toFixed(1) + 'KB';
    } else if(number > 1048576) {
      return (number/1048576).toFixed(1) + 'MB';
    }
  }


  console.log('Finding file uploads')
  console.log(fileInputs)
  fileInputs.forEach(input => {
    const label = input.nextElementSibling
    const labelValue = label.textContent

    input.addEventListener('change', function(event) {
      console.log('File upload changed')
      console.log(this.files)
      let filename = ''
      if (this.files && this.files.length > 1) {
        filename = `Выбрано файлов: ${this.files.length}`
      } else {
        filename = event.target.value.split('\\').pop() + `, Размер ${returnFileSize(this.files[0].size)}`
        
      }

      if (filename) {
        label.textContent = filename
      } else {
        label.textContent = labelValue
      }
    })
  })
}
