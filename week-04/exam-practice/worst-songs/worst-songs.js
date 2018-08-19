'use strict';

const worstSongs = `1;(You're) Having My Baby;Paul Anka/Odia Coates;1974
2;You Light Up My Life;Debby Boone;1977
3;Tie A Yellow Ribbon;Dawn featuring Tony Orlando;1973
4;To All The Girls I've Loved;Julio Iglesias/Willie Nelson;1984
5;I Write The Songs;Barry Manilow;1975
6;Honey;Bobby Goldsboro;1968
7;Muskrat Love;The Captain & Tenille;1976
8;Feelings;Morris Albert;1975
9;Yummy Yummy Yummy;Ohio Express;1968
10;The Men In My Little Girl's Li Mike Douglas;1966
11;Afternoon Delight;Starland Vocal Band;1976
12;Billy, Don't Be A Hero;Bo Donaldson & the Heywoods;1974
13;Ballad of the Green Berets;Sgt. Barry Sadler;1966
14;Daddy Don't You Walk So Fast;Wayne Newton;1972
15;Candy Man;Sammy Davis Jr;1972
16;In The Year 2525;Zager & Evans;1969
17;I've Never Been To Me;Charlene;1982
18;Seasons in the Sun;Terry Jacks;1973
19;Alone Again (Naturally);Gilbert O'Sullivan;1972
20;Paper Roses;Marie Osmond;1973
21;Me and You and a Dog Named Boo-Lobo;1971
22;Torn Between Two Lovers;Mary MacGregor;1976
23;Sunshine On My Shoulders;John Denver;1974
24;I'm Henry VIII, I Am;Herman's Hermits;1965
25;A Fifth of Beethoven;Walter Murphy/Big Apple Band;1976
26;Wake Me Up Before You Go-Go;Wham!;1984
27;After The Lovin';Englebert Humperdinck;1976
28;Sometimes When We Touch;Dan Hill;1978
29;Ebony and Ivory;Paul McCartney/Stevie Wonder;1982
30;Escape (The Pina Colada Song);Rupert Holmes;1979
31;Put Your Hand In The Hand;Ocean;1971
32;Have You Never Been Mellow;Olivia Newton-John;1975
33;Kung Fu Fighting;Carl Douglas;1975
34;Da Doo Ron Ron;Shaun Cassidy;1977
35;The Lights Went Out In Georgia Vicki Lawrence;1973
36;I Am Woman;Helen Reddy;1971
37;We Love You, Call Collect;Art Linkletter;1969
38;Party All The Time;Eddie Murphy;1985
39;Fernando;ABBA;1976
40;Those Were The Days;Mary Hopkin;1968
41;Love Will Keep Us Together;The Captain & Tenille;1975
42;Jean;Oliver;1969
43;The Night Chicago Died;Paper Lace;1974
44;Venus;Bananarama;1987
45;Watching Scotty Grow;Bobby Goldsboro;1971
46;A Horse With No Name;America;1972
47;Copacabana (At The Copa);Barry Manilow;1978
48;Indian Reservation;Raiders;1971
49;Under The Boardwalk;Bruce Willis;1987
50;Precious and Few;Climax;1972
51;Half-Breed;Cher;1973
52;Do That To Me One More Time;the Captain & Tenille;1979
53;The Dream Weaver;Gary Wright;1975
54;Cherish;the Association;1966
55;Is That All There Is;Peggy Lee;1969
56;I Think We're Alone Now;Tiffany;1987
57;Think of Laura;Christopher Cross;1984
58;MacArthur Park;Donna Summer;1978
59;In The Navy;Village People;1979
60;Incense and Peppermints;Strawberry Alarm Clock;1967
61;At Seventeen;Janis Ian;1975
62;Touch Me In The Morning;Diana Ross;1973
63;Rock Me Amadeus;Falco;1985
64;Girl Watcher;O'Kaysions;1968
65;Dust In The Wind;Kansas;1978
66;Disco Duck;Rick Dees/Cast of Idiots;1976
67;Wildfire;Michael Murphey;1975
68;Sussudio;Phil Collins;1985
69;The Logical Song;Supertramp;1979
70;One Tin Soldier;Coven;1971
71;Baby Don't Get Hooked On Me;Mac Davis;1972
72;Brand New Key;Melanie;1971
73;Silly Love Songs;Wings;1976
74;I Honestly Love You;Olivia Newton-John;1974
75;Simon Says;1910 Fruitgum Company;1968
76;Sing;Carpenters;1973
77;Annie's Song;John Denver;1974
78;Babe;Styx;1979
79;State of Shock;Mick Jagger/MIchael Jackson;1984
80;I Just Called To Say I Love;Stevie Wonder;1984
81;My Sharona;the Knack;1979
82;My Melody of Love;Bobby Vinton;1974
83;Longer;Dan Fogelberg;1979
84;The Morning After;Maureen MacGovern;1973
85;I'd Like To Teach The World To The Hillside Singers;1971
86;Times of Your Life;Paul Anka;1975
87;Stuck With You;Huey Lewis & the News;1986
88;It's Still Rock & Roll To Me;Billy Joel;1980
89;America;Neil Diamond;1980
90;Colour My World;Chicago;1971
91;We'll Sing In The Sunshine;Gail Garnett;1964
92;I'm Easy;Keith Carradine;1976
93;Saturday NIght;Bay City Rollers;1975
94;Do the Clam;Elvis Presley;1965
95;Lady;Kenny Rogers;1980
96;Good Morning Starshine;Oliver;1969
97;Pac-Man Fever;Buckner & Garcia;1982
98;Don't Give Up On Us;David Soul;1976
99;Tip-Toe Through The Tulips;Tiny Tim;1968
100;Everybody Have Fun Tonight;Wang Chung;1986`// You can copy the file content here, the file I/O is not part of the exercise.

const getYears = (songs) => {
   const years = [];
   const songsArr =  songs.map(worstSong => {
    return worstSong.split(';');
  });
  songsArr.forEach(song => {
    const index = song[3];
    years[index] = (Object.keys(years).includes(index)) ? ++years[index] : 1;
  });
  return years;
}

const yearOfWorstSongs = (worstSongs) => {
  let worstSongsArr = worstSongs.split('\n');
  const years = getYears(worstSongsArr);
  const yearCount = [];
  years.forEach((num, index) => {
    yearCount.push(num);
  });
  const max = Math.max(...yearCount);
  let message = `The year when the most worst songs came out is ${years.indexOf(max)}`;
  years[(years.indexOf(max))] = 0;
  while(years.includes(max)) {
    message += ` and ${years.indexOf(max)}`;
    years[(years.indexOf(max))] = 0;   
  }
  return message + '.';
}

console.log(yearOfWorstSongs(worstSongs));

// expected output
`The year when the most worst songs came out is <year>.`