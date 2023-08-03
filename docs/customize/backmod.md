---
layout: doc
---
# 如何给DawnPE修改壁纸？
::: tip 提示
* 图片资源来源于本人（白云间）早期在IT天空发布的教程，操作类似，可按照文字提示仿照操作，此处仅作演示！
:::
1.将“DawnPE.iso”进行挂载，提取里面的“11PEX64.wim”内核至桌面；

![图片](https://i.imgtg.com/2023/08/01/Onbd9t.png)

2.[下载“Dism++”](https://blog.dawnpe.com/post/dism.html)，双击“Dism++x64”；

![图片](https://i.imgtg.com/2023/08/01/OnbcPX.png)

3.进入主界面后，依次选择“文件-挂载映像”；

![图片](https://i.imgtg.com/2023/08/01/OnbYvj.png)

4.弹出以下窗口，按照图示选择待挂载的“11PEX64.wim”映像与挂载目录（桌面新建名为“1”的文件夹），确定后等待挂载完成；

![图片](https://i.imgtg.com/2023/08/01/OnbVUx.png)

5.挂载完毕后打开挂载目录，重命名代替换壁纸为“img0.jpg”；

![图片](https://i.imgtg.com/2023/08/01/OnkWjg.png)

6.定位到```11PEX64\%SystemRoot%\System32\Web\Wallpaper\Windows```，替换图片；

![图片](https://i.imgtg.com/2023/08/01/OnkkWB.png)

7.完毕后回到Dism++程序，再次点击上方“文件”，选择“另存为映像”；

![图片](https://i.imgtg.com/2023/08/01/Onbfdp.png)

8.名称等可默认也可自行命名，将该映像保存到桌面，注意保存类型与其他选项与图示保持一致；

![图片](https://i.imgtg.com/2023/08/01/OnbjNY.png)

9.保存完毕后选择“文件-卸载映像”，完毕后退出程序；

![图片](https://i.imgtg.com/2023/08/01/Onb2Ev.png)

10.使用UltraISO替换原先的“11PEX64.wim”后修改完成，快去试试吧！

![图片](https://i.imgtg.com/2023/08/01/Onb6Iq.png)