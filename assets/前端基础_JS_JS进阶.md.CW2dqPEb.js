import{_ as i,c as a,o as s,a1 as t}from"./chunks/framework.DDqzfET5.js";const E=JSON.parse('{"title":"js进阶","description":"","frontmatter":{},"headers":[],"relativePath":"前端基础/JS/JS进阶.md","filePath":"前端基础/JS/JS进阶.md"}'),e={name:"前端基础/JS/JS进阶.md"},l=t(`<h1 id="js进阶" tabindex="-1">js进阶 <a class="header-anchor" href="#js进阶" aria-label="Permalink to &quot;js进阶&quot;">​</a></h1><h2 id="js延迟加载的方式有哪些" tabindex="-1">js延迟加载的方式有哪些 <a class="header-anchor" href="#js延迟加载的方式有哪些" aria-label="Permalink to &quot;js延迟加载的方式有哪些&quot;">​</a></h2><ul><li>使用defer属性: 在script标签中添加defer属性，可以让浏览器在解析HTML时异步下载脚本，但会保证所有带有defer属性的脚本按照在文档中出现的顺序执行，且都在DOMContentLoaded事件触发之前执行。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path/to/script.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>使用async属性: 同样在script标签中使用，async属性使得脚本异步加载并执行，不保证执行顺序，也不阻塞页面渲染。脚本一旦加载完毕就会立即执行，可能在DOMContentLoaded事件触发之前或之后。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;path/to/script.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>动态创建script标签: 通过JavaScript在文档加载完成后动态插入script标签，可以实现脚本的延迟加载。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> script </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;script&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;path/to/script.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(script);</span></span></code></pre></div><ul><li>使用setTimeout或requestAnimationFrame进行延时执行: 如果目的是在页面加载一段时间后再执行脚本，可以使用setTimeout设置延迟时间，或者使用requestAnimationFrame在下一次重绘前执行脚本，但这并不是典型的延迟加载脚本的方式，主要用于控制执行时机。</li><li>需加载（懒加载）: 根据用户的交互或滚动位置，通过AJAX请求或其他方式动态加载必要的JS文件，这种方式适用于大型应用，确保只有在需要特定功能时才加载对应的脚本。</li></ul><h2 id="chrome-可以并行下载多少个资源" tabindex="-1">chrome 可以并行下载多少个资源 <a class="header-anchor" href="#chrome-可以并行下载多少个资源" aria-label="Permalink to &quot;chrome 可以并行下载多少个资源&quot;">​</a></h2><ul><li>6个</li></ul><h2 id="javascript-的同源策略。" tabindex="-1">JavaScript 的同源策略。 <a class="header-anchor" href="#javascript-的同源策略。" aria-label="Permalink to &quot;JavaScript 的同源策略。&quot;">​</a></h2><p>概念：</p><p>同源策略是客户端脚本（尤其是Javascript）的重要的安全度量标准。它最早出自Netscape Navigator2.0，其目的是防止某个文档或脚本从多个不同源装载。</p><p>这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议，指一段脚本只能读取来自同一来源的窗口和文档的属性。</p><p>为什么要有同源限制：</p><p>我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。</p><p>为什么要有同源限制？</p><p>我们举例说明：比如一个黑客程序，他利用Iframe把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过Javascript读取到你的表单中input中的内容，这样用户名，密码就轻松到手了。</p><h2 id="get和post的区别-何时使用post" tabindex="-1">GET和POST的区别，何时使用POST？ <a class="header-anchor" href="#get和post的区别-何时使用post" aria-label="Permalink to &quot;GET和POST的区别，何时使用POST？&quot;">​</a></h2><p>GET：一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符</p><p>POST：一般用于修改服务器上的资源，对所发送的信息没有限制</p><p>GET方式需要使用 Request.QueryString 来取得变量的值</p><p>POST方式通过 Request.Form 来获取变量的值</p><p>也就是说 Get 是通过地址栏来传值，而 Post 是通过提交表单来传值。</p><p>在以下情况中，请使用 POST 请求：</p><ol><li><p>无法使用缓存文件（更新服务器上的文件或数据库）</p></li><li><p>向服务器发送大量数据（POST 没有数据量限制）</p></li><li><p>发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠</p></li></ol><h2 id="谈谈-webpack" tabindex="-1">谈谈 Webpack <a class="header-anchor" href="#谈谈-webpack" aria-label="Permalink to &quot;谈谈 Webpack&quot;">​</a></h2><ol><li>概念</li></ol><p>静态模块打包工具，可以将静态模块编译、打包和输出成一个或多个文件（bundles）。</p><ol start="2"><li>5 个核心概念</li></ol><ul><li>入口(entry): 指示 webpack 从哪个文件开始打包。</li><li>输出(output): 指示 webpack 编译、打包后的文件输出到哪里去。</li><li>加载器(loader): webpack 只能识别 js、json 文件，其他类型的文件需要通过 loader 转化成有效模块才能识别。 <ul><li>比如：处理样式文件可以使用 css-loader\\style-loader\\less-loader\\sass-loader</li><li>处理 vue 文件可以使用 vue-loader</li></ul></li><li>插件(plugin): 相对 loader，plugin 可以做范围更广的工作，比如：打包优化，资源管理，注入环境变量。 <ul><li>比如：处理 html 资源需要使用 html-webpack-plugin</li><li>eslint 语法风格检查需要使用 eslint-webpack-plugin</li></ul></li><li>模式(mode): 可以选择 development, production 或 none 之中的一个。不同模式会加载不同的配置。</li></ul><h2 id="webpack-优化" tabindex="-1">webpack 优化 <a class="header-anchor" href="#webpack-优化" aria-label="Permalink to &quot;webpack 优化&quot;">​</a></h2><h2 id="vite-和-webpack-的区别" tabindex="-1">vite 和 webpack 的区别 <a class="header-anchor" href="#vite-和-webpack-的区别" aria-label="Permalink to &quot;vite 和 webpack 的区别&quot;">​</a></h2><ol><li>底层语言不同</li></ol><p>Vite 是基于 esbuild 采用 go 语言编写，go 语言的操作是纳秒级别</p><p>Webpack 是基于 Nodejs，以毫秒计数</p><p>所以 vite 比 webpack 更快。</p><ol start="2"><li>启动方式</li></ol><p>webpack 启动慢：webpack 首先分析各个模块之间的依赖，然后将所有内容进行打包，模块越多打包速度越慢，所以启动慢。</p><p>vite 启动快：vite 采用了一种懒加载的方式，它在启动的时候不需要打包，而是需要某个模块时，再对模块内容进行编译，所以启动很快</p><ol start="3"><li>首屏渲染</li></ol><p>webpack 渲染快：webpack 启动时已经将所有内容进行打包了，渲染时直接获取资源渲染即可</p><p>vite 渲染慢：Vite 渲染时才会打包编译文件，然后再渲染，打包越慢，渲染速度越慢（但是 vite 有缓存，所以第二次渲染速度没问题）</p><ol start="4"><li>生态</li></ol><p>webpack 诞生很久了，生态基本完善</p><p>vite 生态不够全，对代码分割不够友好</p>`,47),p=[l];function n(h,r,k,o,c,d){return s(),a("div",null,p)}const g=i(e,[["render",n]]);export{E as __pageData,g as default};
