console.log('Hi')
let textin = document.querySelector('.search_field');

textin.oninput= function (){
   let enterText = this.value.trim();
   let listItems = document.querySelectorAll('.search_menu li');
   if(enterText != ''){                         //Если введённый текст не равен пустой строке
       listItems.forEach(function(item){        // то проходим  по всем элементам списка
           if(item.innerText.search(RegExp(enterText,"gi")) == -1){  //Функция search возращает минус единицу если подстрока введеного текста не найдена в элементе списка
               item.classList.add('hide');              //Тогда данный элемент скрываем с помощью добавления класса hide
               item.innerHTML = item.innerText;         //и перезаписываем если к элементу ранее применялась функция insertMark
           }
           else {
               item.classList.remove('hide');   //Иначе если функция search вернула значение отличное от -1, то элемент показываем
               let str = item.innerText;                    //и с помощью функции insertMark добавляем теги mark
               item.innerHTML = insertMark(str, item.innerText.search(RegExp(enterText,"gi")), enterText.length); // у элемента где нашлось совпадение
           }
       })
   } else {
       listItems.forEach(function (item){  //Если поле ввода пустое, то показать все элементы списка и перезаписать для удаления тега mark
           item.classList.remove('hide');
           item.innerHTML = item.innerText;
       });
   }
};
function insertMark(string,pos,len){ //Функция которая перезаписывает строку string, вставляя теги mark между pos и len
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}
