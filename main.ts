// One Line of Earned Pride entry: writes one line (1-240 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised: fresher image, the effort is felt (a whole summer, a lifelong fear), and the pride lands on the last words.
const LINE = 'After a whole summer of Tuesday lessons, my father, sixty-three and afraid of water all his life, let go of the pool wall and floated on his back, arms wide, staring up at the ceiling like he owned it.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const len = [...LINE].length;
if (len < 1 || len > 240 || LINE.trim() === '') throw new Error(`line length ${len} out of bounds`);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
