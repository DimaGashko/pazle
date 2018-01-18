# Pazle
Консольный скрипт для puzzle-english.com для автоматизации некоторых действий.

Для испльзования все скрипты нужно ввести в консоль (ctrl + shift + j) и нажать Enter. 
Рекомендуется редактировать/подстравить скрипты для максимального удобства.

## AutoRepeat
Скрипт для атоматического воспроизведения найденного в поле поиска слова.

```javascript
  r.start(); //Начать воспроизведение (по умолчанию, воспроизведение начинается автоматически)
  r.stop(); //Остановить воспроизведение
  r.speed = 2000 //Интервал между воспроизведением
  r.slow = 1 //Медленное воспроизведение (при этом speed утраивается)
  r.slow = 0 //Выключить медленное воспроизведение (при этом speed возобновляется)
  r.repeatCount //Посмотреть общее количество повторений
```

Для удобства можно изменить название экземпляра AutoRepeat, и поменять стандартные настройки (поменяв его вызов в скопированом коде, перед выполнением в консоли):

```javascript
  var name = new AutoRepeat({
     run: true|false,
     speed: n,
     slow: true|false,
  });

  name.start();
```
