
export const createEvent = (event) => ({
    type: 'EVENT_CREATE',
    payload: event
});

export const editEvent = (id) => ({
    type: 'EVENT_EDIT',
    payload: id
});

export const deleteEvent = (id) => ({
    type: 'EVENT_DELETE',
    payload: id
});

export const initEvent = (momentObj) => ({
    type: 'EVENT_INIT',
    payload: momentObj.format('YYYY/MM/DD')
});

export const clearEvent = () => ({
    type: 'EVENT_CLEAR',
    payload: {}
});
