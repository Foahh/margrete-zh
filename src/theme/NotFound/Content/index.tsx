import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/NotFound/Content";
import Heading from "@theme/Heading";

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <main className={clsx("container margin-vert--xl", className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            🤔 噢，页面不见了！
          </Heading>
          <p>
            我们找遍了每个角落，但你访问的页面似乎不存在。
            <br />
            如果你认为这是一个错误，欢迎到{" "}
            <a href="https://github.com/Foahh/margrete-zh">
              GitHub 项目
            </a> 或是在 <a href="https://github.com/Foahh/margrete-zh">QQ 群</a>
            {" "}提出反馈。
          </p>
          <p>你可以点击下面的链接返回首页，或者继续探索其他内容：</p>
          <p>
            <a href="/">🏡 返回首页</a>
          </p>
        </div>
      </div>
    </main>
  );
}
