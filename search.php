<?php

$connection = mysqli_connect('127.0.0.1', 'root', 'root', 'test_db'); //Подключаемся к БД
if ($connection == false){                                            //Если подключение не удалось  
    echo 'Не удалось подключиться к базе данных';                     //выводим соответствующие сообщение
    echo mysqli_connect_error();                                      //и саму ошибку
    exit;                                                             //Останавливаем выполнение скрипта
}                                                                     ////Если скрипт не остановился значит соединение установлено 
$result = mysqli_query($connection, "SELECT * FROM `name and surname table`");  //Тогда делаем запрос к БД и выводим списком Фамилие и Имя
echo '<ul class="search_menu">';
while ( $record = mysqli_fetch_assoc($result)){
    echo '<li>'. $record['surname'].' '.$record['name']. '</li>';

}
echo "</ul>";
mysqli_close($connection); //Закрываем подключение к БД
?>

