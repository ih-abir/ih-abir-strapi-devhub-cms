'use strict';

/**
 * home-todo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-todo.home-todo');
