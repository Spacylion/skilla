import React, {useRef, useState} from "react";
import s from './Calls.module.css';
import CallsTable from "../../entities/calls/calls-table/СallsTable.jsx";
import CallsConfigs from "../../entities/calls/calls-configs/CallsConfigs.jsx";
import CallsFilters from "../../entities/calls/calls-filters/CallFilters.jsx";

const Calls = ({calls, handleTypeSelect, selectedType, recordUrls}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRecordIndex, setSelectedRecordIndex] = useState(null);

    const togglePlay = (index) => {
        if (!isLoading) {
            if (isPlaying && selectedRecordIndex === index) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                setSelectedRecordIndex(index);
                setIsPlaying(true);
                setIsLoading(true);
                if (recordUrls[index]) {
                    audioRef.current.src = `data:audio/mpeg;base64,${recordUrls[index]}`;
                    audioRef.current.play();
                }
            }
        }
    };
    const handleLoadedData = () => {
        setIsLoading(false);
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <CallsConfigs/>
                <CallsFilters
                    calls={calls}
                    selectedType={selectedType}
                    handleTypeSelect={handleTypeSelect}
                />
                <div className={s.calls}>
                    <CallsTable
                        calls={calls}
                        isPlaying={isPlaying}
                        selectedRecordIndex={selectedRecordIndex}
                        togglePlay={togglePlay}
                        audioRef={audioRef}
                        handleLoadedData={handleLoadedData}
                        handleEnded={handleEnded}
                        recordUrls={recordUrls}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calls;
