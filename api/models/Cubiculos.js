/**
 * Cubiculos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'MetroCenterMysqlServer',
  attributes: {

  	disponibilidad : { 
  		type: 'boolean',
  		required: true,
  	},

  	hora_salida : {
  		type: 'time'
  	},

  	hora_entrada : {
  		type: 'time'
  	},

    nombre: {
      type: 'string',
    },

    idespacio : {
      type: 'int',
      required: true,
    },
  }
};

