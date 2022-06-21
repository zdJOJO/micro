# micro

微前端

## <font color='#ff4d4f' size='4'>**注意点:**</font>

1.  **基座应用** 和 **子应用** 都是 `vite` + `react` 应用时，需要做额外的配置

[官方说明](https://cangdu.org/micro-app/docs.html#/zh-cn/framework/vite?id=%e4%bd%9c%e4%b8%ba%e5%9f%ba%e5%ba%a7%e5%ba%94%e7%94%a8)

[github issue](https://github.com/micro-zoe/micro-app/issues/283)

2.  **基座应用** 和 **子应用** 都是用 `BrowserRouter history` 路由， 切换到某个子应用，然后刷新， 页面 404

**解决方案**： [github issue](https://github.com/micro-zoe/micro-app/issues/431)
如果 `基座应用` 使用了 `react-router` v6 版本，需要配置基路由`baseroute` 加入 `*` 号

    e.g.
    const App1 = () => {
      return (
        <div>
          <micro-app
          name={ROUTE_PATH.APP_1}
          url="http://127.0.0.1:8001/"
          baseroute='/app1/*'
        />
        </div>
      )
    }
    export default App1
