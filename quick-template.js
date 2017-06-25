/**
 * QuickTemplate
 * Tool for templates.
 * https://github.com/bzarzycki/quick-template
 * 
 * @author Blazej Zarzycki
 * @version 1.0.1
 * @license MIT
 */
function QuickTemplate() {

    var placeholder = {
        left: '[[',
        right: ']]'
    }

    var attributePrefix = 'data-tmpl-';

    var replaceStr = function (text, oldValue, newValue) {
        while (text.indexOf(oldValue) > -1) {
            text = text.replace(oldValue, newValue);
        }
        return text;
    }

    this.setPlaceholderSymbol = function (left, right) {
        placeholder.left = open;
        placeholder.right = close;
    }

    this.setAttributePrefix = function (prefix) {
        attributePrefix = prefix;
    }

    this.process = function (template, model) {
        var output = template;
        for (var key in model) {
            var field = placeholder.left + key + placeholder.right;
            output = replaceStr(output, field, model[key]);
        }
        output = replaceStr(output, attributePrefix, '');
        return output;
    }

    this.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.randomFloat = function (min, max) {
        return Math.random() * (max - min) + min;
    }

    this.randomByMask = function (mask) {
        var output = '';
        for (var i = 0; i < mask.length; i++) {
            if (mask[i] === '_') {
                output += this.randomInt(0, 9);
            } else {
                output += mask[i];
            }
        }
        return output;
    }

    this.randomStr = function (buffer, size) {
        var buffLength = buffer.length;
        var first = this.randomInt(0, buffLength - size);
        var last = first + size;
        return buffer.substring(first, last);
    }

}