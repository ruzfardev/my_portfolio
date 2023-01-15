export const createObjectUrl = (file: File) => {
    return URL.createObjectURL(file)
}

export const getAudioDuration = (audioUrl: string) => {
    const audio = new Audio();
    let duration = 0;
    audio.src = audioUrl;
    audio.onloadedmetadata = () => {
        duration = audio.duration;
    }
    return duration;
}

export const getMinAndSeconds = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration - minutes * 60);
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}