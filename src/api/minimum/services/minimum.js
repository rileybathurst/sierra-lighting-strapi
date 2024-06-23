'use strict';

/**
 * minimum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::minimum.minimum');
