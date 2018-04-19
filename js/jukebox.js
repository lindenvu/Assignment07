/*eslint-env browser*/

var Jukebox = function () {
    "use strict";
    var albums = [], self;

    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        },
        returnAlbum: function (num) {
            return albums[num];
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

var jbox = new Jukebox();

/*
var album1 = new Album("Operation Ivy", "Energy");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);


album1.play();
album1.play();
album1.play();
album2.play();
album3.play();

window.console.log("You favorite album is: " + jbox.favoriteAlbum());
*/


var albumList = [["Operation Ivy", "Energy"], ["Blink 182", "Dude Ranch"], ["New Found Glory", "Sticks and Stones"]];
var dropdown = window.document.getElementById("albumDropdown");

var x;
for (x = 0; x < albumList.length; x += 1) {
    jbox.addAlbum(new Album(albumList[x][0], albumList[x][1]));
    dropdown.add(new Option(albumList[x][0] + " : " + albumList[x][1], x));
}

var btn = window.document.getElementById("playButton");

btn.addEventListener("click", function () {
    "use strict";
    jbox.returnAlbum(dropdown.value).play();
    window.console.log(jbox.returnAlbum(dropdown.value).display());
});

var btn2 = window.document.getElementById("favoriteButton");
var msg = window.document.getElementById("favoriteAlbum");
btn2.addEventListener("click", function () {
    "use strict";
    msg.innerHTML = jbox.favoriteAlbum();
});
