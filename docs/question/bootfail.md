# PE启动失败？
## 问题表现
* 显示`Invalid signature detected.Check Secure Boot Policy in Setup`；
* 电脑无法引导进入U盘；
* Ventoy引导成功后无法启动DawnPE；
* 有U盘悬浮窗、加载提示等，但是explorer没有启动；
* 在Windows Boot Manager界面报错；
* 进入PE后蓝屏。
## 原因分析
1. 未关闭安全启动，需要进入BIOS关闭安全启动；

2. 电脑年代久远或内存大小不足（11PE需要2GB以上内存）；

3. Ventoy引导启动失败；

4. U盘为劣质产品或者经历频繁读写后出现物理损坏（如长期使用NTFS作为文件系统）。
## 解决方法
* 关闭安全启动，通常在BIOS内有关键词`Secure-Secure Boot`；

* 若为Ventoy启动失败，则请转至[Ventoy FAQ](https://ventoy.net/cn/faq.html)；

* 更换您的U盘或电脑。