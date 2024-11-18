'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = [...sourceString.split(';')];

  array.map((element, i) => [
    element.slice(0, element.indexOf(':') + 1),
    element.slice(element.indexOf(':') + 1, -1),
  ]);

  array.map((element) => element[0] + element[1]);

  const newObject = { ...array };

  return newObject;
}

module.exports = convertToObject;
