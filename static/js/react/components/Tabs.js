import React, {Component} from 'react';

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        console.log(props.children)
        this.state = {
            active: 0,
        }
    }
    handleClick(i) {
    this.setState({active: i})
    }

    render() {
        return (
            <React.Fragment>
                <div className="btn-group" role="group" style={{
                    display:"flex",
                    wrap: "nowrap",
                    justifyContent: "center",
                    backgroundColor: "#868e96"
                }}>
                    {this.props.children.map((el, i) => {
                        return <button onClick={() => this.setState({active: i})} key={i} type={"button"} className={"btn btn-secondary text-uppercase"} style={this.state.active === i ? {width:"33.3%", backgroundColor:"#727b84"}: {width:"33.3%"}}>{el.props.children.props.id}</button>
                    })}
                </div>
                {this.props.children.filter((el, i) => {
                    if(this.state.active === i) {
                        return el;
                    }
                })[0]}
            </React.Fragment>
        );
    }
}

export const Tab = (props) => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
};
