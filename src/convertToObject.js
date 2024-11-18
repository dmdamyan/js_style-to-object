'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = [...sourceString.split(';')];

  array.map((element) => element.split(' '));

  const result = { ...array };

  return result;
}

module.exports = convertToObject;
