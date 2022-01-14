import nativeToast from 'native-toast';
import App from './src/components/App';
import footer from './src/components/footer/footer';

const root = document.getElementById('root');
(async () => {
  const app = await App();
  root.append(app);
})();

const footerAdd = footer();
root.after(footerAdd);

nativeToast({
  closeOnClick: true,
  position: 'south-east',
  message: 'If you know these people, please let us know by number: 911. Click here to close the window',
  edge: true,
  timeout: 0,
  type: 'success',
});
