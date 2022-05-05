import classes from './Browse.module.css';
function Browse() {
  const handleFileSelect = (e) => {
    var files = e.target.files;
    for (var i = 0; i < files.length; i++) {
      var item = document.createElement('li');
      console.log(files[i]);
    }
  };
  return (
    <div className={classes.container}>
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
        multiple
      />
    </div>
  );
}

export default Browse;
