---
layout: doc
---
# 更新日志
## Ver 1.3.4 [2024/02/24]
1.更新 11PE 内核至 23H2 22631.3155，修复历史版本内核问题，跟进更新必要补丁，支持安全启动（感谢 @826773297 @Liangnijian）；<br>
2.更新 PE启动制作器，微调软件界面与程序逻辑，美化提示框，操作更便捷（感谢 @Liangnijian）；<br>
3.更新 系统安装器 NTSetup，回退 文件复制 FastCopy 至 Ver 5.2.2，兼容性与稳定性更佳；<br>
4.更新 ISO启动文件，解决新机型无法引导的问题；<br>
5.修复 系统还原 CoolInstall 还原 ISO 映像时的报错（感谢 @怡怡 @雅铭居士）；<br>
6.修复 资源管理 Explorer 偶发性卡死问题（感谢 @Long.Y.F.）；<br>
7.精简 11PE 内核部分非必要文件，调整内置工具，进一步减小体积；<br>
8.添加 大量磁盘控制器/触摸/网络驱动，支持更多机型；<br>
9.修复 其他未列出的细节问题。
## Ver 1.3.3 [2024/02/05]
1.更新 11PE 内核至 23H2 22631.3007，修复历史版本内核问题，跟进更新必要补丁，支持安全启动（感谢 @826773297 @Liangnijian）<br>
2.删除 10PE 内核，调整为 11PE 单内核，减轻维护压力<br>
3.新增 与 调整 11PE 网卡驱动，适配更多机型<br>
4.回退 傲梅分区助手 PAssist 至 Ver 9.8.0，以应对新版强制刷新分辨率的问题（感谢 @zd423）<br>
5.更新 硬件检测 CPU-Z 与 视频播放 PotPlayer 等软件<br>
6.修复 部分机型无法启动的问题<br>
7.更新 备用启动制作工具 Ventoy 多系统启动盘制作工具 到 V1.0.97，支持一U多启<br>
8.修复 内测阶段问题 关机重启蓝屏报错（感谢 @上善若水 @深谷憂狼 @我是小青蛙）<br>
9.修复 其他未列出的细节问题<br>
## Ver 1.3.2 [2023/12/17]
1.更新 11PE 内核至 22H2 22621.1631 网络版，修复历史版本内核问题，跟进更新必要补丁，支持安全启动（感谢 @Lightning）<br>
2.更新 08PE 内核至 10PE 21H2 19043.844 维护版，兼容更多x86机型，界面美化更友好（感谢 @Kuer）<br>
3.新增 与 调整 11PE 网卡驱动，适配更多机型<br>
4.美化 开始菜单 及 桌面图标，界面美观，使用舒心<br>
5.更新 磁盘分区助手 DiskGenius、傲梅分区助手 PAssist、硬件检测 CPU-Z 与 视频播放 PotPlayer 等软件<br>
6.修复 屏幕键盘 FreeVK 热键冲突问题<br>
7.更新 备用启动制作工具 Ventoy 多系统启动盘制作工具 到 V1.0.96，支持一U多启<br>
8.修复 其他未列出的细节问题
## Ver 1.3.1 [2023/08/27]
1.更新 11PE 内核，修复安全启动问题，跟进更新必要补丁（感谢 @Kuer）<br>
2.更新 磁盘分区助手 DiskGenius、文件快速复制 FastCopy、硬件检测 CPU-Z 与 视频播放 PotPlayer 等软件<br>
3.更新 系统备份还原套件 CoolInstall，新增 Dism 核心功能，还原更快（感谢 @雅铭居士）<br>
4.修复 资源管理器 偶发性卡死 问题 与 部分图标显示异常 问题<br>
5.修复 Microsoft Surface 触控驱动失效 问题<br>
6.增加 虚拟键盘 FreeVK 并添加 快捷键 与 开始菜单，以供部分特殊情况使用（感谢 @songy171）<br>
7.修复 其他未列出的细节问题
## Ver 1.3.0 [2023/07/23]
1.全新 11PE 内核，修复历史版本内核问题，跟进更新必要补丁（感谢 @Kuer）<br>
2.更新 傲梅分区助手 PAssist、文件快速复制 FastCopy 与 硬件检测 AIDA64<br>
3.新增 大量 磁盘控制器 与 网卡驱动，适配更多机型<br>
4.美化 开始菜单 及 桌面图标，界面美观，使用舒心<br>
5.替换 远程控制 RayLink 为 远程控制 ToDesk，解决连接问题（感谢 @3497258699）<br>
6.修复 应用商店 部分软件加载出现找不到DLL错误（感谢 @陕A-听风）<br>
7.更新 备用启动制作工具 Ventoy 多系统启动盘制作工具 到 Ver 1.0.94，支持一U多启<br>
8.修复 其他未列出的细节问题
## Ver 1.2.9 [2023/06/11]
1.更新 10PE 内核版本，修复历史版本内核安全问题，跟进更新必要补丁<br>
2.更新 傲梅分区助手 PAssist，硬件检测软件 CPU-Z 与 文件快速搜索 Everything<br>
3.修复 部分电脑无法安装驱动 问题，进一步提升硬件兼容性<br>
4.修复 其他未列出的细节问题
## Ver 1.2.8 [2023/05/20]
1.更新 PE制作器 DawnStartup Ver 1.0.23.5，修复部分硬件识别问题（感谢 @雅铭居士）<br>
2.更新 系统备份还原套件 CoolInstall，Intel RST VMD Driver（感谢 @雅铭居士）<br>
3.更新 原版系统安装 NTSetup，傲梅分区助手 PAssist 与 文件快速复制 FastCopy<br>
4.更换 10PE 远程控制软件 ToDesk 为 RayLink，体验更佳，延时更低<br>
5.修复 其他未列出的细节问题
## Ver 1.2.7 [2023/04/15]
1.回退 11PE 为 10PE，内核更稳定，兼容性更佳（感谢 @Kuer）<br>
2.替换 10PE 应用商店 为 HPM插件市场（感谢 @VirtualHotBar）<br>
3.调整 开始菜单布局设置 及 桌面壁纸，美化部分细节<br>
4.更新 部分内置网卡驱动 及 外置驱动安装程序 DrvIndex（感谢 @Lightning）<br>
5.修复 其他未列出的细节问题
## Ver 1.2.6 [2023/04/07]
1.修复 11PE 傲梅分区助手 无法正常使用 问题<br>
2.修复 11PE 任务管理器 报错崩溃 问题<br>
3.修复 11PE MTP 无法正常使用 问题<br>
4.修复 其他未列出的细节问题
## Ver 1.2.5 [2023/04/05]
1.调整 10PE 为基于 无忧启动 Lightning 大师 11PE 作品（感谢 @Lightning）<br>
2.调整 11PE 开始菜单布局设置 及 默认显示字体，美化部分细节<br>
3.修复 其他未列出的细节问题
## Ver 1.2.5 [2023/04/02]
1.调整 10PE 为基于 无忧启动 2013koko 大师 10PE 作品（感谢 @2013koko）<br>
2.更新 远程连接 ToDesk、分区管理 DiskGenius、硬件检测 AIDA64 等内置常用软件<br>
3.更新 外置驱动安装程序 DrvIndex 及 桌面硬件信息显示 DeskInfo（感谢 @Lightning）<br>
4.调整 10PE 开始菜单布局设置 及 默认显示字体，美化部分细节<br>
5.更新 备用启动制作工具 Ventoy 多系统启动盘制作工具 到 Ver 1.0.90，支持一U多启<br>
6.解决 虚拟机桌面壁纸随机丢失问题（感谢 @安全引导）<br>
7.修复 启动制作器 免格升级项 报错（感谢 @dphe999）
8.修复 其他未列出的细节问题
## Ver 1.2.4 [2023/03/26]
1.修复 部分机型 GRUB 菜单 启动本地硬盘项 异常（感谢 @豫R-小白）<br>
2.修复 其他未列出的细节问题
## Ver 1.2.4 [2023/03/19]
1.调整 10PE 浏览器为 世界之窗 浏览器，需要其他浏览器请在“应用商店”下载<br>
2.添加 10PE 部分网卡驱动，支持更多机型联网和网页浏览<br>
3.更新 CPU-Z 硬件检测软件，支持更多型号识别<br>
4.修复 其他未列出的细节问题
## Ver 1.2.3 [2023/03/12]
1.调整 10PE 浏览器为在线下载安装方式，进一步缩减体积<br>
2.修复 部分机型 GRUB 菜单 启动本地硬盘项 报错，微调 GRUB 启动菜单（感谢 @13555580901）<br>
3.更新 08PE 中的 系统备份还原套件 CoolInstall，支持多国语言，解决多开问题<br>
4.更新 备用启动制作工具 Ventoy 多系统启动盘制作工具 到 Ver 1.0.89，支持一U多启<br>
5.修复 其他未列出的细节问题
## Ver 1.2.2 [2023/03/04]
1.修复 10PE 网络连接问题，解决部分可能引起系统崩溃的BUG<br>
2.更新 远程控制软件 ToDesk 及 原版系统安装 NTSetup，修复部分系统安装异常<br>
3.更新 系统备份还原套件 CoolInstall，支持多国语言，解决多开问题<br>
4.修复 部分机型 Legacy 模式下无法启动PE的问题（感谢 @闽B_Fine°）<br>
5.修复 Intel 12代机型 10PE 启动蓝屏报错的问题（感谢 @闽B_Fine°）<br>
6.修复 其他未列出的细节问题
## Ver 1.2.2 [2023/03/02]
1.调整 11PE 为基于 无忧启动 Kuer 大师 10PE 作品，体积小，兼容好（感谢 @Kuer）<br>
2.调整 03PE 为基于 无忧启动 无垠 大师 08PE 作品，已做部分优化，支持更多软件（感谢 @无垠）<br>
3.修复 10PE 部分软件打开异常的问题，解决微软雅黑部分字体变宋体的问题<br>
4.更新 硬件信息桌面显示 DeskInfo 及 驱动离线安装程序 DrvIndex，修复部分机型硬件显示异常<br>
5.更新 文件快速复制 FastCopy 及 硬件检测 AIDA64、内存检测 MemTest等<br>
6.修复 其他未列出的细节问题
## Ver 1.2.1 [2023/01/28]
1.调整 11PE 为基于 无忧启动 Kuer 大师作品，体积更小，兼容性更佳（感谢 @Kuer）<br>
2.调整 03PE 为基于 IT天空 早期 03PE，优化启动速度，添加部分驱动（感谢 @IT天空）<br>
3.修改 11PE 默认全局字体和部分图标，全面美化PE样式，不仅实用，而且美观（感谢 @爱玩电脑的命令提示符）<br>
4.更新 系统安装工具 CoolInstall，修复一些已知问题（感谢 @雅铭居士）<br>
5.解决 PE制作器 DawnStartup 本地模式无法制作的问题（感谢 @网络阿飞-IT）
## Ver 1.2.0 [2023/01/26]
1.升级 11PE 为基于 斗鱼大神 Winpemaker 构建的全新内核（感谢 @沙漠斗鱼）<br>
2.调整 11PE 鼠标指针/系统属性/分辨率设置界面为WinXShell版本（感谢 @slore）<br>
3.添加 常见磁盘控制器驱动，支持更多设备使用（感谢 @Kuer）<br>
4.解决 11PE 卡DG/傲梅分区软件问题，全面提升PE启动速度（感谢 @闽B_Fine°）<br>
5.更新 PE制作器 DawnStartup 和 CoolInstall，修复一些已知问题（感谢 @雅铭居士）
## Ver 1.1.9 Beta 2 [2023/01/24]
1.新增 NB应用商店，支持联网下载常用软件，高效率扩展PE（感谢 @江南一根葱）<br>
2.调整 网络连接/系统属性/分辨率设置界面，更加友好人性化（感谢 @slore）<br>
3.添加 部分软件运行依赖，解决报错问题
## Ver 1.1.9 [2023/01/23]
1.优化 11PE 启动速度，进一步精简非必要组件（感谢 @Kuer）<br>
2.重制 11PE 内核，解决概率性卡DiskGenius和傲梅分区助手的问题（感谢 @冀A-Arthur @闽B_Fine°）<br>
3.删除 部分使用频率低的软件，全面美化软件布局和系统图标<br>
4.调整 部分软件热键，避免与系统默认热键冲突<br>
5.添加 更多磁盘控制器驱动，进一步提升PE兼容性<br>
6.去除 11PE HPM插件支持，正在开发PE外置软件功能<br>
7.加入 11PE 启动时自动理顺盘符，避免盘符错乱问题
## Ver 1.1.8 [2023/01/17]
1.优化 11PE启动速度，进一步精简非必要组件（感谢 @Kuer）<br>
2.添加 部分笔记本网卡驱动，支持更多设备<br>
3.删除 部分使用频率低的软件，调整桌面软件布局<br>
4.替换 WIT备份还原 为 Yukaidi装机大师，支持在线重装，贴合实际（感谢 @鲁B-鹅鹅鹅）<br>
5.美化 PE桌面壁纸，桌面更美观，使用更舒心（感谢 @甘E-文晨）
## Ver 1.1.7 [2023/01/09]
1.调整 热键设置，增加几个常用软件的热键启动，快捷打开软件<br>
2.升级 DSI备份还原至5.0版本，调整备份模式和无人值守配置文件<br>
3.调整 搜狗输入法状态栏，取消首次使用气泡提示，美化状态栏指示<br>
4.添加 更多网卡驱动，支持更多机型PE连接网络（感谢群友 @冀A-Arthur）<br>
5.解决 新机型硬件无法识别的问题，添加新硬件支持到2022年12月<br>
6.替换 PE内图片查看器，体积更小，使用更简便
## Ver 1.1.6 [2022/12/16]
1.删除 08PE内核，减小PE体积，优化启动速度<br>
2.替换 2003PE内核，添加部分实用工具（感谢 @我心如水）<br>
3.更新 部分PE内置软件，美化 03PE 桌面壁纸<br>
4.调整 ISO内部结构，便于二次DIY组件<br>
5.美化 11PE桌面图标，更统一更美观<br>
6.精简 11PE内核，去除一些不必要的组件
## Ver 1.1.5 [2022/12/10]
1.重构 11PE内核，全面美化PE界面和启动速度（感谢 @Kuer）<br>
2.添加 2003PE内核，支持适配更多老机型（感谢 @雅铭居士）<br>
3.更新 部分PE内置软件，优化 11PE 网络和属性 界面（感谢 @826773297）<br>
4.新增 更多磁盘控制器与网卡驱动，兼容更多硬件<br>
5.新增 触摸屏和Surface系列支持，兼容更多主流设备（感谢 @Kuer）<br>
6.优化 内部结构布局 和 添加 软碟通制作模式 作为备用启动盘制作器（感谢 @豫R-小白 @豫B-纯净）<br>
7.替换 世界之窗浏览器 为 谷歌Chrome浏览器，支持更多网页浏览<br>
8.回退 傲梅分区助手为 9.6.1 版本，解决闪退卡顿问题<br>
9.替换 EasyRC在线重装 为 WIT备份还原，功能强大，覆盖全面，系统安装选择更多（感谢 @京A-花落半歌）
## Ver 1.1.4 [2022/12/01]
1.修复 Legacy引导模式 部分机型无法使用"从本地硬盘启动“选项（感谢 @firefly）<br>
2.添加 HotPE(.HPM)所有插件支持，所有软件均打包为插件形式。一键安装，即用即点，个性化打造您的PE系统！<br>
3.去除 Office套件和PDF套件，还原PE维护的初衷<br>
4.添加 大量磁盘与网卡驱动，兼容更多硬件<br>
5.移除 扩展显卡驱动，减少不必要的麻烦<br>
6.更新 NTSetup 5.3 Beta3等内置软件，使用体验更佳
## Ver 1.1.3 Beta 2 [2022/11/25]
1.修复 Legacy引导模式 部分DOS工具无法使用的问题（感谢 @唐壹）<br>
2.修复 11PE内核 热键冲突问题<br>
3.去除 2345网址导航 还原纯净体验
## Ver 1.1.3 [2022/11/24]
1.修复 Legacy引导模式 部分机型无法正常进入PE的问题<br>
2.修复 11PE内核 一个可能引起系统崩溃的BUG<br>
3.更新 DSI备份还原 V3.0 至最新版<br>
4.更换 11PE 系统浏览器为 TheWorld（世界之窗）<br>
5.修复 8PE 部分软件使用异常<br>
6.美化 BOOT 启动菜单布局<br>
7.添加 更多 DOS常用工具箱，对老机型支持更友好<br>
8.添加 更多网卡与磁盘驱动，支持更多机型网络服务
## Ver 1.1.2 [2022/11/12]
1.新增 EasyRC在线重装，只要有网络即可在线安装系统<br>
2.添加 大量网卡及显卡/存储驱动，适配更多机型<br>
3.更换 11PE 系统浏览器为 Chrome 浏览器，体积适中，功能完善<br>
4.更新 部分内置软件，使用体验更上一层楼<br>
5.修复 11PE内核的已知BUG
## Ver 1.1.1 [2022/10/31]
1.更新 CI系统安装，“CI系统安装”定制化为“DSI备份还原”<br>
2.删除 DSI一键还原，避免还原失败和999.com主页捆绑<br>
3.更换 远程控制软件为 RustDesk，免费免登录，连接更方便<br>
4.更换 11PE 系统浏览器为 TheWorld（世界之窗），体积更小，启动更快<br>
5.添加 Office 2010至 11PE 中，PE也是办公得力助手<br>
6.添加 DiskMark 硬盘测速工具 并 美化界面（By-白云间）<br>
7.添加 FurMark 显卡性能测试工具（By-白云间）<br>
8.更新 PartAssist 硬盘分区工具 V9.12.0.0<br>
9.更新 CPU-Z CPU检测工具 V2.0.3.0<br>
10.更新 GPU-Z GPU检测工具 V2.50.0.0<br>
11.更新 AIDA64 检测工具 V6.80.6200.0<br>
12.更新 PotPlayer 视频播放器 Ver 1.7.21801.0 并优化（By-白云间）<br>
13.更新 FastCopy 文件快速移动工具 V4.2.1.0 并汉化（By-白云间）<br>
14.更新 Ventoy 多系统启动盘制作工具 Ver 1.0.81
## Ver 1.1.0 [2022/10/04]
1.全新更名为“破晓PE（DawnPE）辨识度更高。全新起点，全新体验！<br>
2.替换EIXII备份还原为DSI一键还原，避免EIXII主页推广<br>
3.更新文件搜索工具 Everything Ver 1.4.1.1021<br>
4.更新硬盘分区工具 DiskGenius V5.4.6.1441<br>
5.重制启动界面背景图，美观简洁高效
## Ver 1.0.9 [2022/08/14]
1.替换CY一键还原为CI备份还原，支持更多还原模式<br>
2.新增EIXII备份还原，安装系统更多选择<br>
3.新增PDF阅读器，办公阅读更加方便<br>
4.重制启动界面目录，界面简洁高效<br>
5.新增8PEx86内核，专为维护PE而打造<br>
6.移除PE驱动导入(SysCeo)，减轻PE体积<br>
7.更新部分PE软件，提升PE系统使用体验
## Ver 1.0.8 [2022/08/09]
1.替换CI一键还原为CY备份还原，解决还原出错问题<br>
2.新增.NET/VC运行库，可自行扩展更多软件<br>
3.替换浏览器为星愿浏览器，界面清爽占用少<br>
4.美化启动界面和桌面任务栏，系统更美观好看<br>
5.全面升级新11PE内核，安全性和稳定性提高<br>
6.删除IDM下载器，全PE采用迅雷下载
## Ver 1.0.7 [2022/07/12]
1.修复PotPlayer对于音视频的关联，现在可直接一键打开音视频文件<br>
2.新增部分网络驱动，适配更多机型<br>
3.删除CGI备份还原,改为CI一键还原，软件纯净，界面简单<br>
4.更新IDM，迅雷，Edge浏览器为本人优化自制单文件，打开更快，占用更小<br>
5.全面优化PE，添加DX9，.NET等全套运行库，添加MTP，打印机，摄像头驱动，PE功能更强大<br>
6.全新10PE64内核，更换壁纸，美化桌面图标与升级必备应用，实用且美观
## Ver 1.0.6 [2022/06/12]
1.删除8PE，改为10PE和03PE双PE<br>
2.修复部分软件不能正常打开的BUG<br>
3.新增部分网络驱动，适配更多机型<br>
4.全新10PE64内核，更换壁纸与升级必备应用，清爽更实用！
## Ver 1.0.5 [2022/05/29]
1.修复全局网络声音故障问题<br>
2.删除QQ，洛雪音乐，EIXII等问题软件<br>
3.增加网卡和储存驱动适配，支持更多机型<br>
4.全新10PE64内核，使用更流畅！
## Ver 1.0.4 [2022/05/21]
1.更换浏览器为360安全浏览器，IE+Chrome双内核，兼容性更强!<br>
2.增加网卡驱动数量，适配更多机型！<br>
3.修复部分网页视频无法播放的BUG<br>
4.新增搜狗拼音输入法，PE中文输入更方便！
## Ver 1.0.3 [2022/05/15]
1.修复PE网络连接问题<br>
2.更换浏览器为火狐浏览器<br>
3.修复PE播放器异常BUG
## Ver 1.0.2 Beta 1 [2022/05/10]
1.修复系统安装器EIXII报错BUG<br>
2.新增CGI备份还原，系统安装多选择
## Ver 1.0.1 Beta 1 [2022/05/05]
1.修复8PE无法播放视频BUG<br>
2.修复PE引导错误BUG<br>
3.添加IQI系列软件
## Ver 1.0.0 Beta 1 [2022/05/01]
晨云PE工具箱初版诞生！