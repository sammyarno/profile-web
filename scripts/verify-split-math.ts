// ponytail: run with `node --experimental-strip-types scripts/verify-split-math.ts`
import assert from 'node:assert/strict';

import { calculateExtraAmount, splitEvenly } from '../src/utils/index.ts';

assert.equal(splitEvenly('100.000', 2), 50000, 'even split should divide by member count');
assert.equal(calculateExtraAmount('10%', 100000, 3), 10000, 'percentage extra should be % of subtotal');
assert.equal(calculateExtraAmount('10,5%', 100000, 3), 10500, 'comma decimal percentage should normalize to dot');
assert.equal(calculateExtraAmount('30.000', 100000, 3), 10000, 'flat extra should split evenly among members');

console.log('verify-split-math: ok');
