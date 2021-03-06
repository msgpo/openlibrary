import 'datatables.net-dt';
import '../../../../../static/css/legacy-datatables.less';

export function initEditionsTable() {
    var rowCount;
    $('#editions th.title').mouseover(function(){
        if ($(this).hasClass('sorting_asc')) {
            $(this).attr('title','Sort latest to earliest');
        } else if ($(this).hasClass('sorting_desc')) {
            $(this).attr('title','Sort earliest to latest');
        } else {
            $(this).attr('title','Sort by publish date');
        }
    });
    $('#editions th.read').mouseover(function(){
        if ($(this).hasClass('sorting_asc')) {
            $(this).attr('title','Push readable versions to the bottom');
        } else if ($(this).hasClass('sorting_desc')) {
            $(this).attr('title','Sort by editions to read');
        } else {
            $(this).attr('title','Available to read');
        }
    });
    $('#editions th.read span').html('&nbsp;&uarr;');
    $('#editions th').mouseup(function(){
        $('#editions th span').html('');
        $(this).find('span').html('&nbsp;&uarr;');
        if ($(this).hasClass('sorting_asc')) {
            $(this).find('span').html('&nbsp;&darr;');
        } else if ($(this).hasClass('sorting_desc')) {
            $(this).find('span').html('&nbsp;&uarr;');
        }
    });
    rowCount = $('#editions tbody tr').length;
    if (rowCount < 4) {
        $('#editions').DataTable({
            aoColumns: [{sType: 'html'},null],
            order: [ [1,'asc'] ],
            bPaginate: false,
            bInfo: false,
            bFilter: false,
            bStateSave: false,
            bAutoWidth: false
        });
    } else {
        $('#editions').DataTable({
            aoColumns: [{sType: 'html'},null],
            order: [ [1,'asc'] ],
            lengthMenu: [ [3, 10, 25, 50, 100, -1], [3, 10, 25, 50, 100, 'All'] ],
            bPaginate: true,
            bInfo: true,
            sPaginationType: 'full_numbers',
            bFilter: true,
            bStateSave: false,
            bAutoWidth: false
        });
    }
}
