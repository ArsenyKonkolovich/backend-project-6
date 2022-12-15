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
    },
    layouts: {
      application: {
        users: 'Пользователи',
        signIn: 'Вход',
        signUp: 'Регистрация',
        signOut: 'Выход',
        statuses: 'Статусы',
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
    },
  },
};
