import React, { FC } from "react";
import { Avatar, List, Typography } from "antd";
import { IMusic, setSelectedMusic } from "../../app/slices";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IoIosMusicalNotes } from "react-icons/io";
import { CaretRightOutlined } from "@ant-design/icons";
interface IProps {
  musicList: IMusic[];
}

const MusicList: FC<IProps> = ({ musicList }) => {
  const dispatch = useAppDispatch();
  const { selectedMusic } = useAppSelector((state) => state.music);
  return (
    <List
      className="scrollbarHidden"
      bordered
      style={{
        width: "100%",
        height: "530px",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      {musicList.map((music, index) => (
        <List.Item
          key={index}
          style={{
            cursor: "pointer",
            display: "flex",
            gap: "10px",
            justifyContent: "flex-start",
            padding: "10px",
          }}
          onClick={() => {
            dispatch(setSelectedMusic(music));
          }}
        >
          <Avatar
            icon={
              music.id === selectedMusic.id ? (
                <CaretRightOutlined />
              ) : (
                <IoIosMusicalNotes />
              )
            }
            size={40}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Typography.Text strong={true}>{music.title}</Typography.Text>
            <Typography.Text>{music.artist}</Typography.Text>
          </div>
        </List.Item>
      ))}
    </List>
  );
};

export default MusicList;
