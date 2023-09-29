/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-08-24 15:14:26
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-09-29 00:06:25
 * @FilePath: /CatVodOpen/open/testVideo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { __jsEvalReturn } from './wogg_customer.js';


var spider = __jsEvalReturn();

async function test() {
    let siteKey = 'wogg';
    let siteType = 0;
    const refresh_token = "dbe2d9cf5411417aac0b54120af7f129"

    // 测试分类
    await spider.init({ skey: siteKey, stype: siteType, ext: refresh_token });
    var classes = JSON.parse(await spider.home(true));
    console.log(JSON.stringify(classes));
    console.log(classes);

    // 测试首页列表
    var homeVod = JSON.parse(await spider.homeVod())
    // console.log(homeVod);
    console.log(JSON.stringify(homeVod));

    // 测试分类列表
    var page = JSON.parse(await spider.category(1, 1, undefined, {}));
    console.log(JSON.stringify(page));

    // 测试详情
    var detail = JSON.parse(await spider.detail("/index.php/voddetail/81254.html"));
    console.log(JSON.stringify(detail));

    // 测试播放
    var playUrl = await spider.play("原画", "https://www.aliyundrive.com/s/gNiCwiyzsiC", []);
    console.log('playURL: ' + playUrl);



}

export { test };
