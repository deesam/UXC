import { UnspecifiedException } from './src/types/exceptions.types';
/**
 * entry point for library, also for integration testing / debugging of features.
 *
 * @summary  entry point for test suite 
 * @author Swayam Siddha
 *
 * Created at     : 2019-09-05 14:44:55 
 * Last modified  : 2019-09-05 16:56:56
 */



export const addNumbers = ( num1: number, num2: number) => {
    if(!num1 || !num2) {
        throw new UnspecifiedException(`empty arguments.`)
    }
    return num1 + num2
}