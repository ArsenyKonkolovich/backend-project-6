// @ts-check

export default {
  translation: {
    appName: 'Fastify Шаблон',
    flash: {
      labels: {
        create: {
          success: 'Метка успешно создана',
          error: 'Ошибка создения',
        },
        update: {
          success: 'Метка успешно обновлена',
          error: 'Ошибка обновления',
        },
        delete: {
          success: 'Метка успешно удалена',
          error: 'Ошибка удаления',
          noAccess: 'Не удалось удалить',
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
          error: 'Ошибка изменения',
        },
        delete: {
          noAccess: 'Нет доступа',
          success: 'Пользователь успешно удалён',
          error: 'Ошибка удаления',
        },
      },
      authError: 'Доступ запрещён! Пожалуйста, авторизируйтесь.',
      statuses: {
        create: {
          success: 'Статус успешно создан',
          error: 'Ошибка создания',
        },
        update: {
          success: 'Статус успешно изменён',
          error: 'Ошибка обновления',
        },
        delete: {
          success: 'Статус успешно удалён',
          error: 'Ошибка удаления',
          noAccess: 'Нет доступа',
        },
      },
      tasks: {
        create: {
          success: 'Задача успешно создана',
          error: 'Ошибка создания',
        },
        update: {
          success: 'Задача успешно обновлена',
          error: 'Ошибка обновления',
        },
        delete: {
          success: 'Задача успешно удалёна',
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
          change: 'Редактировать',
        },
        form: {
          create: 'Создать',
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
            change: 'Редактировать',
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
