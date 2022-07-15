import { existsSync, readFileSync } from 'fs';
import { Enviroment } from '../object';
import Tiny from '../../index';
import parseOptions from '../options';
import Repl from './repl';

const args = process.argv.slice(2);

const env = new Enviroment();

const option = existsSync('./tiny.config.json')
    ? parseOptions(readFileSync('./tiny.config.json').toString())
    : parseOptions();

if (args.length <= 0) new Repl(env, option).start();
else {
    try {
        const file = readFileSync(args[0], 'utf8');

        new Tiny(file, { enviroment: env, ...option }).eval();
    } catch (e) {
        console.error(`Cannot open file ${args[0]}: ${e}`);
    }
}
