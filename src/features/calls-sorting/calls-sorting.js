import {useState} from "react";

export const useCallsSorting = (calls) => {
    const [sortedCalls, setSortedCalls] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc');

    export const handleSort = () => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        const sorted = [...calls].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return direction === 'asc' ? dateA - dateB : dateB - dateA;
        });

        return {
            sortedCalls,
            setSortedCalls,
            sortDirection,
            setSortDirection,
            handleSort,
        };
    }
}
