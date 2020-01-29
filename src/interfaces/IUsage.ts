import { ISection } from "./ISection";

export interface IUsage {
    /**
     * Array of Section object
     * @type {Section[]}
     */
    sections: ISection[];

    /**
     * Global delimiter of usage's doc
     * @type {?string | undefined}
     */
    delimiter?: string | undefined;

    /**
     * Examples of usage
     * @type {?string[] | undefined}
     */
    examples?: string[] | undefined;
}
