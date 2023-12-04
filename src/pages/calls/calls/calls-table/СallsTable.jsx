import React, {useEffect, useState} from "react";
import CallType from "./call-type/CallType.jsx";
import CallTime from "./call-time/CallTime.jsx";
import CallEmployee from "./call-employee/CallEmployee.jsx";
import CallNumber from "./call-number/CallNumber.jsx";
import CallSource from "./call-source/CallSource.jsx";
import CallRate from "./call-rate/CallRate.jsx";
import CallRecord from "./call-record/CallRecord.jsx";
import s from './CallsTable.module.css';

const TableRow = React.memo(({
                                 call,
                                 selectedItems,
                                 index,
                                 handleSelectItem,
                                 hoveredRow,
                                 handleMouseEnter,
                                 handleMouseLeave,
                                 isPlaying,
                                 selectedRecordIndex,
                                 togglePlay,
                                 audioRef,
                                 handleLoadedData,
                                 handleEnded,
                                 recordUrls
                             }) => (
    <tr className={`${s.filter} ${selectedItems.includes(call.id) ? s.selected : ''}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}>
        <td>
            <input
                className={`${s.checkbox} ${selectedItems.includes(call.id) ? s.active : ''}`}
                type="checkbox"
                checked={selectedItems.includes(call.id)}
                onChange={() => handleSelectItem(call.id)}
            />
        </td>
        <td><CallType call={call}/></td>
        <td><CallTime call={call}/></td>
        <td><CallEmployee call={call}/></td>
        <td><CallNumber call={call}/></td>
        <td><CallSource call={call}/></td>
        <td><CallRate call={call}/></td>
        <td>
            <CallRecord
                call={call}
                isPlaying={isPlaying}
                selectedRecordIndex={selectedRecordIndex}
                togglePlay={togglePlay}
                index={index}
                audioRef={audioRef}
                handleLoadedData={handleLoadedData}
                handleEnded={handleEnded}
                recordUrls={recordUrls}
                isHovered={hoveredRow === index}
            />
        </td>
    </tr>
));

const CallsTable = ({
                        recordUrls,
                        calls,
                        isPlaying,
                        selectedRecordIndex,
                        togglePlay,
                        audioRef,
                        handleLoadedData,
                        handleEnded,
                    }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [sortedCalls, setSortedCalls] = useState([...calls]);
    const [sortDirection, setSortDirection] = useState('asc'); // Define sortDirection here

    const handleSelectAll = () => {
        const allIds = calls.map(call => call.id);
        setSelectedItems(prevState => (prevState.length !== calls.length ? allIds : []));
    };

    const handleSelectItem = id => {
        setSelectedItems(prevState => prevState.includes(id) ? prevState.filter(itemId => itemId !== id) : [...prevState, id]);
    };

    const handleMouseEnter = index => {
        setHoveredRow(index);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };

    const handleSort = () => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        const sorted = [...calls].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return direction === 'asc' ? dateA - dateB : dateB - dateA;
        });

        setSortDirection(direction);
        setSelectedItems([]);
        setSortedCalls(sorted);
        console.log(sorted)
    };

    useEffect(() => {
        setSortedCalls([...calls]);
        setSelectedItems([]);
    }, [calls]);

    return (
        <table>
            <thead>
            <tr>
                <th>
                    <input
                        className={`${s.main__checkbox}`}
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedItems.length === calls.length}
                    />
                </th>
                <th>Тип</th>
                <th onClick={handleSort}>Время</th>
                <th>Сотрудник</th>
                <th>Телефон</th>
                <th>Источник</th>
                <th>Оценка</th>
                <th onClick={() => handleSort('duration')}>Длительность</th>
            </tr>
            </thead>
            <tbody>
            {sortedCalls.map((call, index) => (
                <TableRow
                    key={call.id}
                    call={call}
                    selectedItems={selectedItems}
                    index={index}
                    handleSelectItem={handleSelectItem}
                    hoveredRow={hoveredRow}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    isPlaying={isPlaying}
                    selectedRecordIndex={selectedRecordIndex}
                    togglePlay={togglePlay}
                    audioRef={audioRef}
                    handleLoadedData={handleLoadedData}
                    handleEnded={handleEnded}
                    recordUrls={recordUrls}
                />
            ))}
            </tbody>
        </table>
    );
};

export default CallsTable;
