// Sample events data - in a real app, this would come from an API

// Инициализация шапки для calendar.html
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const blackLogo = new Image();
    blackLogo.src = "img/Logo_black.webp";
    const whiteLogo = new Image();
    whiteLogo.src = "img/Logo_white.webp";

    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Инициализация при загрузке
});



const events = [
    {
        id: 1,
        title: "UVU Campus Tour",
        date: "2025-05-21",
        time: "5:30 PM",
        location: "Welcome Center, UVU Admissions office — Woodbury Building, WB 128",
        description: "Join us for a guided tour of the Utah Valley University campus. Learn about the facilities, programs, and opportunities available for students. This is a great chance for newcomers to familiarize themselves with the university environment.",
        image: "img/UVU_sqaure.webp"
    },
    {
        id: 2,
        title: "English Speaking Club",
        date: "2025-05-22",
        time: "6:00 PM",
        location: "Murray Park, Pavilion 1",
        description: "Practice your English in a friendly, supportive environment. All levels are welcome! Our volunteers will help you improve your conversation skills and confidence in speaking English.",
        image: "img/ESL_square.webp"
    },
    {
        id: 3,
        title: "World Refugee Day Festival",
        date: "2025-06-20",
        time: "4:00 PM - 10:00 PM",
        location: "Big Cottonwood Regional Park",
        description: "Celebrate World Refugee Day with us at this free festival! Enjoy cultural performances, food from around the world, children's activities, and community resources. This event celebrates the resilience and contributions of refugees in our community.",
        image: "img/Refugee_Day.webp"
    },
    {
        id: 4,
        title: "Job Search Workshop",
        date: "2025-05-15",
        time: "3:00 PM - 5:00 PM",
        location: "UUA Office, Salt Lake City",
        description: "Learn effective job search strategies for the U.S. market. We'll cover resume writing, interview skills, and how to navigate online job platforms. Bring your questions!",
        image: "img/workshop.webp"
    },
    {
        id: 5,
        title: "Ukrainian Cultural Evening",
        date: "2023-05-28",
        time: "7:00 PM",
        location: "Community Center, Provo",
        description: "An evening celebrating Ukrainian culture with traditional music, dance, and food. Open to all community members who want to learn more about Ukrainian traditions.",
        image: "img/culture.webp"
    }
];

// Calendar functionality
document.addEventListener('DOMContentLoaded', function () {
    let currentDate = new Date();
    const daysGrid = document.getElementById('days-grid');
    const currentMonthYear = document.getElementById('current-month-year');
    const eventsList = document.getElementById('events-list');
    const modal = document.getElementById('event-modal');
    const closeModal = document.querySelector('.close-modal');

    // Navigation buttons
    document.getElementById('prev-month').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('next-month').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    document.getElementById('prev-year').addEventListener('click', () => {
        currentDate.setFullYear(currentDate.getFullYear() - 1);
        renderCalendar();
    });

    document.getElementById('next-year').addEventListener('click', () => {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        renderCalendar();
    });

    document.getElementById('today-btn').addEventListener('click', () => {
        currentDate = new Date();
        renderCalendar();
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Render the calendar
    function renderCalendar() {
        // Clear the calendar
        daysGrid.innerHTML = '';

        // Set the month/year display
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        currentMonthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        // Get first day of month and total days in month
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        // Get day of week for first day (0 = Sunday, 6 = Saturday)
        let startingDay = firstDay.getDay();

        // Get days from previous month to display
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        const daysInPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();

        // Get today's date for highlighting
        const today = new Date();
        const isCurrentMonth = currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

        // Create calendar days
        let day = 1;
        let nextMonthDay = 1;

        // We need 6 rows to cover all possibilities
        for (let i = 0; i < 6; i++) {
            // If we've passed the last day of the month, break
            if (day > daysInMonth) break;

            // Create a row
            for (let j = 0; j < 7; j++) {
                // Create cells for previous month
                if (i === 0 && j < startingDay) {
                    const prevDay = daysInPrevMonth - (startingDay - j - 1);
                    const dayCell = createDayCell(prevDay, true);
                    daysGrid.appendChild(dayCell);
                }
                // Create cells for current month
                else if (day <= daysInMonth) {
                    const dayCell = createDayCell(day, false);

                    // Highlight today
                    if (isCurrentMonth && day === today.getDate()) {
                        dayCell.classList.add('today');
                    }

                    // Add events for this day
                    const dayEvents = getEventsForDay(day, currentDate.getMonth() + 1, currentDate.getFullYear());
                    dayEvents.forEach(event => {
                        const eventElement = document.createElement('div');
                        eventElement.className = 'event-indicator';
                        eventElement.textContent = event.title;
                        eventElement.addEventListener('click', () => openEventModal(event));
                        dayCell.appendChild(eventElement);
                    });

                    daysGrid.appendChild(dayCell);
                    day++;
                }
                // Create cells for next month
                else {
                    const dayCell = createDayCell(nextMonthDay, true);
                    daysGrid.appendChild(dayCell);
                    nextMonthDay++;
                }
            }
        }

        // Render upcoming events
        renderUpcomingEvents();
    }

    function createDayCell(dayNumber, isOtherMonth) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        if (isOtherMonth) dayCell.classList.add('other-month');

        const dayNumElement = document.createElement('div');
        dayNumElement.className = 'day-number';
        dayNumElement.textContent = dayNumber;
        dayCell.appendChild(dayNumElement);

        return dayCell;
    }

    function getEventsForDay(day, month, year) {
        // Month is 1-12 in our data
        const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        return events.filter(event => event.date === dateStr);
    }

    function renderUpcomingEvents() {
        eventsList.innerHTML = '';

        // Sort events by date
        const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

        // Get current date for filtering
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter and display next 5 upcoming events
        let displayed = 0;
        for (const event of sortedEvents) {
            const eventDate = new Date(event.date);
            if (eventDate >= today && displayed < 5) {
                const eventElement = document.createElement('div');
                eventElement.className = 'upcoming-event';
                eventElement.addEventListener('click', () => openEventModal(event));

                const eventDateFormatted = new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                });

                eventElement.innerHTML = `
                    <h4>${event.title}</h4>
                    <p class="event-date">${eventDateFormatted} at ${event.time}</p>
                    <p>${event.location}</p>
                `;

                eventsList.appendChild(eventElement);
                displayed++;
            }
        }

        if (displayed === 0) {
            eventsList.innerHTML = '<p>No upcoming events scheduled.</p>';
        }
    }

    function openEventModal(event) {
        document.getElementById('modal-event-title').textContent = event.title;

        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        document.getElementById('modal-event-date').textContent = formattedDate;
        document.getElementById('modal-event-time').textContent = event.time;
        document.getElementById('modal-event-location').textContent = event.location;
        document.getElementById('modal-event-description').textContent = event.description;

        const eventImage = document.getElementById('modal-event-image');
        if (event.image) {
            eventImage.src = event.image;
            eventImage.style.display = 'block';
        } else {
            eventImage.style.display = 'none';
        }

        modal.style.display = "block";
    }

    // Initialize the calendar
    renderCalendar();
});