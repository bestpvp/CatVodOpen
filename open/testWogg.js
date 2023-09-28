/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-08-24 15:14:26
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-08-28 18:28:08
 * @FilePath: /CatVodOpen/open/testVideo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { __jsEvalReturn } from './wogg.js';


var spider = __jsEvalReturn();

async function test() {
    let siteKey = 'wogg';
    let siteType = 0;
    let siteUrl = 'https://wogg.xyz';
    let UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
    let patternAli = /(https:\/\/www\.aliyundrive\.com\/s\/[^"]+)/


    await spider.init({ skey: "siteKey", stype: "siteType" });
    // var classes = JSON.parse(await spider.home(true));
    // console.log(JSON.stringify(classes));
    // console.log(classes);

}

export { test };
