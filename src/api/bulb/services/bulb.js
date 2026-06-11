'use strict';

/**
 * bulb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bulb.bulb');
