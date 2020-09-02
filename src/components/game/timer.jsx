import React from 'react';
import moment from 'moment';

export class Countdown extends React.Component {
    state = {
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
		secsOnly: undefined,
		words : undefined,
    };
	
	constructor(props) {
		super(props);
	}
	
	TranslateData(sec_num) {
				var hours   = Math.floor(sec_num / 3600);
				var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
				console.log("secs",sec_num);
				var seconds = sec_num - (hours * 3600) - (minutes * 60);
            const days = 0;
			return {h: hours,m: minutes,s: seconds};
	}

    componentDidMount() {
		this.setState({words: this.props.words});
        this.interval = setInterval(() => {
            const timeTillDate = this.props.timeTillDate;
            const then = timeTillDate;
            const now = new Date().getTime();
			const difference = then - now;
			var sec_num = Math.round(difference / 1000);
			var data = this.TranslateData(sec_num);
            this.setState({  hours: data.h, minutes: data.m, seconds: data.s });
			this.setState({secsOnly : sec_num});
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
		if (this.state.secsOnly <= 0) {
			            clearInterval(this.interval);
		}
    }

    render() {
        const {  hours, minutes, seconds } = this.state;

        if (this.state.secsOnly <= 0) {
            return null;
        }

        return (
            <div>
                <div className="countdown-wrapper">
          
                    {hours && (
                        <span> {hours}h</span>
                    )}
                    {minutes && (
                         <span> {minutes}m</span>
                    )}
                    {seconds && (               <span> {seconds}s </span>
                    )}
					
					{ this.state.words }
                </div>
            </div>
        );
    }
}
