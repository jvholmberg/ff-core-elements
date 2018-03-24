import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Modal } from '../../';

export default storiesOf('Modal', module)
  .add('with text', () => (
    <Modal onClick={action('clicked')}>Hello Modal</Modal>
  ))
  .add('with some emoji', () => (
    <Modal onClick={action('clicked')}>😀 😎 👍 💯</Modal>
  ));
