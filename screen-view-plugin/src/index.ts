import { BrowserPlugin, BrowserTracker, dispatchToTrackersInCollection } from '@snowplow/browser-tracker-core';
import { buildSelfDescribingEvent, CommonEventProperties, PayloadBuilder } from '@snowplow/tracker-core';
import { v4 as uuidv4 } from 'uuid';

export interface ScreenViewEvent {
    name?: string;
}

const _trackers: Record<string, BrowserTracker> = {};

export function ScreenViewPlugin(): BrowserPlugin {
    return {
        activateBrowserPlugin: (tracker) => {
            _trackers[tracker.id] = tracker;
        }
    };
}

export function trackScreenView(event: ScreenViewEvent & CommonEventProperties, trackers: Array<string> = Object.keys(_trackers)) {
    dispatchToTrackersInCollection(trackers, _trackers, (t) => {
        t.core.track(
            buildScreenViewEvent(event), event.context, event.timestamp
        )
    });
}

function buildScreenViewEvent(event: ScreenViewEvent): PayloadBuilder {
    const { name } = event;
    const eventJson = {
        schema: 'iglu:com.snowplowanalytics.mobile/screen_view/jsonschema/1-0-0',
        data: {
            name,
            id: uuidv4()
        }
    };
    return buildSelfDescribingEvent({ event: eventJson });
}
