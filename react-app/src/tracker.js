import { newTracker, trackPageView, enableActivityTracking } from "@snowplow/browser-tracker";
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ScreenViewPlugin, trackScreenView } from 'screen-view-plugin';
import { FormTrackingPlugin } from '@snowplow/browser-plugin-form-tracking';

let tracker = newTracker('ns1', 'http://localhost:9090', {
  plugins: [ FormTrackingPlugin(), ScreenViewPlugin() ]
});

enableActivityTracking({
  minimumVisitLength: 15,
  heartbeatDelay: 10
});

const useLocationChange = () => {
  const location = useLocation();
  React.useEffect(() => { 
    trackPageView();
    trackScreenView({ name: location.pathname });
   }, [location]);
};

export { tracker, useLocationChange };
