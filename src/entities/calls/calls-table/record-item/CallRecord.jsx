import React, {useState} from "react";
import s from './CallRecord.module.css';
import Close from "@/shared/assets/icons/record/close.svg";
import Download from "@/shared/assets/icons/record/download.svg";
import Play from "@/shared/assets/icons/record/play.svg";
import Pause from "@/shared/assets/icons/record/pause.svg";
import {formatTime} from "../../../../app/providers/actions/dateUtils.js";
import CallTime from "../call-time/CallTime.jsx";

const CallRecord = ({

                        call,
                        isPlaying,
                        selectedRecordIndex,
                        togglePlay,
                        index,
                        audioRef,
                        handleLoadedData,
                        handleEnded,
                        record,
                    }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const formattedTime = formatTime(call.time);

    return (
        <div className={s.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered && record
                ? (<div className={s.record}>
                    <p>{formattedTime}</p>
                    <img
                        src={isPlaying && selectedRecordIndex === index ? Pause : Play}
                        className={`${s.play} ${s.active}`}
                        alt="play"
                        onClick={() => togglePlay(index)}
                    />
                    <div className={`${s.progress} ${s.complete}`}></div>
                    <img
                        src={Download}
                        className={`${s.download} ${s.active}`}
                        alt="download"
                    />
                    <img
                        src={Close}
                        className={`${s.close} ${s.active}`}
                        alt="download"
                    />
                    <audio
                        ref={audioRef}
                        controls={false}
                        onLoadedData={handleLoadedData}
                        onEnded={handleEnded}
                    >
                        Your browser does not support the audio element.
                    </audio>
                </div>)
                : <CallTime call={call}/>}
        </div>
    );
};

export default CallRecord;
