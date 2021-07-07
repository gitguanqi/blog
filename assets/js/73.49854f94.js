(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{537:function(t,a,s){"use strict";s.r(a);var n=s(10),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("在Linux系统中，有时候禁止ping还不行，有些人还可以通过ping tcp端口来获取你服务器上面开放的端口。今天就来说一下如何远程查看服务器上面的端口，是否开发及安全建议。")])]),t._v(" "),s("h2",{attrs:{id:"检查端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查端口"}},[t._v("#")]),t._v(" 检查端口")]),t._v(" "),s("h3",{attrs:{id:"安装工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装工具"}},[t._v("#")]),t._v(" 安装工具")]),t._v(" "),s("h4",{attrs:{id:"window平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window平台"}},[t._v("#")]),t._v(" window平台")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/tcpping-addr.jpg",alt:"tcpping"}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://elifulkerson.com/projects/tcping.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装地址"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("点击下载，然后复制到电脑的"),s("code",[t._v("system32")]),t._v("目录下面。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/tcpping-set.jpg",alt:"tcpping"}})]),t._v(" "),s("h4",{attrs:{id:"linux平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux平台"}},[t._v("#")]),t._v(" Linux平台")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://sources.voidlinux.eu/tcping-1.3.5/tcping-1.3.5.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf tcping-1.3.5.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tcping-1.3.5/\n")])])]),s("p",[t._v("如果没有安装gcc，安装一下：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc\ngcc -o tcping tcping.c\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" tcping /usr/bin\n")])])]),s("h3",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("h4",{attrs:{id:"window平台的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window平台的"}},[t._v("#")]),t._v(" window平台的")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("打开cmd命令行工具")])]),t._v(" "),s("li",[s("p",[t._v("输入以下命令查看方法")])])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("tcping\n")])])]),s("p",[s("img",{attrs:{src:"/img/tcpping-input.jpg",alt:"tcpping方法"}})]),t._v(" "),s("ul",[s("li",[t._v("开始ping,这里以百度为例")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("tcping www.baidu.com "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("\ntcping www.baidu.com "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/img/tcpping-eg.jpg",alt:"案例"}})]),t._v(" "),s("h4",{attrs:{id:"linux平台的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux平台的"}},[t._v("#")]),t._v(" linux平台的")]),t._v(" "),s("p",[t._v("还是百度为例。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("tcping www.baidu.com "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("\ntcping www.baidu.com "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),s("h2",{attrs:{id:"安全建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全建议"}},[t._v("#")]),t._v(" 安全建议")]),t._v(" "),s("p",[t._v("如果你不想把服务器内部端口暴露出去，建议到云服务器厂商官网控制台设置安全组，只允许内网访问就可以禁止别人tcping了，即使ping到也会没有响应的。")])])}),[],!1,null,null,null);a.default=r.exports}}]);