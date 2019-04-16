import { SEND_MESSAGE } from '../render';

export const sendMessage = (newMsg) => {
    return {
        type: SEND_MESSAGE,
        payload: [
            newMsg
        ]
    }

}