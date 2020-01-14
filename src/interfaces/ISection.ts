import { IUsageProperty } from "./IUsageProperty";

export interface ISection {
    /**
     * Name of section
     * @type {string | undefined}
     */
    name?: string | undefined;

    /**
     * Array of properties
     * @type {string[]}
     */
    properties: IUsageProperty[];
}
