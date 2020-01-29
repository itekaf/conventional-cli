import { ISection } from '../interfaces';
import { UsageProperty } from './UsageProperty';

/** The section with properties of usage's doc */
export class Section implements ISection {

    /**
     * Array of properties
     * @type {string[]}
     */
    public properties: UsageProperty[];

    /**
     * Name of section
     * @type {string | undefined}
     */
    public name?: string | undefined;

    constructor(properties: UsageProperty[]) {
        this.properties = properties;
    }
}
