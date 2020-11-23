import React from "react";
import Title from "./header/title";

export default class Header extends React.Component
{
    handle_change(e)
    {
        const title = e.target.value;
        this.props.change_title(title);
    }

    render()
    {
        console.log(this.props);
        return (
            <div>
                <Title title={this.props.title} />
                <input value={this.props.title} onChange={this.handle_change.bind(this)} />
            </div>
        );
    }
}