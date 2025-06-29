import React, {Suspense} from "react";
import MyLoading from "../MyLoading";
import ThrowResult from "./ThrowResult";

export default function SuspenseResult() {
    return (
        <Suspense fallback={<MyLoading />}>
            <ThrowResult />
        </Suspense>
    );
}