import { render } from 'preact';
import { App } from './app.tsx';
import './styles/Global.scss';

render(<App />, document.getElementById('app')!);
