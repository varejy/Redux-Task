import { SEND_MESSAGE } from '../render';

const initialState = {
    text: []
}

export const rootReducer = (state = initialState, action) => {
    console.log(...state.text + "     " + action.payload);
    
    switch (action.type){
        case SEND_MESSAGE:
            return { 
                ...state, 
                text: [...state.text , action.payload]
            };
    }
    return state;
}
