// 4 - Find books with the author that has < 4 characters
// Pre-history: 
// We had a book store, but someone created a few books with 
// the author that has < 3 characters. We consider those fake 
// authors. So please create a function that accepts an array 
// parameter and returns a list of books with a short name authors(<4)

const books = [
    {
        "id": "a5b16ad1bb2e96b8c649da7150ad5726",
        "title": "Mon Oct 17 2022 21:32:42 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "221517d1a0948a2faa56a824803aa60e",
        "title": "bjlci",
        "author": "Lazy boy"
    },
    {
        "id": "286332e30d3962f5de20c2cf8b673482",
        "title": "Mon Oct 24 2022 00:38:43 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "bd78bed71d601bdd19c76c8309287894",
        "title": "Mon Oct 17 2022 21:32:42 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "b1b50d3539fce3bddf12ae23b5b7563a",
        "title": "test",
        "author": "test"
    },
    {
        "id": "6c68213399df870779c41ea40b08a290",
        "title": "fxrmm",
        "author": "Lazy boy"
    },
    {
        "id": "8d4eb5ae26e97586bd4735f37e605663",
        "title": "mixka",
        "author": "Lazy boy"
    },
    {
        "id": "a15e98f24b2f191b9dc911ed49a8b897",
        "title": "Thu Oct 06 2022 00:39:01 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "d7d4f2d30c48378a0afff0cec5e95f3d",
        "title": "Thu Oct 06 2022 00:39:48 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "b358d7e541be33fb29abf9839e60255b",
        "title": "Thu Oct 06 2022 00:39:48 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "c8dbebd06336d1f989621ddbb77d9cfc",
        "title": "Mon Oct 17 2022 21:29:22 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "846662a3108af141fa9bfafca4d58485",
        "title": "Book_1",
        "author": "Diana Vides"
    },
    {
        "id": "fe8032939c03840bc5d22d2ca1049df8",
        "title": "Mon Oct 17 2022 21:29:22 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "e0550475bcaa52daa2e70045a898fffb",
        "title": "hello",
        "author": "world"
    },
    {
        "id": "2a6b69b955a629f50ca814ac27494dc7",
        "title": "Thu Oct 06 2022 00:40:48 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "bbdd3bb9918c4de81af954896c230473",
        "title": "Mon Oct 24 2022 00:36:45 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "f2ecc6b734e480b265cc446704040a14",
        "title": "blimg",
        "author": "Lazy boy"
    },
    {
        "id": "59f5ea43c546e628c0de0eb9245aeba1",
        "title": "Thu Oct 27 2022 23:38:11 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "0a7757860f1b9cb1779e6dacfbcf0722",
        "title": "Mon Oct 24 2022 00:39:59 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "07608cae809a2ab3a110c844c72c7d91",
        "title": "Mon Oct 24 2022 00:38:43 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "3d770cdb32d9a306c43279d1194989dd",
        "title": "wphbj",
        "author": "Lazy boy"
    },
    {
        "id": "b532cd1d7fe313f147d502d4a63e58d5",
        "title": "New book",
        "author": "Diana Vides"
    },
    {
        "id": "9820fd8508f7da558dcd9492fe9cf9bc",
        "title": "rdwhz",
        "author": "Lazy boy"
    },
    {
        "id": "202e748acd4853b940b508192ca487d8",
        "title": "togsz",
        "author": "Lazy boy"
    },
    {
        "id": "b04eaad6c21df2531f7328a3655e4937",
        "title": "Gosvami book",
        "author": "Gosvami Maharadj"
    },
    {
        "id": "35f32506cd084cd1b8d2511a3dccdbea",
        "title": "I found my book",
         "author": "Yaro"
    },
    {
        "id": "ef532f5ae136ce40b697851113802b90",
        "title": "Mon Oct 24 2022 00:36:45 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "cbcb05251b4b08e3059fa49563abcd33",
        "title": "test",
        "author": "t"
    },
    {
        "id": "be2bb10f95b0053e69262ffd583835b4",
        "title": "ltlpm",
        "author": "Lazy boy"
    },
    {
        "id": "7497f549a8a7a6bfedc726414c4b82fa",
        "title": "Mon Oct 24 2022 00:39:59 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "483c86c798963792b21cc09d4b9b866c",
        "title": "book_3",
        "author": "Vides_4"
    },
    {
        "id": "9488935823927eb47a40a11d50cb5354",
        "title": "Thu Oct 06 2022 00:40:48 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "5d89156487b33d9822884bfe2604f50c",
        "title": "Thu Oct 06 2022 00:39:01 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    },
    {
        "id": "b1614edd95c6cd925c6c143118d41394",
        "title": "xbihe",
        "author": "Lazy boy"
    },
    {
        "id": "b919ef04e2d772c8c4a61b3e992e30f8",
        "title": "All books has to have title and author with typeof string values. The Id has to be unique and have length of 32 characters, you should not be able to update Id",
        "author": "Lazy boy"
    },
    {
        "id": "98678cffc91065a10107e8c91f9d9e80",
        "title": "Thu Oct 27 2022 23:38:11 GMT-0700 (Pacific Daylight Time)",
        "author": "Lazy boy"
    }
]

const shortBooks = books.filter(book => {
    return book.author.length < 4;
});
console.log(shortBooks);