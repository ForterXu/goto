const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const handlebars = require('handlebars');
const compress = require('../util/compress');
const range = require('../util/range');
const isFresh = require('../util/cache');

// 通过锚点__dirname拿到tpl的绝对路径
const tplPath = path.join(__dirname, '../template/dir.tpl');
// 同步拿到模板
const source = fs.readFileSync(tplPath);
// 模板编译
const tpl = handlebars.compile(source.toString());

module.exports = async function (req, res, filePath, conf) {
//  异常统一try/catch
  try {
    const stats = await stat(filePath);
    // 文件情况
    if(stats.isFile()) {
      res.setHeader('Content-Type', 'text/plain');
      // 是否可使用缓存
      if(isFresh(stats, req, res)) {
        res.statusCode = 304;
        res.end();
        return ;
      }
      // 流读取输出
      let rs;
      // 处理范围请求
      let {code, start, end} = range(stats.size, req, res);
      if(code === 200) {
        res.statusCode = 200;
        rs = fs.createReadStream(filePath);
      } else {
        res.statusCode = 206;
        rs = fs.createReadStream(filePath, { start, end });
      }
      // 文件压缩
      if (filePath.match(conf.compress)) {
        rs = compress(rs, req, res);
      }
      rs.pipe(res);
    } else if(stats.isDirectory()) {
      // 文件夹形式 模板输出
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      const files = await readdir(filePath);
      const dir = path.relative(conf.root, filePath);
      let data = {
        // 文件名
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files
      };
      res.end(tpl(data));
    }

  } catch (error) {
    // console.error(error);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a file or directory`);
  }
};
