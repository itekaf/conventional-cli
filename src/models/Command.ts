import { Usage } from './Usage';
import { ICommand } from '../interfaces';

/**
 * The command with name, description and usage, if they exist
 */
class Command implements ICommand  {

    /**
     * The command name
     * @type {string}
     */
    public command: string | undefined;

    /**
     * The command description
     * @type {?string | undefined}
     */
    public description?: string | undefined;

    /**
     * The commands usage
     * @type {?Usage | undefined}
     */
    public usage?: Usage | undefined;

    /**
     * @constructor
     */
    constructor() {   }
}

export { Command };
