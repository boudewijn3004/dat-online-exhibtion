

const titles = [
    "re(title)",
    "re(discover)",
    "re(imagine)",
    "re(collect)",
    "re(create)",
    "re(think)",
    "re(construct)",
    "re(organize)",
    "re(formulate)",
    "re(generate)",
    "re(develop)",
    "re(activate)",
    "re(design)",
    "re(play)"
];



var i = 0;


setInterval( function () {
    // if ( i >= titles.length ) {
    //     i = 0;
    // }
    // var randomTitle = titles[i];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    $('#changingtitle').text(randomTitle);
    // console.log(randomTitle);
    // i++;


}, 500);



