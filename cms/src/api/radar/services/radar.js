'use strict';

/**
 * radar service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::radar.radar');
