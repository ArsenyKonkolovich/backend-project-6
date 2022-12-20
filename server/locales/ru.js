// @ts-check

export default {
  translation: {
    appName: 'Fastify Шаблон',
    flash: {
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
          success: 'Вы изменили пользователя!',
          error: 'Ошибка изменения',
        },
        delete: {
          noAccess: 'Нет доступа',
          success: 'Вы удалили пользователя',
          error: 'Ошибка удаления',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      statuses: {
        create: {
          success: 'Статус создан',
          error: 'Ошибка создания',
        },
        update: {
          success: 'Статус обновлён',
          error: 'Ошибка обновления',
        },
        delete: {
          success: 'Статус удалён',
          error: 'Ошибка удаления',
        },
      },
      tasks: {
        create: {
          success: 'Задача создана',
          error: 'Ошибка создания',
        },
        update: {
          success: 'Задача обновлена',
          error: 'Ошибка обновления',
        },
        delete: {
          success: 'Задача удалёна',
          error: 'Ошибка удаления',
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
      },
    },
    statuses: {
      title: 'Статусы',
      id: 'ID',
      name: 'Наименование',
      createdAt: 'Дата создания',
      action: {
        create: 'Создать статус',
        delete: 'Удалить',
        change: 'Редактировать',
      },
    },
    views: {
      form: {
        placeholders: {
          email: 'Email',
          password: 'Пароль',
          name: 'Название',
          firstName: 'Имя',
          lastName: 'Фамилия',
          description: 'Описание',
          statusId: 'Статус',
          executorId: 'Исполнитель',
        },
        filter: {
          status: 'Статус',
          executor: 'Исполнитель',
          isCreatorUser: 'Только мои задачи',
          submit: 'Найти',
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
          title: 'Редактирование задачи',
          submit: 'Сохранить задачу',
        },
        table: {
          action: {
            change: 'Изменить',
            delete: 'Удалить задачу',
          },
          id: 'ID',
          name: 'Название',
          status: 'Статус',
          author: 'Автор',
          executor: 'Исполнитель',
          createdAt: 'Дата создания',
        },
        new: {
          title: 'Создание задачи',
          submit: 'Создать задачу',
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
