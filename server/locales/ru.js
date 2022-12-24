// @ts-check

export default {
  translation: {
    appName: 'Fastify Шаблон',
    flash: {
      labels: {
        create: {
          success: 'Метка успешно создана',
          error: 'Не удалось создать метку',
        },
        update: {
          success: 'Метка успешно изменена',
          error: 'Не удалось изменить метку',
        },
        delete: {
          success: 'Метка успешно удалена',
          error: 'Ошибка удаления',
          noAccess: 'Не удалось удалить метку',
        },
      },
      session: {
        create: {
          success: 'Вы залогинены',
          error: 'Неправильный емейл или пароль',
        },
        delete: {
          success: 'Вы разлогинены',
        },
      },
      users: {
        create: {
          error: 'Не удалось зарегистрировать',
          success: 'Пользователь успешно зарегистрирован',
        },
        update: {
          noAccess: 'Нет доступа',
          success: 'Пользователь успешно изменён',
          error: 'Не удалось изменить пользователя',
        },
        delete: {
          noAccess: 'Нет доступа',
          success: 'Пользователь успешно удалён',
          error: 'Не удалось удалить пользователя',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      statuses: {
        create: {
          success: 'Статус успешно создан',
          error: 'Не удалось создать статус',
        },
        update: {
          success: 'Статус успешно изменён',
          error: 'Не удалось изменить статус',
        },
        delete: {
          success: 'Статус успешно удалён',
          error: 'Не удалось удалить статус',
          noAccess: 'Нет доступа',
        },
      },
      tasks: {
        create: {
          success: 'Задача успешно создана',
          error: 'Не удалось создать задачу',
        },
        update: {
          success: 'Задача успешно изменена',
          error: 'Не удалось изменить задачу',
        },
        delete: {
          success: 'Задача успешно удалёна',
          error: 'Не удалось удалить задачу',
        },
      },
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        statuses: 'Статусы',
        tasks: 'Задачи',
        labels: 'Метки',
      },
    },
    views: {
      statuses: {
        title: 'Статусы',
        id: 'ID',
        name: 'Наименование',
        createdAt: 'Дата создания',
        action: {
          create: 'Создать статус',
          delete: 'Удалить',
          change: 'Изменить',
        },
        form: {
          create: 'Создать',
        },
        edit: {
          title: 'Изменение статуса',
        },
      },
      labels: {
        title: 'Метки',
        createBtn: 'Создать метку',
        table: {
          id: 'ID',
          name: 'Наименование',
          createdAt: 'Время создания',
          action: {
            change: 'Изменить',
            delete: 'Удалить',
          },
        },
        new: {
          title: 'Создание метки',
          submit: 'Создать',
        },
        edit: {
          title: 'Изменение метки',
          submit: 'Изменить',
        },
      },
      form: {
        placeholders: {
          email: 'Email',
          password: 'Пароль',
          name: 'Наименование',
          firstName: 'Имя',
          lastName: 'Фамилия',
          description: 'Описание',
          statusId: 'Статус',
          executorId: 'Исполнитель',
          labels: 'Метки',
        },
        filter: {
          status: 'Статус',
          executor: 'Исполнитель',
          isCreatorUser: 'Только мои задачи',
          submit: 'Показать',
          label: 'Метка',
        },
      },
      session: {
        new: {
          signIn: 'Вход',
          submit: 'Войти',
        },
      },
      users: {
        id: 'ID',
        firstName: 'Имя',
        lastName: 'Фамилия',
        fullName: 'Полное имя',
        email: 'Email',
        createdAt: 'Дата создания',
        new: {
          submit: 'Сохранить',
          signUp: 'Регистрация',
        },
        action: {
          change: 'Изменить',
          delete: 'Удалить',
        },
        title: 'Пользователи',
      },
      welcome: {
        index: {
          hello: 'Привет от Хекслета!',
          description: 'Практические курсы по программированию',
          more: 'Узнать Больше',
        },
      },
      tasks: {
        title: 'Задачи',
        createBtn: 'Создать задачу',
        edit: {
          title: 'Изменение задачи',
          submit: 'Изменить',
        },
        table: {
          action: {
            change: 'Изменить',
            delete: 'Удалить задачу',
          },
          id: 'ID',
          name: 'Наименование',
          status: 'Статус',
          author: 'Автор',
          executor: 'Исполнитель',
          createdAt: 'Дата создания',
        },
        new: {
          title: 'Создание задачи',
          submit: 'Создать',
        },
        page: {
          action: {
            change: 'Изменить задачу',
            delete: 'Удалить задачу',
          },
          creator: 'Создатель',
          executor: 'Исполнитель',
          createdAt: 'Дата создания',
        },
      },
    },
  },
};
