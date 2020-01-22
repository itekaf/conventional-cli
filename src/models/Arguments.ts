import { IArgument } from '../interfaces';
import { ArgumentTypes } from '../types';

/** Argument object of usage's doc */
export class Argument implements IArgument {
    /**
     * The full name of the argument
     * @type {?string | undefined}
     */
    public longName?: string | undefined;

    /**
     * The short name of the argument
     * @type {?string | undefined}
     */
    public shortName?: string | undefined;

    /**
     * The description of the argument
     * @type {?string | undefined}
     */
    public description? : string | undefined;

    /**
     * The type of argument
     * @type {ArgumentType | undefined}
     */
    public type: ArgumentTypes | undefined;

    /**
     * The possible values of argument
     * @type {?string[] | undefined}
     */
    public values?: string[] | undefined;

    /**
     * The default value of argument
     * @type {?string | undefined}
     */
    public default?: string | undefined;

    /**
     * The argument is required
     * @type {?boolean | undefined}
     */
    public required?: boolean | undefined;

    /**
     * The argument has value
     * @type {?boolean | undefined}
     */
    public hasValue?: boolean | undefined;

    /**
     * The delimiter of argument
     * @type {?string | undefined}
     */
    public delimiter?: string | undefined;

    /**
     * The argument has deprecated
     * @type {?boolean | undefined}
     */
    public deprecated?: boolean | undefined;

    /**
     * The additional description of the argument
     * @type {?string | undefined}
     */
    public additionalDescription?: string | undefined;

    constructor() { }
}
