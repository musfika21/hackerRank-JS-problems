function getDayName(dateString) {
    // Split the date string to get month, day, and year
    const parts = dateString.split('/');
    const month = parseInt(parts[0]);
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    
    // Create a Date object (month is 0-indexed in JavaScript)
    const date = new Date(year, month - 1, day);
    
    // Array of day names
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Get the day of the week (0-6, where 0 is Sunday)
    const dayIndex = date.getDay();
    
    // Return the corresponding day name
    return days[dayIndex];
}