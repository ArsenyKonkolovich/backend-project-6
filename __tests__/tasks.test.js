import fastify from 'fastify';
import init from '../server/plugin.js';
import { prepareDataFaker, makeLogin } from './helpers/index.js';

describe('Tasks CRUD', () => {
  let app;
  let knex;
  let models;
  let mockData;
  let cookie;

  beforeAll(async () => {
    app = fastify({
      exposeHeadRoutes: false,
      logger: { target: 'pino-pretty' },
    });
    await init(app);
    knex = app.objection.knex;
    models = app.objection.models;
    await knex.migrate.latest();
  });

  beforeEach(async () => {
    mockData = await prepareDataFaker(app);
    cookie = await makeLogin(app, mockData.users.existing.creator);
  });

  it('index', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('getTasks'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('newTask', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('newTask'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('viewTask', async () => {
    const params = mockData.tasks.existing;
    const task = await models.tasks.query().findOne({ name: params.name });

    const response = await app.inject({
      method: 'GET',
      url: app.reverse('taskPage', { id: task.id }),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('createTask', async () => {
    const params = mockData.tasks.new;

    const response = await app.inject({
      method: 'POST',
      url: app.reverse('createTask'),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const task = await models.tasks.query().findOne({ name: params.name });
    expect(task).toMatchObject(params);
  });

  it('updateTask', async () => {
    const modifiedName = 'Avada-kedavra';
    const params = mockData.tasks.existing;

    const task = await models.tasks.query().findOne({ name: params.name });

    const response = await app.inject({
      method: 'PATCH',
      url: app.reverse('updateTask', { id: task.id }),
      payload: {
        data: {
          ...params,
          name: modifiedName,
        },
      },
      cookies: cookie,
    });
    expect(response.statusCode).toBe(302);

    const refetchedTask = await task.$query();
    expect(refetchedTask.name).toEqual(modifiedName);
  });

  it('deleteTask', async () => {
    const params = mockData.tasks.existing;
    const task = await models.tasks.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'DELETE',
      url: app.reverse('deleteTask', { id: task.id }),
      cookies: cookie,
    });
    expect(response.statusCode).toBe(302);

    const deletedStatus = await models.tasks.query().findById(task.id);
    expect(deletedStatus).toBeUndefined();
  });

  afterEach(async () => {
    await knex('users').truncate();
    await knex('statuses').truncate();
    await knex('tasks').truncate();
    await knex('labels').truncate();
    await knex('tasks_labels').truncate();
  });

  afterAll(async () => {
    await app.close();
  });
});
