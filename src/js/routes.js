
import HomePage from '../pages/swalay.f7';
import haldiAlayRegular from '../pages/haldiAlayRegular.f7';
import haldiAlayCandid from '../pages/haldiAlayCandid.f7';
import haldiSweta from '../pages/haldiSweta.f7'
import engagement from '../pages/engagement.f7'
import weddingAlayRegular from '../pages/weddingAlayRegular.f7'
import weddingAlayCandid from '../pages/weddingAlayCandid.f7'
import weddingSweta from '../pages/weddingSweta.f7'
import santakAlayRegular from '../pages/santakAlayRegular.f7'
import santakAlayCandid from '../pages/santakAlayCandid.f7'
import santakSweta from '../pages/santakSweta.f7'
import sangeetAlayCandid from '../pages/sangeetAlayCandid.f7'
import sangeetAlayRegular from '../pages/sangeetAlayRegular.f7'
import sangeetSweta from '../pages/sangeetSweta.f7'
import videoLibraryEngagement from "../pages/videoLibraryEngagement.f7"
import videoLibraryWedding from "../pages/videoLibraryWedding.f7"

import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/santakSweta/',
    component: santakSweta,
  },
  {
    path: '/weddingSweta/',
    component: weddingSweta,
  },
  {
    path: '/haldiAlayRegular/',
    component: haldiAlayRegular,
  },
  {
    path: '/haldiAlayCandid/',
    component: haldiAlayCandid,
  },{

    path: '/haldiSweta/',
    component: haldiSweta,
  },{

    path: '/engagement/',
    component: engagement,
  },
  {
    path: '/weddingAlayRegular/',
    component: weddingAlayRegular,
  },
  {
    path: '/weddingAlayCandid/',
    component: weddingAlayCandid,
  },
  {
    path: '/santakAlayRegular/',
    component: santakAlayRegular,
  },
  {
    path: '/santakAlayCandid/',
    component: santakAlayCandid,
  },
  {
    path: '/sangeetAlayRegular/',
    component: sangeetAlayRegular,
  },
  {
    path: '/sangeetAlayCandid/',
    component: sangeetAlayCandid,
  },
  
  {
    path: '/videoLibraryEngagement/',
    component: videoLibraryEngagement,
  },
  {
    path: '/videoLibraryWedding/',
    component: videoLibraryWedding,
  },
  {
    path: '/sangeetSweta/',
    component: sangeetSweta,
  },
  {
    path: '/dynamic-route/imageName/:imgName/image/:img/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;