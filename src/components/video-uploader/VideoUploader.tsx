import { ChangeEventHandler, useState } from "react";
import {  GENERATE_SUBTITLES_TASK, dispatchCustomEvent /*,CAPTIONS_GENERATION_COMPLETED*/ } from "../../utils/ai-tools";

function VideoUploader() {
    const [videoSrc, setVideoSrc] = useState<string>();

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = (e) => {
            if (!e.target) return
            setVideoSrc(e.target.result as string);
            dispatchCustomEvent(GENERATE_SUBTITLES_TASK, {
                detail: {
                  videoSrc
                }
            });
        };

        reader.readAsDataURL(file);
    };

    return (
            <div>
                {!videoSrc && <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                />}
            </div>
    );
}

export default VideoUploader;