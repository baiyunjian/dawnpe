---
layout: doc
---
# 如何给DawnPE添加驱动？
## 内置驱动法
::: tip 提示
* 此方法适用于添加触摸板/SRS等基础驱动，这里使用Dism++添加，感谢 @[初雨团队](https://github.com/Chuyu-Team) 编写软件！
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

5.挂载完毕后双击右侧“打开会话”空白，左侧导航栏选择“驱动管理”，点击右侧的“添加驱动”，选择你需要导入的驱动；

![图片](https://i.imgtg.com/2023/08/01/Onb0Fi.png)

::: danger 注意
这里提到的“驱动”指的是已解压并放置在一文件夹内，需要存在.cat格式的驱动，并非安装程序！
:::

6.选择完毕后程序会自动筛选并导入适配的驱动，弹出以下提示即代表导入成功，点击“确定”；

![图片](https://i.imgtg.com/2023/08/01/Onb9aU.png)

7.再次点击上方“文件”，选择“另存为映像”；

![图片](https://i.imgtg.com/2023/08/01/Onbfdp.png)

8.名称等可默认也可自行命名，将该映像保存到桌面，注意保存类型与其他选项与图示保持一致；

![图片](https://i.imgtg.com/2023/08/01/OnbjNY.png)

9.保存完毕后选择“文件-卸载映像”，完毕后退出程序；

![图片](https://i.imgtg.com/2023/08/01/Onb2Ev.png)

10.使用UltraISO替换原先的“11PEX64.wim”后修改完成，快去试试吧！

![图片](https://i.imgtg.com/2023/08/01/Onb6Iq.png)

![图片](https://i.imgtg.com/2023/08/01/OnbXFc.png)
## 外置驱动法
::: tip 提示
* 此方法适用于添加网卡驱动，这里使用DrvIndex添加，感谢 @[Lightning](http://bbs.wuyou.net/home.php?mod=space&uid=757909) 编写软件！
* 图片资源来源于本人（白云间）早期在IT天空发布的教程，操作类似，可按照文字提示仿照操作，此处仅作演示！
:::
1.用UltraISO打开“DawnPE.iso”，提取“11PEX64.wim”内核里的网卡驱动压缩包至桌面；<br>
**网卡驱动压缩包路径：**
```
11PEX64\Windows\System32\DrvIndex\Network.7z
```
2.解压该压缩包，将准备好的驱动放进对应文件夹，再次压缩；

![图片](https://i.imgtg.com/2023/08/01/OnkoeF.png)

3.使用Dism++挂载映像，在挂载目录里替换原先的“Network.7z”；

![图片](https://i.imgtg.com/2023/08/01/OnbYvj.png)

![图片](https://i.imgtg.com/2023/08/01/OnbVUx.png)

4.选择“另存为映像”，完成后“卸载映像”;

![图片](https://i.imgtg.com/2023/08/01/Onbfdp.png)

![图片](https://i.imgtg.com/2023/08/01/OnbjNY.png)

![图片](https://i.imgtg.com/2023/08/01/Onb2Ev.png)

5.使用UltraISO替换原先的“11PEX64.wim”后修改完成，快去试试吧！

![图片](https://i.imgtg.com/2023/08/01/Onb6Iq.png)