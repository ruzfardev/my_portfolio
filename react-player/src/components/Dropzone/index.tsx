import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { loadMusicFolder } from "../../app/slices";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { createObjectUrl, getAudioDuration } from "../../helpers";
// @ts-ignore
const jsmediatags = window.jsmediatags;
function DropFile() {
  const dispatch = useAppDispatch();
  const handleFiles = (files: any) => {
    const file = files.file;
    jsmediatags.read(file, {
      onSuccess: function (tag: any) {
        const id = file.uid;
        const audioUrl = createObjectUrl(file);
        let { title, artist, album } = tag.tags;
        if (!title) {
          title = file.name;
        }
        if (!artist) {
          artist = "Unknown Artist";
        }
        if (!album) {
          album = "Unknown Album";
        }
        dispatch(loadMusicFolder({ id, title, artist, album, audioUrl }));
      },
      onError: function (error: any) {
        console.log(error);
      },
    });
  };
  return (
    <Upload.Dragger
      name="file"
      directory={true}
      multiple={false}
      showUploadList={false}
      beforeUpload={() => false}
      onChange={handleFiles}
    >
      <p className="ant-upload-drag-icon">
        <UploadOutlined type="inbox" />
      </p>
      <p className="ant-upload-text">
        Click or drag files to this area to upload
      </p>
    </Upload.Dragger>
  );
}

export default DropFile;
