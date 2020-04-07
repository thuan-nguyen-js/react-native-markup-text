import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import parse5 from 'parse5';
import { BLOCK_ELEMENTS, INLINE_ELEMENTS } from './elements';

function isPureText(tagName): Boolean {
  return tagName === '#text';
}

function isBlockElement(tagName): Boolean {
  return BLOCK_ELEMENTS[tagName] !== undefined;
}

function isInlineElement(tagName): Boolean {
  return INLINE_ELEMENTS[tagName] !== undefined;
}

function styleForTag(tagName, source) {
  const style = source[tagName] ? source[tagName] : source.default;
  return style;
}

function processNode(node, parentKey) {
  const { nodeName } = node;

  if (isPureText(nodeName)) {
    const key = `${parentKey}_text`;
    return <Text key={key}>{node.value}</Text>;
  }

  if (isInlineElement(nodeName)) {
    const key = `${parentKey}_${nodeName}`;
    const children = [];
    node.childNodes.forEach((child, index) => {
      if (isInlineElement(child.nodeName) || isPureText(child.nodeName)) {
        children.push(processNode(child, `${key}_${index}`));
      } else {
        console.error(
          'MarkupText',
          `Inline element ${nodeName} can only have inline children, ${child} is invalid!`
        );
      }
    });
    return (
      <Text key={key} style={styleForTag(nodeName, INLINE_ELEMENTS)}>
        {children}
      </Text>
    );
  }

  if (isBlockElement(nodeName)) {
    const key = `${parentKey}_${nodeName}`;
    const children = [];
    let lastInlineNodes = [];

    node.childNodes.forEach((childNode, index) => {
      const child = processNode(childNode, `${key}_${index}`);
      if (isInlineElement(childNode.nodeName) || isPureText(childNode.nodeName)) {
        lastInlineNodes.push(child);
      } else if (isBlockElement(childNode.nodeName)) {
        if (lastInlineNodes.length > 0) {
          // eslint-disable-next-line react/no-array-index-key
          children.push(<Text key={`${key}_${index}_inline`}>{lastInlineNodes}</Text>);
          lastInlineNodes = [];
        }
        children.push(child);
      }
    });

    if (lastInlineNodes.length > 0) {
      children.push(<Text key={`${key}_last_inline`}>{lastInlineNodes}</Text>);
    }

    return (
      <View key={key} style={styleForTag(nodeName, BLOCK_ELEMENTS)}>
        {children}
      </View>
    );
  }

  console.warn('MarkupText', `unsupported node: ${nodeName}`);
  return null;
}

class MarkupText extends React.PureComponent {
  parse = text => {
    const fragment = parse5.parseFragment(text);
    return fragment;
  };

  render() {
    const { children, style } = this.props;
    const _children = typeof children === 'string' ? children : '';
    const fragment = this.parse(_children);
    const rootKey = 'ht_';

    const elements = [];
    fragment.childNodes.forEach((node, index) => {
      elements.push(processNode(node, `${rootKey}_${index}`));
    });

    return <Text style={style}>{elements}</Text>;
  }
}

MarkupText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.string,
};

MarkupText.defaultProps = {
  style: undefined,
  children: '',
};

export default MarkupText;
