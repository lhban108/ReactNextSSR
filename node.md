
### 1.页面路由

在next.js中，**文件即路由**

- Index 路由

  ```text
    pages/index.js        ->  /
    pages/blog/index.js   ->  /blog
  ```

- 嵌套路由

  ```text
    pages/blog/first-posy.js              ->  /blog/first-post
    pages/dashboard/settings/username.js  ->  /dashboard/settings/username
  ```

- 动态路由

  ```text
    pages/blog/[slug].js          ->  /blog/:slug  (eg: /blog/hello-world)
    pages/[username]/settings.js  ->  /:username/setting (eg: /foo/settings)
    pages/post/[...all].js        ->  /post/* (eg: /post.2020/id/title)
  ```
