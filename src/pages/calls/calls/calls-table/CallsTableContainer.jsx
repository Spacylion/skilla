import React, {useEffect, useRef, useState} from "react";
import CallsTable from "./СallsTable.jsx";
import {useAudioControls} from "../../../../features/audio-controls/audio-controls.js";
import {
    handleMouseEnter,
    handleMouseLeave,
    handleSelectItem
} from "../../../../features/event-handlers/calls-selection.js";


const CallsTableContainer = ({calls, recordUrls}) => {
    const {
        audioRef,
        isPlaying,
        setIsPlaying,
        isLoading,
        setIsLoading,
        selectedRecordIndex,
        setSelectedRecordIndex,
        togglePlay,
        handleLoadedData,
        handleEnded
    } = useAudioControls();

    const {sortedCalls, setSortedCalls, sortDirection, setSortDirection, handleSort} = useCallsSorting(calls);

    const {selectedItems, setSelectedItems, hoveredRow, setHoveredRow, handleSelectAll} = useCallSelection();

    useEffect(() => {
        setSortedCalls([...calls]);
        setSelectedItems([]);
    }, [calls]);

    return (
        <CallsTable
            calls={calls}
            isPlaying={isPlaying}
            selectedItems={selectedItems}
            handleSelectItem={handleSelectItem}
            hoveredRow={hoveredRow}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            togglePlay={togglePlay}
            audioRef={audioRef}
            handleLoadedData={handleLoadedData}
            handleEnded={handleEnded}
            recordUrls={recordUrls}
            handleSelectAll={handleSelectAll}
            handleSort={handleSort}
            sortedCalls={sortedCalls}
        />

    )
        ;
};

export default CallsTableContainer;