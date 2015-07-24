window.onload = function (){
  'use strict';
  var path, rect, rect1, svg, svgNameSpace;
  svgNameSpace = 'http://www.w3.org/2000/svg';
  svg = document.getElementById('the-svg');
  rect = createRect(125, 75, 185, 95, 'none', 'blue');
  svg.appendChild(rect);
  path = createPath('M 125 200 L500 500 v-180 l135 24 Z', 'purple');
  svg.appendChild(path);
  rect1 = createRect(225, 95, 285, 195, 'none', 'aqua');
  svg.appendChild(rect1);

  function createRect(x, y, width, height) {
    var rect;
    rect = document.createElementNS(svgNameSpace, 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    return rect;
  }

  function createPath (points) {
    var path;
    path = document.createElementNS(svgNameSpace, 'path');
    path.setAttribute('d', points);
    path.setAttribute('stroke-width', '5');
    path.setAttribute('stroke', 'darkblue');
    return path;
  }
};