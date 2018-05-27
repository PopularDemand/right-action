import React from 'react';
import { render } from 'react-dom';

export const Main = () => (
    <div>
        This is the app! oh shit!
    </div>
);

render(<Main />, document.getElementById('content'));
