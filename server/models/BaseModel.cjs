// @ts-check

const { Model } = require('objection');

module.exports = class BaseModel extends Model {
  // Класс BaseModel расширяет класс Model, добавляя в него новый статический геттер
// modelPaths, которая отдает в массиву ссылку на папку, гле лежит BaseModel
  static get modelPaths() {
    return [__dirname];
  }
};
