
import { IUsage } from "./IUsage";
import { IUsageProperty } from "./IUsageProperty";

export interface ICommand extends IUsageProperty {
    /**
     * The command name
     * @type {string}
     */
    command: string | undefined;

    /**
     * The command description
     * @type {?string | undefined}
     */
    description?: string | undefined;

    /**
     * The commands usage
     * @type {?Usage | undefined}
     */
    usage?: IUsage | undefined;
}
