import { newTracker, trackPageView, enableActivityTracking } from "@snowplow/browser-tracker";
import React from 'react';
import { useLocation } from 'react-router-dom';

let tracker = newTracker('ns1', 'http://localhost:9090');
enableActivityTracking({
  minimumVisitLength: 5,
  heartbeatDelay: 3
});

const useLocationChange = () => {
  const location = useLocation()
  React.useEffect(() => { 
    trackPageView();
    console.log('here');
   }, [location])
}

export { tracker, useLocationChange };
