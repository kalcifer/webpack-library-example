import _ from 'lodash';
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
