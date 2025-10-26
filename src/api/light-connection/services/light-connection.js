'use strict';

/**
 * light-connection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::light-connection.light-connection');
