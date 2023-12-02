import React, {useState, useRef} from "react";
import s from './CallRecord.module.css';
import Close from "@/shared/assets/icons/record/close.svg";
import Download from "@/shared/assets/icons/record/download.svg";
import Play from "@/shared/assets/icons/record/play.svg";
import Pause from "@/shared/assets/icons/record/pause.svg";

const CallRecord = ({record, handleRecordFetch}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const togglePlay = (index) => {
        if (!isLoading) {
            if (isPlaying && selectedRecordIndex === index) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                setSelectedRecordIndex(index);
                setIsPlaying(true);
                setIsLoading(true);
                audioRef.current.src = `data:audio/mpeg;base64,${filteredRecords[index]}`;
                audioRef.current.play();
            }
        }
    };

    const handleLoadedData = () => {
        setIsLoading(false);
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    if (!record || !record.recordUrls || !Array.isArray(record.recordUrls)) {
        return <p>No records available</p>;
    }
    return (
        <div className={s.wrapper}>
            {record.recordUrls.map((rec, index) => (
                rec !== "" && (
                    <div key={index} className={s.record}>
                        <p>duration</p>
                        <img
                            src={isPlaying && selectedRecordIndex === index ? Pause : Play}
                            className={`${s.play} ${s.active}`}
                            alt="play"
                            onClick={() => togglePlay(index)}
                        />
                        <div className={`${s.progress} ${s.complete}`}></div>
                        <img src={Download} className={`${s.download} ${s.active}`} alt="download"/>
                        <img src={Close} className={`${s.close} ${s.active}`} alt="download"/>
                        <audio
                            ref={audioRef}
                            controls={false}
                            onLoadedData={handleLoadedData}
                            onEnded={handleEnded}
                        >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )
            ))}
        </div>
    );
};

export default CallRecord;