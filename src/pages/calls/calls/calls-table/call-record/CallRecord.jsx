import React from "react";
import s from './CallRecord.module.css';
import Close from "@/shared/assets/icons/record/close.svg";
import Download from "@/shared/assets/icons/record/download.svg";
import Play from "@/shared/assets/icons/record/play.svg";
import Pause from "@/shared/assets/icons/record/pause.svg";
import CallDuration from "../call-duration/CallDuration.jsx";

const CallRecord = ({
                        recordUrls,
                        call,
                        isPlaying,
                        selectedRecordIndex,
                        togglePlay,
                        index,
                        audioRef,
                        handleLoadedData,
                        handleEnded,
                        isHovered,
                    }) => {


    return (
        <div className={isHovered
            ? `${s.wrapper} ${s.showRecord}`
            : s.wrapper}>
            <div className={s.wrapper}>
                {isHovered && recordUrls
                    ? (<div className={s.record}>
                        <CallDuration call={call}/>
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
                    : <CallDuration call={call}/>}
            </div>
        </div>
    );
};

export default CallRecord;
