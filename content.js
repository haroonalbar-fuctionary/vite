function content(x) {
    const y =document.getElementById('change');

    // let x = document.getElementsByClassName('card__desc');
    switch(x){
        case 1:
                    y.textContent = 'Lightning';
                    break;
        case 2:
            y.textContent = 'Fire ';
                break;
        case 3:
            y.textContent = 'Water';
            break;
        default:
            y.textContent = 'Pokemon is a media franchise created by Satoshi Tajiri and Ken Sugimori. It includes video games, trading card games, an animated television series, movies, and other merchandise. The franchise centers around fictional creatures called "Pokemon", which humans, known as Pokemon Trainers, catch and train to battle each other for sport. The franchise began as a pair of video games for the Game Boy, but has since grown to encompass many forms of media.'
    }
}