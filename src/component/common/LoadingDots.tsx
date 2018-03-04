import * as React from 'react';


class LoadingDots extends React.Component<any, any> {
    static defaultProps = {
        interval: 300, dots: 3
    };

    interval: number;
    state: { frame: number };

    constructor(props: any) {
        super(props);
        this.state = { frame: 1 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ frame: this.state.frame + 1 });
        }, this.props.interval
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return (
            <span >{text}&nbsp;</span>
        )
    }


}

// LoadingDots.defaultProps = { /* ... */ };




export { LoadingDots };
