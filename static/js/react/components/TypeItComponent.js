import React, {Component} from 'react';
import TypeIt from "typeit";
"strict mode";
class TypeItComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        new TypeIt(this.el, this.props)
    }

    render() {
        return <span ref={(el) => { this.el = el; }}>{this.props.children}</span>;
    }
}

export default TypeItComponent;
