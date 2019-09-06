import React from 'react';

const Calculation = (first, second, operator) => {
    switch (operator) {
        case ('+'):
        return first + second;
          break;
        case ( '-'):
        return first - second;
        break;
        case ('/') :
        return (second === 0) ? 'infinity' : first / second;
        break;
        default:
        return 'invalid opearator';
      }
}

const MathLogic = (props) => {
    const { first, second, operator, children } = props;
    const result = Calculation(first, second, operator);

    return (
        <div>
        {children (first, second, operator, result)}
        </div>
    )
}

export default MathLogic;