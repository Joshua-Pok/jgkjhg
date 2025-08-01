import { useMemo } from 'react';

export const useFormatDate = () => {
  const formatDate = useMemo(() => {
    return (dateString: string | null | undefined): string => {
      if (!dateString) {
        return 'N/A';
      }

      try {
        // Parse the date string - handle the format "2025-07-30T08:55.47.112.208"
        // We need to clean up the time portion to make it valid
        let cleanDateString = dateString;
        
        // If the time portion has multiple dots (like 08:55.47.112.208), 
        // we need to extract just the time part
        if (dateString.includes('T')) {
          const [datePart, timePart] = dateString.split('T');
          
          // Extract just the time (HH:MM:SS) from the complex time string
          // Handle formats like "08:55.47.112.208" -> "08:55:47"
          let cleanTimePart = timePart;
          
          // If time has multiple dots, take the first part before the first dot
          if (timePart.includes('.')) {
            const timeComponents = timePart.split('.');
            if (timeComponents.length >= 2) {
              // Take the first two parts: HH:MM and SS
              cleanTimePart = `${timeComponents[0]}:${timeComponents[1]}`;
            } else {
              cleanTimePart = timeComponents[0];
            }
          }
          
          // Ensure we have a valid time format
          if (cleanTimePart.includes(':')) {
            const timeParts = cleanTimePart.split(':');
            if (timeParts.length >= 2) {
              // Format as HH:MM:SS
              const hours = timeParts[0].padStart(2, '0');
              const minutes = timeParts[1].padStart(2, '0');
              const seconds = timeParts[2] ? timeParts[2].padStart(2, '0') : '00';
              cleanTimePart = `${hours}:${minutes}:${seconds}`;
            }
          }
          
          cleanDateString = `${datePart}T${cleanTimePart}`;
        }

        // Create Date object
        const date = new Date(cleanDateString);
        
        // Check if date is valid
        if (isNaN(date.getTime())) {
          console.warn('Invalid date string:', dateString);
          return 'Invalid Date';
        }

        // Format to "Jul 23, 2025 2:53PM"
        const options: Intl.DateTimeFormatOptions = {
          month: 'short',    // Jul
          day: 'numeric',    // 23
          year: 'numeric',   // 2025
          hour: 'numeric',   // 2
          minute: '2-digit', // 53
          hour12: true       // AM/PM
        };

        return date.toLocaleDateString('en-US', options);
      } catch (error) {
        console.error('Error formatting date:', error, 'Date string:', dateString);
        return 'Invalid Date';
      }
    };
  }, []);

  return formatDate;
}