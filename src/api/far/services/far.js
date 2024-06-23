'use strict';

/**
 * far service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::far.far');
