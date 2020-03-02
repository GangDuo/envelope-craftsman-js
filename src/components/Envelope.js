import * as React from 'react';

function Envelope() {
  return (
    <>
      <section className="sheet">
        <article>
          <span className="horizontal-line top-horizontal-line"></span>
          <span className="horizontal-line bottom-horizontal-line"></span>
          <span className="vertical-line left-vertical-line"></span>
          <span className="vertical-line right-vertical-line"></span>

          <span className="paste-here" id="paste-here1">のりしろ-7</span>
          <span className="paste-here" id="paste-here2">のりしろ-4</span>
          <span className="paste-here" id="paste-here3">のりしろ-5</span>
          <span className="paste-here" id="paste-here4">のりしろ-5</span>
          <span className="paste-here" id="paste-here5">のりしろ-7</span>
          <span className="paste-here" id="paste-here6">のりしろ-7</span>
          <span className="paste-here" id="paste-here7"></span>

          <span className="comment" id="comment1">↑↑折り線-1</span>
          <span className="comment" id="comment2">↑↑折り線-2</span>
          <span className="comment" id="comment3">↑↑折り線-3</span>
          <span className="comment" id="comment6">↑↑折り線-6</span>
        </article>
      </section>

      <style jsx>{`
/* 封筒型紙 */
.horizontal-line,
.vertical-line {
  position: absolute;
  display: block;
  border: 1px solid #ccc;
  transform-origin: 0 0;
  transform: rotate(-25.1deg);     
}
.horizontal-line {
  width: 1000px;
  height: 0px;
}
.top-horizontal-line {
  top: 71.077mm;
  left: 0;
}
.bottom-horizontal-line {
  top: 297mm;
  left: 59.887mm;
}
.vertical-line {
  width: 0;
  height: 1500px;
}
.left-vertical-line {
  top: 56.585mm;
  left: 0;
}
.right-vertical-line {
  top: 0;
  left: 95.647mm;
}

/* のりしろ */
.paste-here {
  position: absolute;
  display: block;
  background-color: #eee;
  text-align: center;
  padding: 5px;
  font-size: 0.8rem;
  height: 0.8rem;
  box-sizing: border-box;
}
#paste-here1 {
  top: 59.007mm;
  left: 2.116mm;
  transform-origin: 0 0;
  transform: rotate(-90deg);
  width: 59.008mm;
  height: 7mm;
}
#paste-here2 {
  top: 235.18mm;
  left: 203.332mm;
  transform-origin: 0 0;
  transform: rotate(90deg);
  width: 60.946mm;
  height: 5.959mm;
}
#paste-here3 {
  top: 0;
  left: 208.408mm;
  transform-origin: 0 0;
  transform: rotate(90deg);
  width: 42.094mm;
  height: 9.235mm;
}
#paste-here4 {
  top: 32.836mm;
  left: 116.518mm;
  transform-origin: 0 0;
  transform: rotate(1deg);
  width: 85mm;
  height: 7.706mm;
}
#paste-here5 {
  top: 255.495mm;
  left: 153.795mm;
  transform-origin: 0 0;
  transform: rotate(2deg);
  width: 44.154mm;
  height: 7.706mm;
}
#paste-here6 {
  top: 43.148mm;
  left: 208.408mm;
  transform-origin: 0 0;
  transform: rotate(90deg);
  width: 157.001mm;
  height: 7.706mm;
}
#paste-here7 {
  top: 278.198mm;
  left: 105.306mm;
  transform-origin: 0 0;
  transform: rotate(-25.1deg);
  width: 53.5mm;
  height: 7.706mm;
}

/* 折り線 */
.comment {
  position: absolute;
  display: block;
  font-size: 0.8rem;
  transform-origin: 0 0;
}
#comment1 {
  top: 262.1mm;
  left: 135.3mm;
  transform:  rotate(-25.1deg);
}
#comment2 {
  top: 38.1mm;
  left: 115.3mm;
  transform:  rotate(-115.1deg);
}
#comment3 {
  top: 13.1mm;
  left: 128.3mm;
  transform:  rotate(-25.1deg);
}
#comment6 {
  top: 293.1mm;
  left: 113.3mm;
  transform:  rotate(-115.1deg);
}
        `}</style>
    </>
  )
}

export default Envelope;