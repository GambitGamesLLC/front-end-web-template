import './app.scss'
import App from './App.svelte'

export const app = new App({
  //@ts-ignore
  target: document.getElementById('app')
});