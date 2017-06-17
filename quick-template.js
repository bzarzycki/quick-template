/**
 * @author Blazej Zarzycki
 */
function QuickTemplate() {

    var placeholder = {
        left: '[[',
        right: ']]'
    }
    
    var attributePrefix = 'data-tmpl-';

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
            var str = placeholder.left + key + placeholder.right;
            output = output.replace(str, model[key]);
        }
        output = output.replace(attributePrefix, '');
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