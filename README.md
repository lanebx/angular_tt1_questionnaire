# Task

Создать форму-анкету Фронт-Энд разработчика.

Поля которые должны быть в форме:
1. Имя
2. Фамилия
3. поле чтобы выбрать День Рождения. (используйте angular material datepicker или другую библиотеку на ваше усмотрение)
4. Select для выбора js технологии (данные для селекта: [angular, react, vue])
5. Select для выбора версии, выбраного выше фреймворка. (селект для выбора версии изначально должен быть недоступен, его можно использовать только после выбора js-фреймворка, данные для выбора версии будут разные смотрите ниже JSON )

      {
          angular: ['1.1.1', '1.2.1', '1.3.3'],
          react: ['2.1.2', '3.2.4', '4.3.1'],
          vue: ['3.3.1', '5.2.1', '5.1.3'],
      }

6. поле для email. 
 -- для этого поля должна быть валидация на email,
* также для этого поля нужно создать асинхронный валидатор который будет обращатся на сервер и проверять существует ли такой емейл.  (симитируйте обращение к серверу  и верните результат через 2 секунды, если пользователь ввел test@test.test он должен увидить ошибку что такой емейл уже существует)

7 Также у пользователя должна быть возможность добавить несколько увлечений (хобби).

---Все поля формы должны быть required и должно быть хотябы одно хобби.

конечная модель которая будет отправлятся на сервер должна выглядеть так:
     {
          firstName: 'Petro',
          lastName: 'Pupkin',
          dateOfBirth: '23-11-1990',
          framework: 'angular',
          frameworkVersion: '1.2.1',
          email: 'test2@test.test',
          hobby: [{name: 'football', duration: '2 month'}, {name: 'tennis', duration: '6 month'}]
      }


# Questionnaire

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
