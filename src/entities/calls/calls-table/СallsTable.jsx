import React from 'react';
import CallType from "./call-type/CallType.jsx";
import CallEmployee from "./call-employee/CallEmployee.jsx";
import CallSource from "./call-source/CallSource.jsx";
import CallRate from "./call-rate/CallRate.jsx";
import CallRecord from "./record-item/CallRecord.jsx";
import CallTime from "./call-time/CallTime.jsx";

const CallsTable = ({
                        calls, isPlaying, selectedRecordIndex,
                        togglePlay, index, audioRef, handleLoadedData,
                        handleEnded, record,
                    }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Тип</th>
                <th>Время</th>
                <th>Сотрудник</th>
                <th>Источник</th>
                <th>Оценка</th>
                <th>Длительность</th>
            </tr>
            </thead>
            <tbody>
            {calls.map(call => (
                <tr key={call.id}>
                    <td><CallType call={call}/></td>
                    <td><CallTime call={call}/></td>
                    <td><CallEmployee call={call}/></td>
                    <td><CallSource call={call}/></td>
                    <td><CallRate call={call}/></td>
                    <td><CallRecord call={call} isPlaying={isPlaying}
                                    selectedRecordIndex={selectedRecordIndex} togglePlay={togglePlay}
                                    index={index} audioRef={audioRef} handleLoadedData={handleLoadedData}
                                    handleEnded={handleEnded} record={record}
                    /></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CallsTable;
