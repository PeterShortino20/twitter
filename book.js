import { join } from 'path';
const filePath = join('pressfield', 'the-war-of-art.pdf');
import extract from '../twitter/node_modules/.bin/pdf-text-extract';

extract(filePath, function (err, pages) {
    if (err) {
    console.dir(err)
    return
    };
console.dir(pages);
});