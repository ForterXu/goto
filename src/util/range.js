module.exports = (totalSize, req, res) => {
  const range = req.headers['range'];
  if(!range) return { code: 200 };
  let size = range.match(/bytes=(\d*)-(\d*)/);
  let end = size[2] || totalSize - 1;
  let start = size[1] || totalSize - end;

  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Content-Range', `bytes ${start}-${end}/${totalSize}`);
  res.setHeader('Content-Length', end - start);
  return {
    code: 206,
    start,
    end
  };
};
