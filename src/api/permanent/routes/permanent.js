'use strict';

/**
 * permanent router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::permanent.permanent');
