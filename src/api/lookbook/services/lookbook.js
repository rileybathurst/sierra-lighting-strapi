'use strict';

/**
 * lookbook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lookbook.lookbook');
