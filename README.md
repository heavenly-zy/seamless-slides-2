# 无缝轮播（方案二）
思路：
不同于之前做的第一个轮播的思路，该轮播是生成两张“假”的轮播图分别放在整个轮播的首尾（“假尾”放在行首，“假首”放在行尾），这样从第一张轮播图跳转到最后一张轮播图时，展示给用户看的就是“假尾”，然后再瞬间将假的轮播图替换成真的轮播图。同理当从最后一张轮播图跳转到第一张轮播图时，也是如此。
