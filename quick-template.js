function QuickTemplate() {

    var template = "";

    this.setTemplate = function (tmpl) {
        template = tmpl;
    }

    this.getView = function (model) {
        var output = template;
        for (var key in model) {
            output = output.replace('[[' + key + ']]', model[key]);
        }
        output = output.replace('data-tmpl-', '');
        return output;
    }

}