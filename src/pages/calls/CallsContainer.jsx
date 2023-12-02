import React from "react";
import {connect} from "react-redux";
import Calls from "./Calls";
import {fetchCalls} from "../../app/providers/reducers/callsReducer.js";

class CallsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCalls(this.props.date_start, this.props.date_end, this.props.in_out, this.props.limit);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.date_start !== this.props.date_start ||
            prevProps.date_end !== this.props.date_end ||
            prevProps.in_out !== this.props.in_out ||
            prevProps.limit !== this.props.limit
        ) {
            this.props.fetchCalls(this.props.date_start, this.props.date_end, this.props.in_out, this.props.limit);
        }
    }

    render() {
        return <Calls calls={this.props.calls}/>;
    }
}

const mapStateToProps = (state) => ({
    date_start: state.callIntervalFilter.date_start,
    date_end: state.callIntervalFilter.date_end,
    in_out: state.callsPage.in_out,
    limit: state.callsPage.limit,
    calls: state.callsPage.calls.results,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCalls: (date_start, date_end, in_out, limit) =>
        dispatch(fetchCalls(date_start, date_end, in_out, limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CallsContainer);
