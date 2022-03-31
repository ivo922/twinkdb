import React, { useEffect, useState } from 'react';

function WowheadLink(props) {
  const [isLink, setIsLink] = useState(true);
  const [isRenamed, setIsRenamed] = useState(true);
  const [content, setContent] = useState('');

  /**
   * Set link content.
   *
   * @returns {String}
   */
  const setLinkContent = () => {
    if (props.url[0] === '[') {
      setIsLink(false);
      return setContent(`${props.url.replace('[', '').replace(']', '')}`);
    }

    if (props.url.includes('quest=')) {
      setIsRenamed(false);

      if (props.url.includes('@')) {
        const parts = props.url.split('@');
        const source = parts[1];

        return setContent(`Quest\n(${source})`);
      }

      return setContent('Quest');
    }

    if (props.url.includes('@')) {
      const parts = props.url.split('|');
      const source = parts[1].split('@');
      const name = source[0];
      const zone = source[1];

      setIsRenamed(false);
      return setContent(`${name}\n(${zone})`);
    }

    return '';
  };

  /**
   * Lifecycle hook.
   */
  useEffect(() => {
    setLinkContent();
  });

  /**
   * Render.
   */
  if (isLink) {
    return (
      <a href={props.url} data-wh-rename-link={isRenamed} data-wh-icon-size="medium">
        {content}
      </a>
    );
  } else {
    return <span>{content}</span>;
  }
}

export default WowheadLink;
