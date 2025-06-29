import {Profiler} from "react";
import HeavyUI from './HeavyUI';

export default function ProfilerBasic() {
    // 성능 측정을 위한 함수(onRender 함수)
    const handleMeasure = (id, phase, actualDuration, baseDuration, startTime, endTime) => {
        console.log('id: ', id);
        console.log('phase: ', phase);
        console.log('actualDuration: ', actualDuration);
        console.log('baseDuration: ', baseDuration);
        console.log('startTime: ', startTime);
        console.log('endTime: ', endTime);

    };

    return (
        <Profiler id="heavy" onRender={handleMeasure}>
            <HeavyUI delay={1500}></HeavyUI>
            <HeavyUI delay={200}></HeavyUI>
            <HeavyUI delay={2000}></HeavyUI>
        </Profiler>
    );
}