import Colors from './colors';

export const BLOCK_ELEMENTS = {
  blockquote: {
    paddingLeft: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.grey,
    marginBottom: 12,
  },
  div: {},
  h1: {
    fontWeight: 'bold',
  },
  h2: {
    fontWeight: 'bold',
  },
  h3: {
    fontWeight: 'bold',
  },
  h4: {
    fontWeight: 'bold',
  },
  h5: {
    fontWeight: 'bold',
  },
  h6: {
    fontWeight: 'bold',
  },
  hr: {},
  ol: {
    marginLeft: 24,
  },
  ul: {
    marginLeft: 24,
  },
  p: {
    marginBottom: 12,
  },
  pre: {},
  li: {},
  default: {},
};

export const INLINE_ELEMENTS = {
  a: {},
  b: {
    fontWeight: 'bold',
  },
  b1: {
    fontWeight: '600',
  },
  br: {},
  danger: {
    color: Colors.tomato,
  },
  em: {
    fontStyle: 'italic',
  },
  i: {
    fontStyle: 'italic',
  },

  strong: {
    fontWeight: 'bold',
  },
  q: {},
  span: {},
  sub: {},
  sup: {},
  default: {},
};
