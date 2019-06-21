import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from "./Sidebar";

import Likes from './content/Likes';
import Crash from './content/Crash';
import Posts from './content/Posts';
import MyPosts from './content/MyPosts';
import Box from './content/Box';
import Theme from './content/Theme';
import Pokemons from './content/Pokemons';

import ErrorBoundary from "../../blocks/Errorboundary";

const Profile = lazy(() => import('./content/Profile'))

const DashboardPage = () => {
    return (
        <>
            <ErrorBoundary location='sidebar'>
                <Sidebar />
            </ErrorBoundary>

            <Suspense fallback={<div>Loading..</div>}>
                <ErrorBoundary location='content'>
                    <Switch>
                        <Route path="/dashboard/profile" component={Profile} />
                        <Route path="/dashboard/likes" component={Likes} />
                        <Route path="/dashboard/crash" component={Crash} />
                        <Route path="/dashboard/posts" component={Posts} />
                        <Route path="/dashboard/myposts" component={MyPosts} />
                        <Route path="/dashboard/box" component={Box} />
                        <Route path="/dashboard/theme" component={Theme} />
                        <Route path="/dashboard/pokemons" component={Pokemons} />
                        <Redirect to="/dashboard/profile" />
                    </Switch>
                </ErrorBoundary>
            </Suspense>
        </>
    )
}

export default DashboardPage;