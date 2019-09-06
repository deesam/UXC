/**
 * 
 * @summary error and exceptions types. Hierarchy of interfaces and classes that can be instantiated to 
 * handle specific exception types.
 *
 * @author Swayam Siddha
 *
 * Created at     : 2019-09-05 14:48:10 
 * Last modified  : 2019-09-05 18:08:46
 */



export class UnspecifiedException  extends Error{
    public code: number
    public name: string

    constructor( message: string) {
        super( message )
        this.code = 1
        this.name = 'Unspecified Exception'
    }
} 