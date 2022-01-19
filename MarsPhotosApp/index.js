import App from "./src/App";
import './index.scss';

(async () => {
  const app = await App();
  const root = document.getElementById('root');
  root.append(app);
})();
