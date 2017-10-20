var postcss = require('postcss');

module.exports = postcss.plugin('postcss-short-size', function () {
    const propertyMatch = /^size$/;

    function ruleHandler(decl) {
        const inputVals = decl.value.match(/\S+/g);
        const len = inputVals ? inputVals.length : 0;

        if (len >= 2) {
            decl.cloneBefore({ prop: 'width', value: inputVals[0] });
            decl.cloneBefore({ prop: 'height', value: inputVals[1] });
        } else if (len === 1) {
            decl.cloneBefore({ prop: 'width', value: inputVals[0] });
            decl.cloneBefore({ prop: 'height', value: inputVals[0] });
        } else {
            console.warn('Missing arguments to postcss-size-nib!');
        }

        decl.remove();
    }

    return function (css) {
        css.walkDecls(propertyMatch, ruleHandler);
    };
});
