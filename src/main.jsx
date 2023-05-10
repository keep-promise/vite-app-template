import { createRoot } from 'react-dom/client';
import './index.css';

const app = <img src='/logo.svg' />;
const container = document.getElementById('root');

createRoot(container).render(app);

import _Promise from 'babel-runtime/core-js/promise';
var promise = new _Promise();
console.log('promise', promise)
import _typeof from 'babel-runtime/helpers/typeof'
console.log('_typeof', _typeof)