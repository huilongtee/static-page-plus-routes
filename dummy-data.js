const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Programming for everyone',
        description: 'Everyone can learn to code',
        location: 'Somestreet 521, 12345 San Somewhereo',
        date: '2021-05-23',
        image: 'images/place5.jpg',
        isFeatured: false
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description: 'Networking can be awkward',
        location: 'Somestreet 521, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/place4.jpg',
        isFeatured: true
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description: 'Networking can be awkward',
        location: 'Somestreet 521, 12345 San Somewhereo',
        date: '2022-5-12',
        image: 'images/place3.jpg',
        isFeatured: true
    },
    {
        id: 'e4',
        title: 'Networking for extroverts',
        description: 'Networking can be awkward',
        location: 'Somestreet 521, 12345 San Somewhereo',
        date: '2021-12-12',
        image: 'images/place2.jpg',
        isFeatured: true
    },
    {
        id: 'e5',
        title: 'Networking for extroverts',
        description: 'Networking can be awkward',
        location: 'Somestreet 521, 12345 San Somewhereo',
        date: '2022-03-30',
        image: 'images/place1.jpg',
        isFeatured: true
    },

];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}