import { Section } from './Section';
import { IUsage } from '../interfaces';

/**
 * The Usage is a Object which contains Section of doc
 */
export class Usage implements IUsage {

    /**
     * Array of Section object
     * @type {Section[]}
     */
    public sections: Section[];

    /**
     * Global delimiter of usage's doc
     * @type {?string | undefined}
     */
    public delimiter?: string | undefined;

    /**
     * Examples of usage
     * @type {?string[] | undefined}
     */
    public examples?: string[] | undefined;

    constructor(sections: Section[]) {
        this.sections = sections;
    }
}
