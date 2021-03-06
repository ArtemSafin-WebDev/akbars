import 'parsleyjs'
import moment from 'moment'

export default function() {
  window.Parsley.addValidator('moment', {
    requirementType: 'string',
    validateString: function(value) {
      return moment(value, 'D.M.YYYY', true).isValid()
    },
    messages: {
      en: 'Please enter a valid date.',
      ru: 'Укажите правильную дату в формате дд.мм.гггг'
    }
  })


  window.Parsley.addValidator('passformat', {
    requirementType: 'string',
    validateString: function(value) {
      console.log(value)
      var re = /[^0-9A-Za-z\!\@\#\$\%\^\&\*\(\)\{\}\[\]\_\-\+\=\|\.\,]/u;
      return !re.test(value)
    },
    messages: {
      en: 'Password does not meet the requirements',
      ru: 'Пароль не соответствует требованиям по символам'
    }
  })


  Parsley.addMessages('ru', {
    defaultMessage: 'Некорректное значение.',
    type: {
      email: 'В данном поле может быть только E-mail',
      url: 'Введите URL адрес.',
      number: 'Введите число.',
      integer: 'Введите целое число.',
      digits: 'Введите только цифры.',
      alphanum: 'Введите буквенно-цифровое значение.'
    },
    notblank: 'Это поле должно быть заполнено.',
    required: 'Обязательное поле',
    pattern: 'Это значение некорректно.',
    min: 'Это значение должно быть не менее чем %s.',
    max: 'Это значение должно быть не более чем %s.',
    range: 'Это значение должно быть от %s до %s.',
    minlength: 'Это значение должно содержать не менее %s символов.',
    maxlength: 'Это значение должно содержать не более %s символов.',
    length: 'Это значение должно содержать от %s до %s символов.',
    mincheck: 'Выберите не менее %s значений.',
    maxcheck: 'Выберите не более %s значений.',
    check: 'Выберите от %s до %s значений.',
    equalto: 'Это значение должно совпадать.'
  })

  Parsley.setLocale('ru')
}
