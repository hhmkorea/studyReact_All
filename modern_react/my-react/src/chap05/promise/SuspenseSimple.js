import React, {Suspense} from "react";
import ThrowPromise from './ThrowPromise';
import MyLoading from "../MyLoading";

export default function SuspenseSimple() {
    return (
        <Suspense fallback={<MyLoading />}>
            <ThrowPromise />
        </Suspense>
    );
}