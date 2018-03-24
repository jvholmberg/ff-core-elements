import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { Button } from '../../';

export default storiesOf('Button', module)

.add(
  'with text',
  withNotes('A very simple component')
  (() => (
    <Button onClick={action('clicked')}>Some text</Button>
  )))

.add(
  'with emojis',
  withNotes('A very simple component')
  (() => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  )));
