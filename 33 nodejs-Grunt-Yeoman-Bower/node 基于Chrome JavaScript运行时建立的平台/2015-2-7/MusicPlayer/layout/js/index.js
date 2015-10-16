var nodejs = global,
		appPath = nodejs.process.cwd(),
		musicPath = appPath + '/Music',
		musicFiles = [],
		fs = require('fs'),
		gui = require('nw.gui'),
		GUI_WINDOW = gui.Window.get(),
		isPlay = null,
		player = null;

/* *
 * 拖拽
 * */
$.fn.extend({
	drag: function(moveCallBack) {
		$(this).on('mousedown', function(e) {
		
			var _this = this;
			
			var disX = e.clientX - $(this).position().left;
			var disY = e.clientY - $(this).position().top;
			
			$(document).on('mousemove', fnMove);
			
			$(document).on('mouseup', fnUp);
			
			function fnMove(e) {
				moveCallBack && moveCallBack.call(_this, {
					x: e.clientX - disX,
					y: e.clientY - disY
				});
			}
			
			function fnUp() {
				$(document).off('mousemove', fnMove);
				$(document).off('mouseup', fnUp);
			}
			
			return false;
		});
	}
});

function getMusicList() {
	fs.readdir(musicPath, function(err, files) {
		if (err) {
			alert('音乐列表读取失败');
			return;
		}

		musicFiles = files;
		
		var $list = $('.list').html('');
		
		$.each(musicFiles, function(index, data) {
			var $li = $('<li>').html( data.replace(/(.*)\.\w+$/i, function($0, $1) {
				return $1;
			}) ).on('click', function() {
				
				player.src = musicPath + '/' + this.innerHTML + '.OGG';
				
				player.addEventListener('timeupdate', function() {
					
					var scale = this.currentTime / this.duration;
					
					var iLeft = 300 * scale - 11;
					
					$('.processbar_play_btn').css('left', iLeft);
					
				});
				
				player.addEventListener('play', function() {
					isPlay = true;
					$('#btnPlay').removeClass('btn_play').addClass('btn_stop');
				});

				player.addEventListener('pause', function() {
					isPlay = false;
					$('#btnPlay').removeClass('btn_stop').addClass('btn_play');
				});
				
				player.play();
				
			});
			$list.append( $li );
		});

	});
}

function convertTime(seconds) {
	return [ parseInt(seconds / 60), parseInt(seconds % 60) ];
}

$(document).ready(function() {
	
	player = $('#player')[0];

	//拖拽播放
	/*$('.processbar_play_btn').drag(function(pos) {
		if (pos.x < -11) {
			pos.x = -11;
		}
		if (pos.x > 289) {
			pos.x = 289;
		}
		$(this).css({
			left: pos.x
		});
	});*/
	
	$('.header').on('mousedown', function(e) {
		
		if ($(e.target).data('dragWindow') != 1) {
			return;
		}
		
		var disX = e.screenX - GUI_WINDOW.x;
		var disY = e.screenY - GUI_WINDOW.y;
		
		$(document).on('mousemove', fnMove);
		
		$(document).on('mouseup', fnUp);
		
		function fnMove(e) {
			GUI_WINDOW.x = e.screenX - disX;
			GUI_WINDOW.y = e.screenY - disY;
		}
		
		function fnUp() {
			$(document).off('mousemove', fnMove);
			$(document).off('mouseup', fnUp);
		}
		
		return false;
		
	});
	
	//关闭
	$('.close').on('click', function(){
		GUI_WINDOW.close();
	});
	
	//获取数据列表
	getMusicList();
	
	//监控文件列表变化
	fs.watch(musicPath, function(event, filename) {
		getMusicList();	//可以优化
	});
	
	$('#btnPlay').on('click', function() {
		
		if (isPlay === true) {
			player.pause();
		} else if (isPlay === false) {
			player.play();
		} else {
		}
		
	});
	

});