const OPERATORS = {
  EQ: 'EQ',
  GT: 'GT',
  GTE: 'GTE',
  LT: 'LT',
  LTE: 'LTE',
  SW: 'SW',
  EW: 'EW',
  IN: 'IN',
  WC: 'WC',
};

const getQueryByField = (value, operator) => {
  switch (operator) {
    case OPERATORS.EQ:
      return value;
    case OPERATORS.GT:
      return { $gt: value };
    case OPERATORS.GTE:
      return { $gte: value };
    case OPERATORS.LT:
      return { $lt: value };
    case OPERATORS.LTE:
      return { $lte: value };
    case OPERATORS.SW:
      return new RegExp('^' + value, 'i');
    case OPERATORS.EW:
      return new RegExp(value + '$', 'i');
    case OPERATORS.WC:
      return new RegExp(value, 'gi');
    case OPERATORS.IN:
      return { $in: [...value.replace(/\s/g, '').split(',')] };
  }
};

const getQuery = (params) => {
  let query = {};
  const keys = Object.keys(params);
  if (keys && keys.length) {
    for (const key of keys) {
      if (params[key].value) {
        query = {
          ...query,
          [key]: getQueryByField(params[key].value, params[key].option),
        };
      }
    }
  }
  return query;
};

module.exports = {
  OPERATORS,
  getQueryByField,
  getQuery,
};
