import App from './src/App';
import buttonSwitch from './src/components/buttonSwitch';

(async () => {
  const app = await App('usd');
  const root = document.getElementById('root');
  const btn = buttonSwitch();
  root.append(app);
  root.before(btn);
})();
