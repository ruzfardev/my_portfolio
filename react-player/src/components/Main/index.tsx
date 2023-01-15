import React, { FC } from "react";
import { Layout, List, Space, Upload } from "antd";
import { Header } from "antd/es/layout/layout";
import { AmazonOutlined, UploadOutlined } from "@ant-design/icons";
import DropFile from "../Dropzone";
import MusicList from "../List";
import Player from "../Player";
import { useAppSelector } from "../../app/hooks";
const Main: FC = () => {
  const { music } = useAppSelector((state) => state.music);
  console.log(music);
  return (
    <Layout
      className="layout"
      style={{
        height: "calc(100vh - 100px)",
        width: "80vw",
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        background: "transparent",
        backdropFilter: "blur(10px)",
        zIndex: 1,
      }}
    >
      <Header
        style={{
          backgroundColor: "transparent",
          borderBottom: "1px solid #e9e9e9",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          React Player
        </div>
      </Header>
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            padding: "20px 10px 20px 20px",
            overflow: "auto",
          }}
        >
          <Player />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            padding: "20px 20px 20px 10px",
            overflow: "auto",
          }}
        >
          {music.length > 0 ? <MusicList musicList={music} /> : <DropFile />}
        </div>
      </div>
    </Layout>
  );
};

export default Main;
