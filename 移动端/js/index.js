window.onload = function(){
	
	var page2_list = document.getElementById('page2_list');
	var page2_list_li = page2_list.getElementsByTagName('li');
	var page2_tu = document.getElementById('page2_tu');
	var page2_tu_p = page2_tu.getElementsByTagName('p')[0];
	var page2_tu_nav_a = page2_tu.getElementsByTagName('a');
	
	var n = 0;
	var num = 0;
	
	var arrshi = ['唐 王涯《春游曲》','万树江边杏','新开一夜风','满园深浅色','照在绿波中'];
	
	setTimeout(function(){
		setInterval(function(){
			n++;
			if( n > page2_list_li.length-1 ){
				n = 0;
			}
			page2_list.style.left = -n * document.documentElement.offsetWidth + 'px';
			page2_tu_p.innerHTML = arrshi[n];
			for (var i = 0; i < page2_tu_nav_a.length; i++) {
				page2_tu_nav_a[i].className = '';
			}
			page2_tu_nav_a[n].className = '#page2_tu nav active';
		},2000)
	},4000)
	
	
	//五角星
	var grade_ul = document.getElementById('grade_ul');
	var grade_ul_li = grade_ul.getElementsByTagName('li');
	
	for (var i = 0; i < grade_ul_li.length; i++) {
		wuxing(i);
	}

	
	//五角星封装函数调用
	function wuxing(index){
		var grade_ul_li_a = grade_ul_li[index].getElementsByTagName('a');
		for (var i = 0; i < grade_ul_li_a.length; i++) {
			grade_ul_li_a[i].index = i;
			grade_ul_li_a[i].addEventListener('touchstart',function(){
				for (var i = 0; i < grade_ul_li_a.length; i++) {
					if( i <= this.index){
						grade_ul_li_a[i].className = '#grade nav active';
					}else{
						grade_ul_li_a[i].className = '';
					}
				}
				
			});
		}
	}
	
	//点击标签
	var label = document.getElementById('label');
	var label_span = label.getElementsByTagName('span');
	
	//console.log(label_sapn);
	
	for (var i = 0; i < label_span.length; i++) {
		label_span[i].addEventListener('touchstart',function(){
			num++;
			//console.log(num)
			for (var i = 0; i < label_span.length; i++) {
				label_span[i].style.backgroundColor = '';
				label_span[i].style.color = '';
				label_span[i].style.borderColor = '';
			}
			this.style.backgroundColor = '#3c9bbb';
			this.style.color = 'white';
			this.style.borderColor = '#3c9bbb';
		});
	}
	
	//点击提交触发的事件
	var page2_btn = document.getElementById('page2_btn');
	//获取所有的五角星
	var as = grade_ul.getElementsByTagName('a');
	
	var page2_p = document.getElementsByClassName('page2_p')[0];
	
	var page2 = document.getElementById('page2');
	
	var mask = document.getElementsByClassName('mask')[0];
	
	//点击提交
	page2_btn.addEventListener('touchstart',function(){
		var Agrade_a = grade_ul_li[0].getElementsByTagName('a')[0];
		var Bgrade_a = grade_ul_li[1].getElementsByTagName('a')[0];
		var Cgrade_a = grade_ul_li[2].getElementsByTagName('a')[0];
		
		if( Agrade_a.className == '#grade nav active' && Bgrade_a.className == '#grade nav active' && Cgrade_a.className == '#grade nav active' ){
			if( num >= 1 ){
				//提交完下一步
				mask.style.zIndex = '90';
				mask.style.opacity = '1';
				page2.style.webkitFilter = 'blur(0.3rem)';
			}else{
				$('#page2 p:eq(1)').html('给景区添加标签');
				return page2_pFn();
			}
		}else{
			return page2_pFn();
		}
		
		//点击“提交”弹出P标签 执行函数
		function page2_pFn(){
			var page2_p = document.getElementsByClassName('page2_p')[0];
			$('.page2_p').attr('class','page2_p_active');
			setTimeout(function(){
				$('#page2 p:eq(1)').attr('class','page2_p');
			},1000)
		}
		
	});
	
	//连接
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	
	setTimeout(function(){
			page1.style.display = 'none';
	},4800)
	
	
	
	
};
