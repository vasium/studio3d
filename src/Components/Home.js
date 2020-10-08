import React from 'react';

function Home() {
  return (
    <div>
      <span className="drag-notice" id="js-drag-notice">
        Drag to rotate 360&#176;
      </span>
      <div className="options">
        <div className="option --is-active" data-option="Metal">
          Metal
        </div>
        <div className="option" data-option="Pillow">
          Pillow
        </div>
        <div className="option" data-option="Wood">
          Wood
        </div>
        <div className="option" data-option="Export">
          <button id="export_object">Export Model</button>
        </div>
      </div>
      <canvas id="c"></canvas>
      <div className="controls">
        <div id="js-tray" className="tray">
          <div id="js-tray-slide" className="tray__slide"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
