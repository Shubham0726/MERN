import React, { Component } from 'react';
import { MathLogic } from '../../component';

const ChildrenDemo = () => {
        return (
            <div>
                <MathLogic first={7} operator={'+'} second={4}>
                {(first, second, operator, result) => (
                    <h1>
                    {first}
                    {' '}
                    {operator}
                    { ' '}
                    {second}
                    { ' '}
                    =
                    {result}
                    </h1>
                )}
                </MathLogic>
                <MathLogic first={7} operator={'/'} second={0}>
                {(first, second, operator, result) => (
                    <h1>
                    {first}
                    {' '}
                    {operator}
                    { ' '}
                    {second}
                    { ' '}
                    =
                    {result}
                    </h1>
                )}
                </MathLogic>
                <MathLogic first={7} operator={'-'} second={3}>
                {(first, second, operator, result) => (
                    <h1>
                    {first}
                    {' '}
                    {operator}
                    { ' '}
                    {second}
                    { ' '}
                    =
                    {result}
                    </h1>
                )}
                </MathLogic>
                <MathLogic first={7} operator={'*'} second={3}>
                {(first, second, operator, result) => (
                    <h1>
                    {first}
                    {' '}
                    {operator}
                    { ' '}
                    {second}
                    { ' '}
                    =
                    {result}
                    </h1>
                )}
                </MathLogic>
            </div>
        )
}

export default ChildrenDemo;