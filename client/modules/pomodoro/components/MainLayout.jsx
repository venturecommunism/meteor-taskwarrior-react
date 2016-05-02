import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({content = () => null }) => (
    <div className="pomodoro-timer">
        <Helmet
            title=" "
            titleTemplate="Pomodoro - %s"
            meta={[
                {"name": "viewport", "content": "width=device-width, initial-scale=1, minimal-ui"},
                {"name": "link", href: "https://fonts.googleapis.com/css?family=Oswald:400,300,700"},
                {"name": "author", "content": "LsGoulart"},
                {"name": "description", "content": "Pomodoro Timer"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        {content()}
    </div>
);

export default Layout;
