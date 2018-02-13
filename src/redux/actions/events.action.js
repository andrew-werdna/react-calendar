
export const createEvent = (event) => ({
    type: 'EVENT_CREATE',
    event
});

export const editEvent = (id) => ({
    type: 'EVENT_EDIT',
    id
});

export const deleteEvent = (id) => ({
    type: 'EVENT_DELETE',
    id
});
