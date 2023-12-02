import React, {useState, useRef} from "react";
import s from './CallRecord.module.css';
import Close from "@/shared/assets/icons/record/close.svg";
import Download from "@/shared/assets/icons/record/download.svg";
import Play from "@/shared/assets/icons/record/play.svg";
import Pause from "@/shared/assets/icons/record/pause.svg";

const CallRecord = ({calls}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const togglePlay = () => {
        if (!isLoading) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleLoadedData = () => {
        setIsLoading(false);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.record}>
                <p>duration</p>
                <img
                    src={isPlaying ? Pause : Play}
                    className={`${s.play} ${s.active}`}
                    alt="play"
                    onClick={togglePlay}
                />
                <div className={`${s.progress} ${s.complete}`}></div>
                <img src={Download} className={`${s.download} ${s.active}`} alt="download"/>
                <img src={Close} className={`${s.close} ${s.active}`} alt="download"/>
                <audio
                    ref={audioRef}
                    controls={false}
                    onLoadedData={handleLoadedData}
                >
                    {/*<source src={`data:audio/mpeg;base64,${record.record}`} type="audio/mpeg"/>*/}
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default CallRecord;
