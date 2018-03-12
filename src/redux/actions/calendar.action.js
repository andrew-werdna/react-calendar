
export const setPresentMoment = (momentObj) => ({
    type: 'SET_PRESENT_MOMENT',
    payload: momentObj
});

export const setIsCreatingEvent = (value) => ({
    type: 'SET_CREATING_EVENT',
    payload: value
});

export const setIsEditingEvent = (value) => ({
    type: 'SET_EDITING_EVENT',
    payload: value
});
