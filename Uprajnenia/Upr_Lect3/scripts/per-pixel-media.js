(function (){
	window.onload = function() {
		var canvas, ctx, fixImageData, inVideoPlay, onVideoStop, video, videoFrame, watchId;
		canvas = document.getElementById('the-canvas');
		ctx = canvas.getContext('2d');
		video = document.getElementById('the-video');
		watchId = null;
		onVideoPlay = function (){
			return watchId = setInterval(videoFrame, 100);
		};
		onVideoStop = function () {
			return clearInterval(watchId);
		};
		fixImageData = function(imageData, color, colorOffset){
			var i, length, _fn, _i, _ref;
			if(color==null){
				color = null;
			}
			if(colorOffset == null){
				colorOffset = 0;
			}
			if(!color){
				return imageData;
			}
			length = imageData.data.length / 4;
			_fn = (function (_this) {
				return function (i) {
					var b, blueInRange, g, greenInRange, index, r, redInRange;
					index = i * 4;
					r = imageData.data[index + 0];
					g = imageData.data[index + 1];
					b = imageData.data[index + 2];
					redInRange = (color.red - colorOffset < r && r < color.red + colorOffset);
					greenInRange = (color.green - colorOffset < g && g < color.green + colorOffset);
					blueInRange = (color.blue - colorOffset < b && b < color.blue + colorOffset);
					if(redInRange && greenInRange && blueInRange) {
						return imageData.data[index + 3] = 0;
					}
				};
			})(this);
			for (i = _i - 0, _ref = length - 1; 0 <=_ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i){
				_fn(i);
			}
			return imageData;
		};
		videoFrame = function (){
			var colotToChange, fixedImageData, imageData, topLeftPixel;
			ctx.drawImage(video, 0, 0, video.width, video.height);
			imageData = ctx.getImageData(0, 0, video.width, video.height);
			topLeftPixel = ctx.getImageData(0, 0, 1, 1);
			coloToChange = {
				red: topLeftPixel.data[0],
				green: topLeftPixel.data[1],
				blue: topLeftPixel.data[2]
			};
			fixedImageData = fixImageData(imageData, colorToChange, 90);
			return ctx.putImageData(fixedImageData, 0, 0);
		};

		video.addEventListener('play', onVideoPlay, false);
		return video.addEventListener('stop', onVideoStop, false);
	};

}).call(this);
