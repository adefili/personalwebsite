import React from 'react';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import KeyboardArrowDownRounded from '@material-ui/icons/KeyboardArrowDownRounded';
import WorkOutline from '@material-ui/icons/WorkOutline';
import School from '@material-ui/icons/School';

class NullComponent extends React.Component{
    render(){
        return (null)
    }
}

class MyTimelineSeparator extends React.Component{
    icons = {
        keyboardArrowDown: KeyboardArrowDownRounded,
        workOutline: WorkOutline,
        school: School,
    };
    connector = {
        true: TimelineConnector,
        false: NullComponent,
    };

    render(){
        const IconTag = this.icons[this.props.iconName || 'fastfoodIcon'];
        const ConnectorTag = this.connector[this.props.withConnector || 'true'];
        return(
            <TimelineSeparator>
                <TimelineDot color="inherit">
                    <IconTag />
                </TimelineDot>
                <ConnectorTag />
            </TimelineSeparator>
        )
    }
}

export default MyTimelineSeparator;