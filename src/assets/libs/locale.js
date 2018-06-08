import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {getCookie, setCookie} from './utils'

const LOCALE_KEY = 'locale'

Vue.use(VueI18n)

const cfg = {
  en: ['hello'],
  ru: ['hello']
}

let messages = {}
for (let lang in cfg) { 
  let bag = {}
  cfg[lang].forEach(function (fileName) {
      let txt = require(`@/assets/locale/${lang}/${fileName}.json`); //подключаем модуль
      bag[fileName] = txt;
    })
  messages[lang] = bag
}

function getBrowerLanguage() {
  let lang = (navigator.language || navigator.browserLanguage).toLowerCase(); //navigator.browserLanguage - возвращает строку,
  //предст  авляющую предпочтительный язык пользователя, обычно язык интерфейса браузера
  if(lang.indexOf('ru') > -1) { //indexOf возвращает первый индекс, при котором данный элемент может быть найден в массиве, или -1,
    //если его нет
     return 'ru';
    } else if(lang.indexOf('en') > -1 ){
      return 'en';
    } else {
      return 'en';
    }
}

let locale = getCookie(LOCALE_KEY);
if (locale == null) {
  locale = getBrowerLanguage();
  setCookie(LOCALE_KEY, locale);
}

//Переключение языка
export function changeLanguage(vm, lang) {
  vm.$i18n.locale = lang;
  setCookie(LOCALE_KEY, lang);
}

//Получение текущего языка
export function getLanguage(vm) {
  return vm.$i18n.locale;
}

const i18n = new VueI18n({ //сохраняем locale и messages в нашем экземпляре VueI18n
  locale: locale, //locale - хранит текущею локаль, которую мы хотим отобразить
  messages //messages - хранит все языковые пакеты (hello.json)
})

export default(i18n)