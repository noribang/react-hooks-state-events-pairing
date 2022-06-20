import React from "react";

function Title({ title, views, createdAt }) {

    return (
        <>
            <h1>{title}</h1>
            <div>
                <span>{`${views} Views `}</span>|<span>{` Uploaded ${createdAt}`}</span>
            </div>
        </>
    );
}

export default Title;