function generate() {
    var quotes = {
        "- Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
        "- Albert Einstein": '“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
        "- Charlotte Eriksson": '“All I wanted was to live a life where I could be me, and be okay with that. I had no need for material possessions, money or even close friends with me on my journey. I never understood people very well anyway, and they never seemed to understand me very well either. All I wanted was my art and the chance to be the creator of my own world, my own reality. I wanted the open road and new beginnings every day.”',
        "- BleachtheLeach": "I like turtles."
    };

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}