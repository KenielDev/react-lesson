import React from "react";

export function Cards(props) {
    return (
        <div className="w-1/2 mx-auto border rounded-xl p-4 bg-purple-400">
            <div className="flex justify-between">
                <strong>{props.name}</strong>
                <strong>{props.time}</strong>
            </div>
        </div>
    );
}
