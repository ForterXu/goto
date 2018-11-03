module.exports = {
  root: process.cwd(),
  hostname: '127.0.0.1',
  port: 1020,
  compress: /\.(js|html|md|css)/,
  cache: {
    maxAge: 600,
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true
  }
};
