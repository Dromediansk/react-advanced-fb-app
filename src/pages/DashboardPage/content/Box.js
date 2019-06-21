import React, { useEffect, useState } from 'react';

const getWindowWidth = () => {
    return window.innerWidth || window.outerWidth || window.width;
}

export default function Box() {
    const [width, setWidth] = useState(getWindowWidth())

    const listener = () => {
        console.log('width', width)
        setWidth(getWindowWidth());
    }

    useEffect(() => {
        window.addEventListener('resize', listener);

        // this is invoked when component will unmount
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, []);

    return (
        <section className="content">
            <div
                style={{
                    width: width / 2,
                    height: width / 2,
                    backgroundColor: "#eee",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: 280,
                    minHeight: 280
                }}
            >
                <label>resizable box</label>
            </div>
        </section>
    )
}
