import _ from 'lodash';
+ import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
+   const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

+   btn.innerHTML = 'Click me and check the console!';
+   btn.onclick = printMe;
+
+   element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());import _ from 'lodash';
import numRef from './ref.json';

function createTransalator() {
    return {
        numtoword: (num) => {
            return num < 0 || num > 5 ? 'This is a failure' : converttoword(num);
        },
        wordtonum: (word) => {
            const num = converttonum(word);
            return num === -1 ? 'This is a failure' : num;
        }
    };
}

const converttoword = (num) => {
    return _.reduce(numRef, (accum, ref) => {
        return ref.num === num ? ref.word : accum;
    }, '');
};

const converttonum = (word) => {
    return _.reduce(numRef, (accum, ref) => {
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    }, -1);
};

export default createTransalator();
