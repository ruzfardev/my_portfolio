import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setList } from '../reducers';
import classes from './Browse.module.css';
const jsmediatags = window.jsmediatags;
function Browse() {
  const dispacth = useDispatch();
  const [done, setDone] = useState(false);
  const [fileArray, setFileArray] = useState([]);
  const handleFileSelect = async (e) => {
    var files = e.target.files;
    for (var i = 0; i < files.length; i++) {
      jsmediatags.read(files[i], {
        onSuccess: function (tag) {
          let pictureUrl = '';
          let format = '';
          if(tag.tags.picture){
            const data = tag.tags.picture.data;
            format = tag.tags.picture.format;
            for (var i = 0; i < data.length; i++) {
              pictureUrl += String.fromCharCode(data[i]);
            }
          }
          // console.log(tag);
          if(tag.tags.title && tag.tags.artist){
            setFileArray((prev) => [...prev, {
              title: tag.tags.title,
              artist: tag.tags.artist,
              img: `data:${format};base64,${btoa(pictureUrl)}}`,
            }]);
          }
        },
        onError: function (error) {
          console.log(':(', error.type, error.info);
        },
      });
    }
    setTimeout(() => {
      setDone(true);
    }, 5000);
  };
  useEffect(() => {
    dispacth(setList(fileArray));
  }, [fileArray]);

  return (
    <div className={classes.container}>
      {!done && <p>Loading...</p>}
      <div className='icon-box'>
        <i className={`${classes.icon} icon folder open outline`}></i>
      </div>
      <p className={classes.text}>
        Browse music files from your computer. <br />
        <label htmlFor='select' className={classes.label}>
          Click to browse
        </label>
      </p>
      <input
        onChange={handleFileSelect}
        id='select'
        type='file'
        className={classes.select}
        webkitdirectory='true'
        directory='true'
        multiple
      />
    </div>
  );
}

export default Browse;
