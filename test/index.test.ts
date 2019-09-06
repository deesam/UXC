/**
 * 
 * @summary test suite for index.ts. TDD
 * @author Swayam Siddha
 *
 * Created at     : 2019-09-05 14:46:43 
 * Last modified  : 2019-09-05 18:07:20
 */



import * as chai from 'chai'

import { addNumbers } from '../index'
import { UnspecifiedException } from '../src/types/exceptions.types';
describe('Functions', () => {

    it('Adds two Numbers', () => {
        chai.assert.equal(3, addNumbers(1,2), ' 1+2 = 3')
    });

    it('throws exception in case of empty arguments', () => {
        chai.assert.throw(addNumbers, Error)
    })
    
}); 