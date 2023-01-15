import {
  CaretRightOutlined,
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import { Slider, Avatar, Space, Button, Typography } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getMinAndSeconds } from "../../helpers";
import { IoIosMusicalNotes } from "react-icons/io";
import { setSelectedMusic } from "../../app/slices";

function Player() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const { selectedMusic, music } = useAppSelector((state) => state.music);

  const [sliderValue, setSliderValue] = React.useState(0);
  const [audioDuration, setAudioDuration] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const { audioUrl, artist, album, title } = selectedMusic;

  useEffect(() => {
    if (audioUrl && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      const audio = new Audio();
      let duration = 0;
      audio.src = audioUrl;
      audio.onloadedmetadata = () => {
        duration = audio.duration;
        setAudioDuration(duration);
      };
    }
  }, [selectedMusic]);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      dispatch(setSelectedMusic(music[0]));
    }
  };
  const handleNext = () => {
    const currentMusicIndex = music.findIndex(
      (music) => music.id === selectedMusic.id
    );
    const nextMusic = music[currentMusicIndex + 1];
    dispatch(setSelectedMusic(nextMusic || music[0]));
  };
  const handlePrev = () => {
    const currentMusicIndex = music.findIndex(
      (music) => music.id === selectedMusic.id
    );
    const prevMusic = music[currentMusicIndex - 1];
    dispatch(setSelectedMusic(prevMusic || music[music.length - 1]));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: " 30px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {/* Music player controls with slider */}
      <Avatar
        className={isPlaying ? "rotate" : ""}
        style={{ margin: "0 auto" }}
        size={250}
        icon={<IoIosMusicalNotes />}
        shape="circle"
      />
      <audio
        onTimeUpdate={(e) => {
          const { currentTime } = e.target as HTMLAudioElement;
          setSliderValue(currentTime);
        }}
        src={selectedMusic && selectedMusic.audioUrl}
        style={{
          visibility: "hidden",
        }}
        ref={audioRef}
      />
      <Typography.Title
        level={1}
        style={{ margin: "0 auto", fontSize: "1.5rem" }}
        ellipsis={{ rows: 1 }}
      >
        {selectedMusic && artist}
      </Typography.Title>
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Typography.Text>{selectedMusic && title}</Typography.Text>
        <Typography.Text>{album}</Typography.Text>
      </Space>
      <Space direction="vertical">
        <Slider
          disabled={!audioUrl}
          max={audioDuration}
          value={sliderValue}
          tooltip={{ formatter: null }}
          onChange={(value) => {
            if (audioRef.current) {
              audioRef.current.currentTime = value as number;
              setSliderValue(value as number);
            }
          }}
        />
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Typography.Text>{getMinAndSeconds(sliderValue)}</Typography.Text>
          <Typography.Text>{getMinAndSeconds(audioDuration)}</Typography.Text>
        </Space>
      </Space>
      <Space size={100} style={{ margin: "0 auto" }}>
        <Button
          size="large"
          type="primary"
          shape="circle"
          icon={<StepBackwardOutlined />}
          onClick={handlePrev}
        />
        <Button
          size="large"
          type="default"
          shape="circle"
          icon={
            audioRef.current && audioRef.current.paused ? (
              <CaretRightOutlined />
            ) : (
              <PauseOutlined />
            )
          }
          onClick={handlePlay}
        />
        <Button
          size="large"
          type="primary"
          shape="circle"
          icon={<StepForwardOutlined />}
          onClick={handleNext}
        />
      </Space>
    </div>
  );
}

export default Player;
