
require 'faker'

Genre.destroy_all
Record.destroy_all
User.destroy_all

puts "Creating genres..."

c1 = Genre.create(genre: 'Darkwave')
c2 = Genre.create(genre: 'Deathrock')
c3 = Genre.create(genre: 'Post-Punk')
c4 = Genre.create(genre: 'Goth Rock')

puts "Genres created!"



puts "Summoning users..."

u1 = User.create(username: "Peter", 
    bio: "Lead singer of Type 0 Negative, general badass.", 
    country: "USA", 
    instagram_handle: nil, 
    avatar: "http://aslongasitsblack.com/wp-content/uploads/2019/07/peter-steele-1-e1567446464507-988x1024.jpg", 
    password_digest: "type0", 
    email: Faker::Internet.email)

u2 = User.create(username: "Sioux", 
    bio: "The original Dark Queen", 
    country: "UK",
    instagram_handle: nil, 
    avatar: "https://consequence.net/wp-content/uploads/2015/08/screen-shot-2015-08-31-at-11-40-25-am.png", 
    password_digest: "bansheeQueen", 
    email: Faker::Internet.email)

u3 = User.create(username: "Rob", 
    bio: "It's Friday, I'm in love", 
    country: "UK",
    instagram_handle: nil, 
    avatar: "https://www.nme.com/wp-content/uploads/2023/01/cure_paul_cox_3.jpg", 
    password_digest: "p0rn0graphy", 
    email: Faker::Internet.email)

    10.times do
        User.create!(username: Faker::Internet.username(specifier: 5..15), 
        bio: Faker::Lorem.paragraph(sentence_count: 3, supplemental: false, random_sentences_to_add: 4),
        country: Faker::Address.country,
        instagram_handle: nil,
        avatar: Faker::LoremFlickr.pixelated_image,
        password_digest: Faker::Internet.password,
        email: Faker::Internet.email)
    end 

puts "Users summoned!"

puts "Creating records..."

r1 = Record.create(
    album_name: "First and Last and Always", 
    artist_name: "Sisters of Mercy", 
    album_cover: "https://m.media-amazon.com/images/I/5170MWXHA4L._UF1000,1000_QL80_.jpg", 
    condition: "Mint", 
    genre: c3, 
    user_id: u3.id, 
    release_date: "March 11, 1985", 
    release_description: "First and Last and Always is the debut studio album by English gothic rock band the Sisters of Mercy. It was released on 11 March 1985 through the band's self-financed Merciful Release label.",
    record_labels: "Elektra Records",  
    price: rand(1..1000), 
    spotify_link: "https://open.spotify.com/album/2wOuYERNvxVipFb2JlwvwA?si=mO0oO2vQTySwBK1UAIqlTA"
)

r2 = Record.create( 
    album_name: "The Sky's Gone Out", 
    artist_name: "Bauhaus", 
    album_cover: "https://i.discogs.com/o3yzAi_CocgxqKVAC8bIw8x6PeKGL1BoTPFaRKgGers/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MjIx/MC0xNDE3NzQwNjAx/LTk1NjIuanBlZw.jpeg", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u1.id,
    release_date: "October 22, 1982", 
    release_description: "The Sky's Gone Out is the third studio album by English gothic rock band Bauhaus, released in 1982 by record label Beggars Banquet.",
    record_labels: "Beggas Banquet", 
    price: rand(1..1000), 
    spotify_link: "https://open.spotify.com/album/42L0285NmWnp6lF0Tf6uyw?si=ZBy-Ru91Rn2kt26x1BcAKQ"
)

r3 = Record.create(
    album_name: "Pornography", 
    artist_name: "The Cure", 
    album_cover: "https://www.udiscovermusic.com/wp-content/uploads/2016/09/Tthe-Cure-Pornography-album-cover-web-optimised-820.jpg", 
    condition: "Mint", 
    genre: c4, 
    user_id: u2.id,
    release_date: "May 4, 1982", 
    release_description: "Pornography is the fourth studio album by English Gothic rock band The Cure, released on 3 May 1982 by Fiction Records. Preceded by the non-album single 'Charlotte Sometimes', it was the band's first album with new producer Phil Thornalley, and was recorded at RAK Studios from January to April 1982.",
    record_labels: nil, 
    price: rand(1..1000), 
    spotify_link: "https://open.spotify.com/album/4VJc4uhhFDpDjoyYsB5JjO?si=kydJ2JiFSJ-FKWpJgPZT_A"
)

r4 = Record.create(
    album_name: "Floodland", 
    artist_name: "Sisters of Mercy", 
    album_cover: "http://s3.amazonaws.com/quietus_production/images/articles/10717/The_Sisters_of_Mercy_-_Floodland_1353248725.jpg", 
    condition: "Average", 
    genre: c1, 
    user_id: u3.id,
    release_date: "November 13, 1987", 
    release_description: "Floodland is the second studio album by English gothic rock band the Sisters of Mercy. It was released on 16 November 1987, through Merciful Release internationally and distributed by WEA, with Elektra Records handling the United States release.",
    record_labels: "Elektra Records", 
    price: rand(1..1000), 
    spotify_link: "https://open.spotify.com/album/2I5WCmOZo17YkcEwjXbLvc?si=qgCla-PwR-KTsZF4eJDTUg"
)

r5 = Record.create(
    album_name: "Belirdi Gece", 
    artist_name: "She Past Away", 
    album_cover: "https://fabrikarecords.com/wp-content/uploads/2020/08/FP008-FRONT-1200-768x768.png", 
    condition: "Mint", 
    genre: c1, 
    user_id: u2.id,
    release_date: "Februrary 20, 2012",
    release_description: "There are only a few albums that could be cited as a pivotal moment in dark music over the past decade, and one of them would be she past away’s belirdi gece (which translates to “the night appeared”) from 2012. It could be said that the 2010s wave of the darkwave genre is defined by this lp, a monumental component to the scene’s landscape. The album—written by volkan caner, idris akbulut, and doruk öztürkcan from bursa, turkey—appeared from nowhere and slowly crept up on unsuspecting fans of the genre. Immediately, she past away felt like a reincarnation of sisters of mercy with their snappy drum machine underneath caner’s bellowing vocals sung in turkish. Or, further, she past away is the long lost child of 1980s post-punk bands such as clan of xymox, joy division, and the cure. 
    But it would be too easy to compare them to classic, old-guard bands. Belirdi gece has become a staple in the genre itself, the ignition to a slew of bands that aim for the same mood and distinct sound that has become spa’s very own. This lp was just the beginning of the band’s rise into the darkwave zeitgeist—a great accomplishment for any band, especially, whose lyrics are not sung in english. There is drama, mystery, and longing within this album, but it also maintains a pure danceability. These are tracks for the goth club, full of classics that go hand-in-hand with the progenitors of the movement. 
    While most tracks on belirdi gece feel familiar, it’s because you can’t escape them. Nightclubs around the world rely on the songs to keep dancefloors crammed into the early hours of morning. “sanri,” the opening song, is an unmistakable classic that brings on waves of sadness and a spooky atmosphere that remains throughout the lp. Another recognizable classic is “ritüel” that is shrouded in mystery (most of all by the ghostly whispers that haunt the track) and led by a prominent, demanding guitar line. “monoton” is just as its song title suggests: a feeling of melancholy, a projection of the hopelessness of life that’s viewed in a monotone black and white. The song “kasvetli kutlama” is another dance floor diamond, perfect for smoke-filled basements, while “insanlar” pulls back on the dramatics and derives its melody and atmosphere from traditional forms of post-punk, complete with haunting vocals that brim with longing. 
    With its minimal wave attributes, “belirdi gece (musallat)” is melodramatic and awash in darkness. “ruh”—a track with an insatiable beat—progresses into an epic resolution as caner’s vocals echo and call out into the black night sky. The eeriness of “kemir beni” recalls a strange feeling of anticipation with its synthpunk beat and running synths while “bozbulanik” continues on with a sense of dread, an urgency. Belirdi gece closes out with “ice kapanis,” a proper ending to the severity of the album, akin to the cure’s signature death march à la seventeen seconds. She past away’s first full length introduced the scene to their own style of funeral dance—one full of tumultuous emotions—that was not only fun to dance to, but altered darkwave’s dna. 
    We present you the 10th anniversary limited edition of “belirdi gece”. Black on black cover design and semi black semi clear vinyl are the main features of this celebratory edition.",
    record_labels: "Fabrika Records", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/2DjBWEwZJH5VY5dSMHIhpo?si=dW9bPiQwSpmj7pE3kWwyKg"
)

r6 = Record.create( 
    album_name: "Juju", 
    artist_name: "Siouxsie and the Banshees", 
    album_cover: "https://i.discogs.com/gvazKF-vrdSZYNJ1vDa1klvrRYfRJ8g0wU_f-VmbHUY/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0Mjgx/Mi0xNDU5MTY1OTcx/LTY0NTcuanBlZw.jpeg", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u1.id,
    release_date: "June 6, 1981", 
    release_description: "Juju is the fourth studio album by English rock band Siouxsie and the Banshees. It was recorded at Surrey Sound studio with Nigel Gray as co-producer, and was released on 19 June 1981 by record label Polydor. Two singles were released from Juju: 'Spellbound' and 'Arabian Knights'.",
    record_labels: "PVC Records", 
    price: rand(1..500), 
    spotify_link: "https://open.spotify.com/album/5OEum65e1HMGX51Ifu51Wb?si=IQMHk87BThuVVhvYv7jb8g"
)

r8 = Record.create( 
    album_name: "Only Theatre of Pain", 
    artist_name: "Christian Death", 
    album_cover: "https://e.snmc.io/i/1200/s/95ca598de47b7586d530fe1155ca4112/10608523", 
    condition: "Mint", 
    genre: c3, 
    user_id: u2.id,
    release_date: "March 24, 1982", 
    release_description: "Only Theatre of Pain is the first studio album by the American rock band Christian Death, released on March 24, 1982, by the Frontier record label. It is considered by most critics to be the harbinger of the deathrock style of music, as well as being highly influential on the American gothic music scene.",
    record_labels: "Unknown", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/59uGWiIsDCv9OKEplQEjO2?si=LSsBc9abQH6Y1Wmlw43fLQ"
)

r9 = Record.create( 
    album_name: "Treasure", 
    artist_name: "Cocteau Twins", 
    album_cover: "https://cf-cdn.beggars.com/fourad/site/images/releases/packshots/5661992a1b8d7.jpg", 
    condition: "Fair", 
    genre: c2, 
    user_id: u1.id,
    release_date: "November 1, 1984", 
    release_description: "Treasure is the third studio album by Scottish alternative rock band Cocteau Twins, released on 1 November 1984 by 4AD. With this album, the band settled on what would, from then on, be their primary lineup: vocalist Elizabeth Fraser, guitarist Robin Guthrie and bass guitarist Simon Raymonde.",
    record_labels: " Palladium Studios", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/7pBPB9vwqCMLKNmUCK4k62?si=V-MRy618RKWqNY3j2QSXAQ"
)

r10 = Record.create( 
    album_name: "Closer", 
    artist_name: "Joy Division", 
    album_cover: "https://ohsobserver.com/wp-content/uploads/2022/01/joy-division-closer-3.jpg", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u3.id,
    release_date: "July 18, 1980", 
    release_description: "Closer is the second and final studio album by English rock band Joy Division, released on 18 July 1980 by Factory Records. Produced by Martin Hannett, it was released two months after the suicide of the band's lead singer and lyricist Ian Curtis.",
    record_labels: "Britannia Row", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/0KBdfMTMxi0oD1oVqApTjr?si=WXPTlvMMQ_aUxktkw7tGMA"
)

r11 = Record.create( 
    album_name: "An Eye for the Main Chance", 
    artist_name: "Rosetta Stone", 
    album_cover: "https://f4.bcbits.com/img/a2588827318_16.jpg", 
    condition: "Fair", 
    genre: c2, 
    user_id: u1.id,
    release_date: "October 14, 1991", 
    release_description: "Released October 14 by the popular post-punk/goth rock band Rosetta Stone.",
    record_labels: "Expression Records", 
    price: rand(1..500),
)

r12 = Record.create( 
    album_name: "Talk About the Weather", 
    artist_name: "Red Lorry Yellow Lorry", 
    album_cover: "https://e.snmc.io/i/1200/s/542b815a409062ff17d2b7bdb787f527/6265019", 
    condition: "Fair", 
    genre: c3, 
    user_id: u3.id,
    release_date: "1985", 
    release_description: "Talk About the Weather is the first studio album by the British rock band Red Lorry Yellow Lorry. It was released in 1985 in the UK on the Red Rhino independent label. It appeared on the New Musical Express indie rock albums chart for several months and peaked at No. 3, indicating strong sales.",
    record_labels: "Unknown", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/4wpyEwxlY2qtsp4cRuFKXw?si=gj6QC_JVTZavSzH1G0q3KA"
)

r13 = Record.create( 
    album_name: "Medusa", 
    artist_name: "Clan of Xymox", 
    album_cover: "https://i.pinimg.com/originals/27/9b/0f/279b0ff6a7d6654f52d18399feee06d6.jpg", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u2.id,
    release_date: "November 1, 1986", 
    release_description: "Medusa is the second studio album by Dutch dark wave band Clan of Xymox. It was released on 1 November 1986 by 4AD. Founding member Pieter Nooten re-recorded the songs 'After the Call' and 'Theme I' on Sleeps with the Fishes, his 1987 collaborative album with Michael Brook, following a brief split from the band.",
    record_labels: "Unknown", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/3DBGxdFyynAak3dRiy54Jv?si=qjtdZ9hrT4Wv4TiXWQu3PQ"
)

r14 = Record.create( 
    album_name: "The Demonstration", 
    artist_name: "Drab Majesty", 
    album_cover: "https://f4.bcbits.com/img/a3220590401_10.jpg", 
    condition: "Near-Mint", 
    genre: c2, 
    user_id: u3.id,
    release_date: "April 18, 2017", 
    release_description: "The Demonstration is the second full-length LP by Drab Majesty, released on Dais Records in January 2017. The album is inspired by 80s new wave and the infamous 'Heaven's Gate' alien space cult of the late 90s.",
    record_labels: "Independent", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/57h5IDkgYnV5AZV5PU97xN?si=nRlyDkA1RLyWm1dFryUSgQ"
)

r15 = Record.create( 
    album_name: "Serpentine Gallery", 
    artist_name: "Switchblade Symphony", 
    album_cover: "https://i.ebayimg.com/images/g/8oMAAOxywh1TGVtk/s-l640.jpg", 
    condition: "Mint", 
    genre: c3, 
    user_id: u3.id,
    release_date: "September 11, 1995 ", 
    release_description: "Serpentine Gallery is the debut studio album of gothic rock duo Switchblade Symphony. A deluxe edition with a bonus disc was released in 2005.",
    record_labels: "Independent", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/48tX5OBHAx6pBsPZEd0qVg?si=hCChPiEJRD-FIdLvZD3Irg"
)

r16 = Record.create( 
    album_name: "Tocsin", 
    artist_name: "Xmal Deutschland", 
    album_cover: "https://i.scdn.co/image/ab67616d0000b273d7e599c86352b420977d411b", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u2.id,
    release_date: "June 25, 1984", 
    release_description: "Tocsin is the second studio album by German post-punk band Xmal Deutschland. It was released in June 1984 on 4AD. ",
    record_labels: "PVC Records", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/2wsPRUsIQt3atWXuRYJ3tv?si=I-52UZXLQ_mzuIL24GU5Nw"
)

r17 = Record.create( 
    album_name: "Curse", 
    artist_name: "Alien Sex Fiend", 
    album_cover: "https://i.discogs.com/o8pmtWn5ISkt8ieSx-VsskGWzpYlHayLt8n7bMYsKOk/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyODYx/Ni0xMTk5MjA0ODE0/LmpwZWc.jpeg", 
    condition: "Fair", 
    genre: c3, 
    user_id: u1.id,
    release_date: "1980", 
    release_description: "Curse is the seventh studio album by English gothic rock band Alien Sex Fiend, released in September 1990 by Anagram Records",
    record_labels: "Independent", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/2ivKqu51PdGZQHqdTO28xI?si=Fi2mnH8cTmWKmJ9fuiHL5Q"
)

r18 = Record.create( 
    album_name: "... If I Die, I Die", 
    artist_name: "Virgin Prunes", 
    album_cover: "https://www.virginprunes.com/wp/wp-content/uploads/Virgin-Prunes-If-I-Die-I-Die-sleeve-600x600-1.png", 
    condition: "Near-Mint", 
    genre: c1, 
    user_id: u2.id,
    release_date: "November 4, 1982", 
    release_description: "...If I Die, I Die is the debut studio album by Irish rock band Virgin Prunes. It was released on 4 November 1982 by record label Rough Trade. It was produced by Colin Newman of Wire.",
    record_labels: "Rough Trade", 
    price: rand(1..500)
)

r19 = Record.create( 
    album_name: "In the Flat Field", 
    artist_name: "Bauhaus", 
    album_cover: "https://i.discogs.com/gvazKF-vrdSZYNJ1vDa1klvrRYfRJ8g0wU_f-VmbHUY/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU0Mjgx/Mi0xNDU5MTY1OTcx/LTY0NTcuanBlZw.jpeg", 
    condition: "Near-Mint", 
    genre: c3, 
    user_id: u1.id,
    release_date: "November 3, 1980", 
    release_description: "In the Flat Field is the debut studio album by English gothic rock band Bauhaus. It was recorded between December 1979 and July 1980, and was released on 3 November 1980 by record label 4AD, the first full-length release on that label.",
    record_labels: "4AD", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/4hPJRedKOmbvKnLdzV9w1w?si=HgbYubS2RMaS-6csI2wTkA"
)

r20 = Record.create( 
    album_name: "Killing Joke", 
    artist_name: "Killing Joke", 
    album_cover: "https://rockandrollglobe.com/wp-content/uploads/2020/11/image3A18231_Glitch3.jpg", 
    condition: "Poor", 
    genre: c3, 
    user_id: u3.id,
    release_date: "October 5, 1980", 
    release_description: "Killing Joke is the debut studio album by English post-punk band Killing Joke, released on 5 October 1980 by E.G. via Polydor Records. It debuted at number 41 on the UK Albums Chart on 26 October 1980 and later peaked at number 39.",
    record_labels: "Malicious Damage", 
    price: rand(1..500),
    spotify_link: "https://open.spotify.com/album/16MILExMR5RIvzTIII2YnH?si=0ed4H9cDQU-GWTJeCGBKag"
)

puts "Records spun!"

puts "Generating comments..."

2.times do 
    Comment.create!(user_id: u1.id, record_id: r2.id,
                   content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u3.id, record_id: r1.id,
                    content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u2.id, record_id: r4.id,
                    content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u3.id, record_id: r5.id,
                    content:Faker::Lorem.sentence)
end 

2.times do 
    Comment.create!(user_id: u1.id, record_id: r6.id,
                    content:Faker::Lorem.sentence)
end 

puts "Comments generated!"

puts "Creating watches..."

Watch.create!(user_id: u1.id, record_id: r1.id )
Watch.create!(user_id: u2.id, record_id: r2.id )
Watch.create!(user_id: u3.id, record_id: r4.id )
Watch.create!(user_id: u1.id, record_id: r6.id )
Watch.create!(user_id: u2.id, record_id: r4.id )
Watch.create!(user_id: u3.id, record_id: r3.id )
Watch.create!(user_id: u1.id, record_id: r2.id )
Watch.create!(user_id: u2.id, record_id: r1.id )
Watch.create!(user_id: u3.id, record_id: r1.id )

puts "Watches created!"
