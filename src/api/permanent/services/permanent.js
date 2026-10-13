'use strict';

/**
 * permanent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::permanent.permanent');
