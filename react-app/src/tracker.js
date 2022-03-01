import { newTracker, trackPageView, enableActivityTracking } from "@snowplow/browser-tracker";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ScreenViewPlugin, trackScreenView } from 'screen-view-plugin';

let tracker = newTracker('ns1', 'http://localhost:9090', {
  plugins: [ ScreenViewPlugin() ]
});

enableActivityTracking({
  minimumVisitLength: 5,
  heartbeatDelay: 3
});

const useLocationChange = () => {
  const location = useLocation();
  React.useEffect(() => { 
    trackPageView();
    trackScreenView({ name: location.pathname });
   }, [location]);
};

export { tracker, useLocationChange };
