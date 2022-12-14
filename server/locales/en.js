// @ts-check

export default {
  translation: {
    appName: 'Fastify Boilerplate',
    flash: {
      labels: {
        create: {
          success: 'Label created',
          error: 'Create error',
        },
        update: {
          success: 'Label updated',
          error: 'Update error',
        },
        delete: {
          success: 'Label deleted',
          error: 'Delete error',
          noAccess: 'You have no access',
        },
      },
      session: {
        create: {
          success: 'You are logged in',
          error: 'Wrong email or password',
        },
        delete: {
          success: 'You are logged out',
        },
      },
      users: {
        create: {
          error: 'Failed to register',
          success: 'User registered successfully',
        },
        update: {
          noAccess: 'You have no access',
          success: 'Succsess change',
          error: 'Something went wrong',
        },
        delete: {
          noAccess: 'You have no access',
          success: 'Succsess delete',
          error: 'Something went wrong',
        },
      },
      authError: 'Access denied! Please login',
      statuses: {
        create: {
          success: 'Status created successfully',
          error: 'Failed to create',
        },
        update: {
          success: 'Status updated successfully',
          error: 'Failed to update',
        },
        delete: {
          success: 'Status deleted successfully',
          error: 'Failed to delete',
          noAccess: 'You have no access',
        },
      },
      tasks: {
        create: {
          success: 'Task created successfully',
          error: 'Failed to create',
        },
        update: {
          success: 'Task updated successfully',
          error: 'Failed to update',
        },
        delete: {
          success: 'Task deleted successfully',
          error: 'Failed to delete',
        },
      },
    },
    layouts: {
      application: {
        users: 'Users',
        signIn: 'Login',
        signUp: 'Register',
        signOut: 'Logout',
        statuses: 'Statuses',
        tasks: 'Tasks',
        labels: 'Labels',
      },
    },
    views: {
      statuses: {
        title: 'Statuses',
        id: 'ID',
        name: 'Name',
        createdAt: 'Created at',
        action: {
          create: 'Create status',
          delete: 'Delete',
          change: 'Change',
        },
      },
      labels: {
        title: 'Labels',
        createBtn: 'Create label',
        table: {
          id: 'ID',
          name: 'Name',
          createdAt: 'Created at',
          action: {
            change: 'Change',
            delete: 'Delete',
          },
        },
        new: {
          title: 'Create label',
          submit: 'Create',
        },
        edit: {
          title: 'Edit label',
          submit: 'Change',
        },
      },
      form: {
        placeholders: {
          email: 'Email',
          password: 'Password',
          name: 'Name',
          firstName: 'First name',
          lastName: 'Last name',
          description: 'Description',
          statusId: 'Status',
          executorId: 'Executor',
          labels: 'Labels',
        },
        filter: {
          status: 'Status',
          executor: 'Executor',
          isCreatorUser: 'Only my tasks',
          submit: 'Submit',
          label: 'Label',
        },
      },
      session: {
        new: {
          signIn: 'Login',
          submit: 'Login',
        },
      },
      users: {
        id: 'ID',
        firstName: 'First name',
        lastName: 'Last name',
        fullName: 'Full name',
        email: 'Email',
        createdAt: 'Created at',
        new: {
          submit: 'Register',
          signUp: 'Register',
        },
        action: {
          change: 'Change user',
          delete: 'Delete user',
        },
        title: 'Users',
      },
      welcome: {
        index: {
          hello: 'Hello from Hexlet!',
          description: 'Online programming school',
          more: 'Learn more',
        },
      },
      tasks: {
        title: 'Tasks',
        createBtn: 'Create task',
        edit: {
          title: 'Create task form',
          submit: 'Create task',
        },
        table: {
          action: {
            change: 'Change task',
            delete: 'Delete task',
          },
          id: 'ID',
          name: 'Name',
          status: 'Status',
          author: 'Author',
          executor: 'Executor, lol',
          createdAt: 'Created at',
        },
        new: {
          title: 'Tasks title',
          submit: 'Create task',
        },
        page: {
          action: {
            change: 'Change task',
            delete: 'Delete task',
          },
          creator: 'Creator',
          executor: 'Executor, lol',
          createdAt: 'Created at',
        },
      },
    },
  },
};
