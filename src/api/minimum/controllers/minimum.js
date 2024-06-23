'use strict';

/**
 * minimum controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::minimum.minimum');
