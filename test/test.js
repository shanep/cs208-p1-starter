import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import fs from 'node:fs';


const file = fs.readFileSync('index.html', {encoding: 'utf8'});
const dom = new JSDOM(file);

/**
 * DO NOT MODIFY THIS FILE!
 */

test('header <h1> tag exists and is not empty', (t) => {
    const h1 = dom.window.document.querySelectorAll('body > h1');
    assert.ok(h1.length === 1, '<h1> tag exists in <body>');
    const text = h1[0].innerHTML;
    assert.ok(text.length > 0, '<h1> contains text');
});

test('image tag exists and has the correct attributes', (t) => {
    const imgTags = dom.window.document.getElementsByTagName('img');
    assert.ok(imgTags.length >= 1, 'At least 1 <img> tag exists');
    assert.equal(imgTags[0].getAttribute('src'), 'img/compile.jpeg', 'src attribute of first <img> tag');
    assert.equal(imgTags[0].getAttribute('alt'), 'Funny image', 'alt attribute of first <img> tag');
});

