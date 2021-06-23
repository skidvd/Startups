
/*
  We will largely handle cross component state management via the useReducer hook for simplicity.  A full Redux
  implementation has been avoided for simplicity as it has been assumed that such is not the primary focus of
  this challenge.
 */

// The initial state sets all inputs and results to undefined.  This is used for initialization as well as for Clearing
// purposes as may be requested by the user at any time.
export const initialState = () => {
    return {
        firstOperand: undefined,
        operator: undefined,
        secondOperand: undefined,
        result: undefined
    }
};

export const ADDITION = '+';
export const SUBTRACTION = '-';
export const MULTIPLICATION = '*';
export const OPERATORS = [ADDITION, SUBTRACTION, MULTIPLICATION];

/*
Standard reducer style function for state management...

 @param: state - the present shared state value
 @param: action - the present action including at least the action.type to define what has triggered the state mutation and
 an option payload if additional values are needed by the action

 @return the mutated state
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case 'digitClick':
            // this is triggered when one of the Digit button are clicked

            // simplifying assumption all digits clicked before the operator selection will be considered to be part of
            // the first operand; all digits after the operator will be used for the second operand.
            // we also ensure that the operands initial undefined values are handled appropriately by replacing with 0
            const presentOperand = (!state.operator ? state.firstOperand : state.secondOperand) || 0;
            return {
                ...state,
                [!state.operator ? 'firstOperand' : 'secondOperand']: parseInt('' + presentOperand + action.payload, 10)
            }
        case 'operandSet':
            // this is triggered when a numeric value has been typed or selected from the input areas
            console.log(`operandSet [`, action.payload, ']', action.payload === undefined);
            const newValue = parseInt(action.payload, 10);
            return {
                ...state,
                // we check if isNaN in the numeric inputs in case all digits are removed by the user
                [!state.operator ? 'firstOperand' : 'secondOperand']: isNaN(newValue) ? undefined : newValue
            }
        case 'operatorSelect':
            // this is triggered when one of the available operators are clicked
            return {
                ...state,
                operator: action.payload
            }
        case 'calculate':
            // this is triggered when the Calculate button is clicked
            let result = 0;
            switch (state.operator) {
                case ADDITION:
                    result = state.firstOperand + state.secondOperand;
                    break;
                case SUBTRACTION:
                    result = state.firstOperand - state.secondOperand;
                    break;
                case MULTIPLICATION:
                    result = state.firstOperand * state.secondOperand;
                    break;
                default:
                    console.error(`Unsupported operator: ${state.operator}`);
                    return state;
            }
            return {
                ...state,
                result
            }
        case 'clear':
            // this is triggered when the Clear button is clicked
            return initialState()
        default:
            console.error(`Unsupported action type: ${action.type}`, state, action);
            return state;
    }
}
