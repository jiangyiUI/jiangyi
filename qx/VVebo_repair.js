/******************************
QuantumultX 修复 vvebo 用户主页的显示脚本
参考：https://raw.githubusercontent.com/suiyuran/stash/main/override/fix-vvebo.stoverride
*************************

[mitm]
hostname = api.weibo.cn
[rewrite_local]
^https:\/\/api\.weibo\.cn\/2\/users\/show\? url script-request-header https://raw.githubusercontent.com/jiangyiUI/jiangyi/main/qx/vvebo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? url script-request-header https://raw.githubusercontent.com/jiangyiUI/jiangyi/main/qx/vvebo.js
^https:\/\/api\.weibo\.cn\/2\/statuses\/user_timeline\? url script-response-body https://raw.githubusercontent.com/jiangyiUI/jiangyi/main/qx/vvebo.js
*************************

*****************************************/
