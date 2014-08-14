$(document).ready(function() {
    ('#button').click(toAdd)
        var toAdd = $('input[name=checkListItem]').val();
    });
$(document).on('click', '.item', function() {
    this.remove()
}
});