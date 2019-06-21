import React from "react";
import { ThemeConsumer } from '../../../blocks/ThemeContext';

export default function Profile() {
    return (
        <ThemeConsumer>
            {theme => {
                console.log('theme', theme);

                return <section className="content profile">
                    <h1>User profile</h1>
                    <h2>Personal information</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                    </p>
                </section>
            }}
        </ThemeConsumer>
    );
}