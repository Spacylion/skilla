export const calculateEndDate = (interval) => {
    const today = new Date();
    switch (interval) {
        case '3 Дня':
            return today.toISOString().split('T')[0];
        case 'Неделя':
            const weekAgo = new Date(today);
            weekAgo.setDate(today.getDate() - 7);
            return weekAgo.toISOString().split('T')[0];
        case 'Месяц':
            const monthAgo = new Date(today);
            monthAgo.setMonth(today.getMonth() - 1);
            return monthAgo.toISOString().split('T')[0];
        case 'Год':
            const yearAgo = new Date(today);
            yearAgo.setFullYear(today.getFullYear() - 1);
            return yearAgo.toISOString().split('T')[0];
        default:
            return today.toISOString().split('T')[0];
    }
};

export const calculateStartDate = (interval) => {
    const startDate = new Date(calculateEndDate(interval));
    switch (interval) {
        case '3 Дня':
            const threeDaysAgo = new Date(startDate);
            threeDaysAgo.setDate(startDate.getDate() - 3);
            return threeDaysAgo.toISOString().split('T')[0];
        case 'Неделя':
            return startDate.toISOString().split('T')[0];
        case 'Месяц':
            const monthAgo = new Date(startDate);
            monthAgo.setMonth(startDate.getMonth() - 1);
            return monthAgo.toISOString().split('T')[0];
        case 'Год':
            const yearLater = new Date(startDate);
            yearLater.setFullYear(startDate.getFullYear() + 1);
            return yearLater.toISOString().split('T')[0];
        default:
            return startDate.toISOString().split('T')[0];
    }
};


// Функция для получения следующего интервала
export const getNextInterval = (selectedInterval) => {
    switch (selectedInterval) {
        case '3 Дня':
            return 'Неделя';
        case 'Неделя':
            return 'Месяц';
        case 'Месяц':
            return 'Год';
        case 'Год':
            return '3 Дня';
        default:
            return '3 Дня';
    }
};

// Функция для получения предыдущего интервала
export const getPreviousInterval = (selectedInterval) => {
    switch (selectedInterval) {
        case '3 Дня':
            return 'Год';
        case 'Неделя':
            return '3 Дня';
        case 'Месяц':
            return 'Неделя';
        case 'Год':
            return 'Месяц';
        default:
            return '3 Дня';
    }
};
export const calculateDates = (interval) => {
    const today = new Date();
    switch (interval) {
        case '3 Дня':
            const threeDaysAgo = new Date(today);
            threeDaysAgo.setDate(today.getDate() - 3);
            return {
                date_start: threeDaysAgo.toISOString().split('T')[0],
                date_end: today.toISOString().split('T')[0],
            };
        case 'Неделя':
            const weekAgo = new Date(today);
            weekAgo.setDate(today.getDate() - 7);
            return {
                date_start: weekAgo.toISOString().split('T')[0],
                date_end: today.toISOString().split('T')[0],
            };
        case 'Месяц':
            const monthAgo = new Date(today);
            monthAgo.setMonth(today.getMonth() - 1);
            return {
                date_start: monthAgo.toISOString().split('T')[0],
                date_end: today.toISOString().split('T')[0],
            };
        case 'Год':
            const yearAgo = new Date(today);
            yearAgo.setFullYear(today.getFullYear() - 1);
            return {
                date_start: yearAgo.toISOString().split('T')[0],
                date_end: today.toISOString().split('T')[0],
            };
        default:
            const defaultStartDate = calculateStartDate('3 Дня');
            const defaultEndDate = calculateEndDate('3 Дня');
            return {
                date_start: defaultStartDate,
                date_end: defaultEndDate,
            };
    }
};

// преобразование даты из стейта в input placeholder для маски
export const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear().toString().slice(2);
    return `${day}.${month}.${year}`;
};

export const formatDateRange = (date_start, date_end) => {
    const formattedStartDate = formatDate(date_start);
    const formattedEndDate = formatDate(date_end);
    return `${formattedStartDate}-${formattedEndDate}`;
};

// преобразователь времени в формат минуты:секунды
export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};
export const getFormattedCallTimeTime = (dateTimeString) => {
    const dateTimeParts = dateTimeString.split(' ');
    const time = dateTimeParts[1];
    return time.slice(0, 5);
};


