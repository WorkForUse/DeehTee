// Router.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './PaGS/Homepage';
import AboutPage from './PaGS/AboutPage';
import ContactPage from './PaGS/ContactPage';
import PrivacyPolicyPage from './PaGS/PrivacyPolicyPage';

// Get the base path from the current URL if not explicitly set
// This is a common practice for GitHub Pages to handle different environments (dev vs. production)
const basename = process.env.NODE_ENV === 'production'
  ? '/DeehTee/' // Replace 'DeehTee' with your actual GitHub repository name
  : '/'; // For local development

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
], {
  basename: basename 
});