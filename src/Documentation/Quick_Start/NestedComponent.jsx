import React from 'react';
import Button from './Button';

const NestedComponent = () => {
    return (
        <div>
            <Button>Increment</Button>
            This is the nested component.
        </div>
    );
};

export default NestedComponent;