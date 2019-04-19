import * as React from 'react';
import * as ReactDom from 'react-dom';
import { StateProvider } from 'state/StateProvider';

import { App } from './components/App';
import './index.scss';

const ENTRY_NODE_NAME = 'app';

const entryNode = document.getElementById(ENTRY_NODE_NAME);

ReactDom.render(
  <StateProvider>
    <App />
  </StateProvider>,
  entryNode,
);
