import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './PaGS/Homepage';
import AboutPage from './PaGS/AboutPage';
import ContactPage from './PaGS/ContactPage';
import PrivacyPolicyPage from './PaGS/PrivacyPolicyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'contact',
        Component: ContactPage,
      },
      {
        path: 'privacypolicy',
        Component: PrivacyPolicyPage,
      },
    ],
  },
]);