'use strict';

/**
 * image-grab service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::image-grab.image-grab');
