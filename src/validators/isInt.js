import isInt from 'validator/lib/isInt';

import { template } from '../core';

import { isEmpty } from './util';

export default {
  isInt: {
    method: (value, option) => isEmpty(value) || isInt(value, option),
    message: template`${0} is not a int value or not in the range. Please check your value and try again.`,
  },
};
