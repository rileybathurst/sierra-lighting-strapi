'use strict';

/**
 * minimum router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::minimum.minimum');
