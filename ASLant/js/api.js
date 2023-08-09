/*
 * @Author: N0ts
 * @Date: 2021-10-13 21:04:32
 * @LastEditTime: 2022-10-26 15:57:28
 * @Description: api 配置
 * @FilePath: /eazy-gitee-note/js/api.js
 * @Mail：mail@n0ts.cn
 */

// 导入配置文件
import config from "./config.js";

export default {
    // 获取文件数
    getTree: `/repos/${config.gitee.owner}/${config.gitee.repo}/git/trees/${config.gitee.sha}?recursive=1`,
    // 获取具体文件内容
    getContent: `/repos/${config.gitee.owner}/${config.gitee.repo}/contents/`
};
