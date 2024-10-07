import {eventEmitter} from './eventEmitter';

export const notifyExternally = (headMessage, bodyMessage, duration = 5000) => {
    eventEmitter.emit('notify', { headMessage, bodyMessage, duration });
};
