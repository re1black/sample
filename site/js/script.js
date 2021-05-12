window.onload = function(){
	// 图片轮播
	// 获取图片和小圆点
	var imgs = document.querySelectorAll(".img");   // 数组
    var dots = document.querySelector(".dots").querySelectorAll("span");
    
    // 遍历所有img图片，给img图片设置data-index属性，好判断当前的图片是哪一张
    for (var i = 0; i < imgs.length; i++){
        imgs[i].setAttribute("data-index",i);
    }

    // 获取当前图片和图片的index(数组下标)
    var currentImg = document.querySelector(".current");
    var currentIndex = currentImg.getAttribute("data-index");
    
    // 每隔3秒图片自动轮播一次
    var timer = setInterval(changeImage,3000);

    // 图片自动轮播
    function changeImage(){ 
        // 如果currentIndex这个变量是小于最后一个下标的
        if(currentIndex < imgs.length-1){
             // 将之前的图片隐藏
             imgs[currentIndex].classList.remove("current");
             // 将之前高亮的小圆点，不高亮显示
             dots[currentIndex].classList.remove("square");
             // 将下一张图片显示，将下一个小圆点高亮
             imgs[++currentIndex].classList.add("current");
             // 将下一个小圆点高亮显示
             dots[currentIndex].classList.add("square");
        }else{
             // 将之前的图片隐藏
             imgs[currentIndex].classList.remove("current");
             // 将之前高亮的小圆点，不高亮显示
             dots[currentIndex].classList.remove("square");
             currentIndex = 0;
             // 将当前的图片隐藏
             imgs[currentIndex].classList.add("current");
             // 将当前高亮的小圆点，不高亮显示
             dots[currentIndex].classList.add("square");
        }
    }


    // 遍历小圆点，且给它们绑定事件
    for (var k = 0; k<dots.length; k++){
        // 给所有的小圆点设置属性
        dots[k].setAttribute("data-index",k);
        dots[k].addEventListener("click",function(){
        	 // 获取当前点击的小圆点的索引
             var index = this.getAttribute("data-index");
             // 如果当前点击的小圆点的index索引与之前索引所以不一致，则切换图片,否则不做任何操作
             if(index != currentIndex){
                // 将鼠标点击之前显示的图片隐藏，即将之前显示的img上的current类删除
             	 imgs[currentIndex].classList.remove("current");
             	 // 将之前高亮的圆点取消高亮显示
                 dots[currentIndex].classList.remove("square");
                 // 将当前图片显示出来
                 imgs[index].classList.add("current");
                 // 将当前小圆点高亮显示
                 dots[index].classList.add("square");
                 // 改变currentIndex的值，让它和谁index相等。
                 currentIndex = index;
             }
        })
    }

    // tab切换
    // 获取点击的城市列表，及要切换的房源信息
    var aList = document.getElementsByClassName("list_nav"),
        aTab = document.getElementsByClassName("productBox"),
        cityIndex = 0;    // 用来存储上一次高亮显示的元素的索引

    // // 遍历所有的城市列表
    for (var a = 0; a<aList.length; a++){
        // 闭包加函数自执行
        (function(a){
            // 给每一个城市列表li绑定事件
            aList[a].onclick = function(){
            	// 上一次高亮显示的城市及内容隐藏
            	aList[cityIndex].classList.remove("current_option");
            	aTab[cityIndex].classList.remove("on");
            	// 改变cityIndex，让它等于刚点击的a
            	cityIndex = a;
            	// 将当前点击的城市及内容高亮显示
            	aList[a].classList.add("current_option");
            	aTab[a].classList.add("on");
            }
        })(a)
    }
}
