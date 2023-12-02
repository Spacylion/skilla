import React, {useEffect} from "react";
import s from './Calls.module.css';
import CallItem from "./call-items/CallItem.jsx";
import CallsConfigs from "./calls-configs/CallsConfigs.jsx";
import CallsFilters from "./calls-filters/CallFilters.jsx";

const Calls = ({calls}) => {
    useEffect(() => {
    }, [calls]);

    if (!calls) {
        return <div>Loading...</div>;
    }

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <CallsConfigs/>
                <CallsFilters/>
                <div className={s.calls}>
                    {calls.map((call) => (
                        <CallItem key={call.id} call={call}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calls;
