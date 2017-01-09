
var shape = new mojs.Shape({
  shape:        'circle',
  radius:       25,
  // scale:        { 0.2 : 1 },
  fill:         'none',
  stroke:       { '#f64040' : '#00f87f' },
  strokeWidth:  5,
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },

  duration:     2000,
  repeat:       999,
  delay:        0,
  easing:       'sin.in',
  isYoyo:       true,
  isShowEnd:    false
}).play();
