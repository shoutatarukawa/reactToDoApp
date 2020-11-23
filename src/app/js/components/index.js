import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Index extends React.Component
{
    constructor()
    {
        super();
        this.state = {title:"タイトル"};
    }

    change_title(title)
    {
        this.setState({title});
    }

    render()
    {
        // let components = [<Header />,<Footer />];
        let title = "ここはヘッダーだよおおお！！";
        let desc = "これはこのページの説明文だよおおお！！！";
        return (
            <div>
                <Header change_title={this.change_title.bind(this)} title={this.state.title} />
                {/* <Header title={"ふぇっだーー"} /> */}
                {/* h1タグにクラス名を追加してください */}
                <h1 className="title">ふぉっふぉっふぉ</h1>
                <p>{desc}</p>
                <p>はろおわあるど出来た丼！！！！</p>
                {/* <h1>我の名は{this.state.name}</h1> */}
                <Footer />
                {/* {components} */}
            </div>
        );
    }
}
