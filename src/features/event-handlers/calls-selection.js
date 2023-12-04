import {useState} from "react";

export const useCallSelection = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);

    export const handleSelectAll = (calls, selectedItems, setSelectedItems) => {
        const allIds = calls.map(call => call.id);
        setSelectedItems(prevState => (prevState.length !== calls.length ? allIds : []));
    };


    export const handleSelectItem = (id, selectedItems, setSelectedItems) => {
        setSelectedItems(prevState =>
            prevState.includes(id) ? prevState.filter(itemId => itemId !== id) : [...prevState, id]
        );
    };
    export const handleMouseEnter = (index, setHoveredRow) => {
        setHoveredRow(index);
    };

    export const handleMouseLeave = () => {
        setHoveredRow(null);
    };
    return {
        selectedItems,
        setSelectedItems,
        hoveredRow,
        setHoveredRow,
        handleSelectAll,
        handleSelectItem,
        handleMouseEnter,
        handleMouseLeave,
    };
};
