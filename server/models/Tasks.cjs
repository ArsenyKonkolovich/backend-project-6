// @ts-check

const objectionUnique = require('objection-unique');
const BaseModel = require('./BaseModel.cjs');

const unique = objectionUnique({ fields: ['name'] });

module.exports = class Tasks extends unique(BaseModel) {
  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'statusId', 'creatorId'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
        description: { type: 'string' },
        statusId: { type: 'integer', minimum: 1 },
        creatorId: { type: 'integer' },
      },
    };
  }

  static modifiers = {
    filterCreator(queryBilder, creatorId) {
      queryBilder.where('creatorId', creatorId);
    },

    filterExecutor(queryBilder, executorId) {
      queryBilder.where('executorId', executorId);
    },

    filterStatus(queryBilder, statusId) {
      queryBilder.where('statusId', statusId);
    },

    filterLabel(queryBilder, labelId) {
      queryBilder.where('labels.id', labelId);
    },
  };

  static get relationMappings() {
    return {
      status: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: 'Statuses.cjs',
        join: {
          from: 'tasks.statusId',
          to: 'statuses.id',
        },
      },
      creator: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: 'User.cjs',
        join: {
          from: 'tasks.creatorId',
          to: 'users.id',
        },
      },
      executor: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: 'User.cjs',
        join: {
          from: 'tasks.executorId',
          to: 'users.id',
        },
      },
      labels: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: 'Labels.cjs',
        join: {
          from: 'tasks.id',
          through: {
            from: 'tasks_labels.taskId',
            to: 'tasks_labels.labelId',
          },
          to: 'labels.id',
        },
      },
    };
  }
};
