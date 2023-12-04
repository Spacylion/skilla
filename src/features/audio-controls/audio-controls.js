import {useRef, useState} from "react";

export const useAudioControls = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedRecordIndex, setSelectedRecordIndex] = useState(null);

    export const togglePlay = (index) => {
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


    export const handleLoadedData = () => {
        setIsLoading(false);
    };
    export const handleEnded = () => {
        setIsPlaying(false);
    };
    return {
        audioRef,
        isPlaying,
        setIsPlaying,
        isLoading,
        setIsLoading,
        selectedRecordIndex,
        setSelectedRecordIndex,
        togglePlay,
        handleLoadedData,
        handleEnded,
    };
};

export const togglePlay = useAudioControls().togglePlay;
export const handleLoadedData = useAudioControls().handleLoadedData;
export const handleEnded = useAudioControls().handleEnded;
