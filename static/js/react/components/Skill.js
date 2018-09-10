import React, {Component} from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUpdate() {
        return false;
    }

    render() {
        return (
            <div className="progress-lt">
                <h6 className="color-white letter-spacing-2">{this.props.children}</h6>
                <span>{this.props.percent}</span>
                <div className="progress">
                    <div className="progress-bar theme-bg" role="progressbar" aria-valuenow={this.props.percent}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;
