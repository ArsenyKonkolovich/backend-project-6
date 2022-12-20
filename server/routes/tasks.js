// @ts-check
import i18next from 'i18next';

export default (app) => {
  app
    .get('/tasks', { name: 'getTasks', preValidation: app.authenticate }, async (req, reply) => {
      const { id } = req.user;
      const {
        executor, status, isCreatorUser,
      } = req.query;

      const tasksQuery = app.objection.models.tasks.query().withGraphJoined('[creator, executor, status]');

      tasksQuery.skipUndefined().modify('filterExecutor', executor || undefined);
      tasksQuery.skipUndefined().modify('filterStatus', status || undefined);

      if (isCreatorUser === 'on') {
        tasksQuery.skipUndefined().modify('filterCreator', id || undefined);
      }

      const [tasks, users, statuses] = await Promise.all([
        tasksQuery,
        app.objection.models.user.query(),
        app.objection.models.statuses.query(),
      ]);

      reply.render('tasks/index', {
        tasks, statuses, users,
      });
      return reply;
    })
    .get('/tasks/new', { name: 'newTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = new app.objection.models.task();
      const [users, statuses] = await Promise.all([
        app.objection.models.user.query(),
        app.objection.models.statuses.query(),
      ]);
      reply.render('tasks/new', {
        task, statuses, users,
      });
      return reply;
    })
    .post('/tasks', { name: 'createTask', preValidation: app.authenticate }, async (req, reply) => {
      const { id: creatorId } = req.user;
      const task = new app.objection.models.task();
      const {
        name, description, statusId, executorId,
      } = req.body.data;
      const taskData = {
        name,
        description,
        statusId: Number(statusId),
        executorId: Number(executorId),
        creatorId,
      };
      task.$set({ ...taskData });
      try {
        const validTask = await app.objection.models.task.fromJson(taskData);
        await app.objection.models.task.transaction(async (trx) => {
          const newTask = {
            ...validTask,
          };
          const insertTask = await app.objection.models.task.query(trx).insertGraph(newTask);
          return insertTask;
        });
        req.flash('info', i18next.t('flash.tasks.create.success'));
        reply.redirect(app.reverse('getTasks'));
      } catch ({ data }) {
        const [users, statuses] = await Promise.all([
          app.objection.models.user.query(),
          app.objection.models.statuses.query(),
        ]);
        req.flash('error', i18next.t('flash.tasks.create.error'));
        reply.render('tasks/new', {
          task, statuses, users, errors: data,
        });
      }

      return reply;
    })
    .get('/tasks/:id', { name: 'taskPage', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const task = await app.objection.models.task.query().withGraphJoined('[creator, executor, status]').findById(taskId);

      reply.render('tasks/task', { task });
      return reply;
    })
    .get('/tasks/:id/edit', { name: 'editTask', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const task = await app.objection.models.task.query().findById(taskId);
      const [users, statuses] = await Promise.all([
        app.objection.models.user.query(),
        app.objection.models.statuses.query(),
      ]);

      reply.render('tasks/edit', {
        task, statuses, users,
      });
      return reply;
    })
    .patch('/tasks/:id', { name: 'updateTask', preValidation: app.authenticate }, async (req, reply) => {
      const { id: creatorId } = req.user;
      const taskId = Number(req.params.id);

      const task = new app.objection.models.task();

      const {
        name, description, statusId, executorId,
      } = req.body.data;
      const taskData = {
        name,
        description,
        statusId: Number(statusId),
        executorId: Number(executorId),
        creatorId,
      };
      task.$set({ ...taskData });
      try {
        const validTask = await app.objection.models.task.fromJson(taskData);
        await app.objection.models.task.transaction(async (trx) => {
          const updatedTask = {
            id: taskId,
            ...validTask,
          };
          const insertTask = await app.objection.models.task.query(trx)
            .upsertGraph(updatedTask, { relate: true, unrelate: true });
          return insertTask;
        });
        req.flash('info', i18next.t('flash.tasks.update.success'));
        reply.redirect(app.reverse('getTasks'));
      } catch ({ data }) {
        const [users, statuses] = await Promise.all([
          app.objection.models.user.query(),
          app.objection.models.statuses.query(),
        ]);
        req.flash('error', i18next.t('flash.tasks.update.error'));
        reply.render('tasks/edit', {
          task, statuses, users, errors: data,
        });
      }

      return reply;
    })
    .delete('/tasks/:id', { name: 'deleteTask', preValidation: app.authenticate }, async (req, reply) => {
      const { id: currentUser } = req.user;
      const taskId = Number(req.params.id);

      const task = await app.objection.models.task.query().findById(taskId);

      if (currentUser !== task.creatorId) {
        req.flash('error', i18next.t('flash.tasks.delete.noAccess'));
        return reply.redirect(app.reverse('getTasks'));
      }

      try {
        await app.objection.models.task.transaction(async (trx) => {
          await task.$query(trx).delete();
        });
        req.flash('info', i18next.t('flash.tasks.delete.success'));
        reply.redirect(app.reverse('getTasks'));
      } catch (err) {
        req.flash('error', i18next.t('flash.tasks.delete.error'));
        reply.redirect(app.reverse('getTasks'));
      }

      return reply;
    });
};
