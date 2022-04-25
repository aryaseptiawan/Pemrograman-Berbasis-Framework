const e = React.createElement;

function LikeButton(){
    return e(
        'button',
        {
            onclick: () => alert('Berhasil')
        },
        'Like'
    );
}

const domContainer = document.querySelector('#like_button_container');
ReactDom.render(e(LikeButton), domContainer);