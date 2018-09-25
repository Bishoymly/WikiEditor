var enableFilter = true;

function whenElementAppear()
{
    if($(".markdown-editor .editable-text:visible").length>0)
    {
        var content = $(".markdown-editor .editable-text").val();
        $(".markdown-editor").children().css("display","none");
        $(".markdown-editor").append("<div id='new-editor' class='markdown-renderer-async'></div>");
        var editor = new tui.Editor({
            el: document.querySelector('#new-editor'),
            initialEditType: 'wysiwyg',
            previewStyle: 'vertical',
            height: '100%',
            initialValue: content,
            events: {
                change: contentChanged
            },
            exts: [
                {
                    name: 'chart',
                    minWidth: 100,
                    maxWidth: 600,
                    minHeight: 100,
                    maxHeight: 300
                },
                'scrollSync',
                'colorSyntax',
                'uml',
                'mark',
                'table'
                ]
        });

        function contentChanged()
        {
            $("textarea.editable-text").val(editor.getValue());
            $("textarea.editable-text")[0].dispatchEvent(new Event('input', { bubbles: true}));
        }
    }

    setTimeout(whenElementAppear, 500);
}

$(document).ready(function(){
    whenElementAppear();
});

