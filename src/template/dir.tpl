<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <style>
    .wrapper {
      width: 60%;
      margin: 0 auto;
      padding: 36px 12px;
    }
    .wrapper a {
      text-decoration: none;
      color: black;
      display: inline-block;
      width: 30%;
      margin: 20px 0;
      text-align: center;
      font-size: 16px;
    }
    a:hover, a:visited, a:link, a:active {
      color: balck;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    {{#each files}}
    <a href="{{../dir}}/{{this}}">{{this}}</a>
    {{/each}}
  </div>
</body>
</html>
