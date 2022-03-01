import test from 'ava';
import {add} from '../dist/index.js';

test('Main', t => {
	t.is(add(1, 2), 3);
});
