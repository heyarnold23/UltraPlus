from app.models import db, Show


# Adds a demo user, you can add other users here if you want
def seed_shows():
    attack_on_titan = Show(
        name='Attack On Titan',
        thumbnail_url='https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=747157b1-4581-414a-959f-c4956ebc3349&region=US&format=jpeg&size=952x536',
        title_pic_url='https://www.pngmart.com/files/13/Attack-On-Titan-Word-Logo-Transparent-PNG.png',
        background_art_url=f'https://i.ibb.co/s5RwfN6/wp1837539.jpg',
        details_body="It's been four years since the Scout Regiment reached the shoreline, and the world looks different now. Things are heating up as the fate of the Scout Regiment—and the people of Paradis—are determined at last. However, Eren is missing. Will he reappear before age-old tensions between Marleyans and Eldians result in the war of all wars?",
        studio='Wit Studio',
        year='2013',
        # video_url='https://www.youtube.com/watch?v=4XoWJV88_MA'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Attack+on+Titan+-+Colossal+Titan+Appears+%5BEnglish+Subbed%5D.mp4'
    )
    dragonball = Show(
        name='DragonBall Super',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=c6182167-be22-4128-aa41-c52261c53837&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/4Kkv22k/dragon-ball-super-717243.png',
        background_art_url=f'https://i.ibb.co/X2tfPJ4/dragon-ball-desktop-tournament-of-power-wallpapers-wallpaper-cave-jpg.jpg',
        details_body="With Majin Buu defeated, Goku has taken a completely new role as a…radish farmer?! With Earth at peace, our heroes have settled into normal lives. But they can’t get too comfortable. Far away, a powerful God awakens to a prophecy revealing his demise at the hands of a formidable being. When his search for the Saiyan God brings him to Earth, can Goku and his friends take on their strongest foe yet?",
        studio='TOEI ANIMATION',
        year='2015',
        # video_url='https://www.youtube.com/watch?v=oYWL1hgPIuM'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Dragon+Ball+Super+-+Official+Clip+-+Goku+vs.+Goku+Black.mp4'
    )
    cowboy_bebop = Show(
        name='Cowboy Bebop',
        thumbnail_url='https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=9c7dd5d7-6578-41d9-abd4-57d410e62ea1&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/xm3sf9c/png-clipart-spike-spiegel-youtube-logo-television-show-anime-youtube-cowboy-text.png',
        background_art_url=f'https://i.ibb.co/CKF97hg/54835.jpg',
        details_body="Explore the galaxy in this undeniably hip series that inspired a generation - and redefined anime as an indisputable art form. The Bebop crew is just trying to make a buck, and they're the most entertaining gang of bounty hunters in the year 2071.",
        studio='Sunrise Inc.',
        year='1998',
        # video_url='https://www.youtube.com/watch?v=EL-D9LrFJd4'
        video_url=f'https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Cowboy+Bebop+%E2%80%93+Opening+Theme+%E2%80%93+Tank!.mp4'
    )
    demon_slayer = Show(
        name='Demon Slayer',
        thumbnail_url='https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=8940a6b8-788b-4683-af9e-b65a3c7fa279&region=US&format=jpeg&size=952x536',
        title_pic_url='https://i.ibb.co/7r47MJD/5ede4a3fb760540004f2c5e9.png',
        background_art_url='https://i.ibb.co/PTww0sY/Webp-net-resizeimage.jpg',
        details_body="It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a demon slayer so that he can turn his sister back into a human, and kill the demon that massacred his family. A sorrowful tale of siblings in which the fates of humans and demons intertwine... begins now!",
        studio='Aniplex',
        year='2019',
        # video_url='https://www.youtube.com/watch?v=N_PDjHF_jWo&t=21s'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Zenitsu+shows+his+real+strength+_+Demon+Slayer+_+HD.mp4'
    )
    boruto = Show(
        name='Boruto: Naruto Next Generations',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=a91d87f4-f239-4792-9266-b047a2546dea&region=US&format=jpeg&size=952x536',
        title_pic_url='https://i.ibb.co/27YR9f3/Boruto-logo.png',
        background_art_url=f'https://i.ibb.co/T11hXqw/3272437.png',
        details_body="The life of the shinobi is beginning to change. Boruto Uzumaki, son of Seventh Hokage Naruto Uzumaki, has enrolled in the Ninja Academy to learn the ways of the ninja. Now, as a series of mysterious events unfolds, Boruto’s story is about to begin!",
        studio='Studio Pierrot',
        year='2017',
        # video_url='https://www.youtube.com/watch?v=_ZJ10oZvY2o&list=PLRe9ARNnYSY6gxEr7iDQZWx6lFbuy0QgB&index=38'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/The+Bell+Test+_+Boruto+-+Naruto+Next+Generations.mp4'
    )
    one_piece = Show(
        name='One Piece',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=31f90904-d759-496c-82e2-b4c9c145f36a&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/yRZXNfm/file-history-one-piece-logo-11563071942adcognuldv.png',
        background_art_url=f'https://i.ibb.co/hsvccs6/17352.jpg',
        details_body="Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become king of all pirates. With a course charted for the treacherous waters of the Grand Line, this is one captain who’ll never drop anchor until he’s claimed the greatest treasure on Earth—the Legendary One Piece!",
        studio='TOEI ANIMATION',
        year='1999',
        # video_url='https://www.youtube.com/watch?v=Yu4V3iTjpeY'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/CHARGE!+_+One+Piece.mp4'
    )
    my_hero = Show(
        name='My Hero Academia',
        thumbnail_url='https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=2d0d3308-9323-4716-b7d8-03f171c844af&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/vqShQbf/20-201997-my-hero-academia-title-hd-png-download.png',
        background_art_url=f'https://i.ibb.co/TPnBjyn/2547104.jpg',
        details_body="Despite being born powerless into a super-powered world, Izuku refuses to give up on his dream of becoming a hero. He enrolls himself in a prestigious hero academy with a deadly entrance exam. To make the grade, he’ll have to put in some serious study time with the mightiest hero of all.",
        studio='Toho Co Ltd',
        year='2016',
        # video_url='https://www.youtube.com/watch?v=wpOhT35YtWg'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Deku+vs+Todoroki+_+My+Hero+Academia.mp4'
    )
    bleach = Show(
        name='Bleach',
        thumbnail_url='https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=6cb25676-17fe-4ed0-8a3b-bac21face511&region=US&format=jpeg&size=952x536',
        title_pic_url='https://i.ibb.co/vYmF3HS/AAAABe-GNPBj9-p-Ne9-U5-W3twm-U7-LOTCaciafgun8hlkpi-DN0l4w-PXQHRKc-3da-EI9vr2g-JMSVHx-Tz1wti-G3-Cv-Md.png',
        background_art_url=f'https://i.ibb.co/qJHw9v0/552415.jpg',
        details_body="For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever…",
        studio='Viz',
        year='2004',
        # video_url='https://www.youtube.com/watch?v=kBPWn6PjPIc&t=42s'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Ichigo+vs+Oko+_+Bleach.mp4'
    )
    samurai_champloo = Show(
        name='Samurai Champloo',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=44651417-ab88-4504-a37b-b55e953271d4&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/S50JzPJ/AAAABTh0z4qm-Ynto-NRs-TA4-FIRXLdb-Ho-Xu-KFgm-z-o-D-o-Cef9-Ojn-EOhng-FP7-HMT0tk-Yo-V7sf-Ybyzy-Pj-v-Mu.png',
        background_art_url=f'https://i.ibb.co/CHP2cns/2.jpg',
        details_body="Mugen is a ferocious, animalistic warrior with a fighting style inspired by break-dancing. Jin is a ronin samurai who wanders the countryside alone. They may not be friends, but their paths continually cross. And when ditzy waitress Fuu gets them out of hot water with the local magistrate, they agree to join her search for the samurai who smells like sunflowers.",
        studio='FlyingDog Inc.',
        year='2004',
        # video_url='https://www.youtube.com/watch?v=hficV9yr2mA'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Samurai+Champloo+_+Trailer.mp4'
    )
    carole_and_tuesday = Show(
        name='Carole And Tuesday',
        thumbnail_url='https://i.ibb.co/VQnJbCc/CE-Carole-Tuesday-1.jpg',
        title_pic_url='https://i.ibb.co/CKDZdKR/547-5478247-carole-and-tuesday-title-hd-png-download.png',
        background_art_url=f'https://i.ibb.co/bz0PCP3/2778513.jpg',
        details_body="Tuesday, the teenaged daughter of the prominent politician Valerie Simmons, runs away from home on terraformed Mars to be able to play music. In Alba City, chance brings her together with Carole, another aspiring young musician who's just been fired from her dead-end job. The two decide to make music together.",
        studio='bones',
        year='2019',
        # video_url='https://www.youtube.com/watch?v=cxFpNkOD5UE'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Carole+.mp4'
    )
    kids_on_the_slope = Show(
        name='Kids On The Slope',
        thumbnail_url='https://i.ibb.co/CPpMY5k/Kids-on-the-Slope-KOS-KEY-2048x768.jpg',
        title_pic_url='https://i.ibb.co/QP8zRRx/kids-on-the-slope-57de344bd9a41.png',
        background_art_url=f'https://i.ibb.co/D59z2Vm/kids-on-the-slope.jpg',
        details_body="Introverted classical pianist and top student Kaoru Nishimi has just arrived in Kyushu for his first year of high school. Having constantly moved from place to place since his childhood, he abandons all hope of fitting in, preparing himself for another lonely, meaningless year. That is, until he encounters the notorious delinquent Sentarou Kawabuchi. Sentarou's immeasurable love for jazz music inspires Kaoru to learn more about the genre, and as a result, he slowly starts to break out of his shell, making his very first friend. Kaoru begins playing the piano at after-school jazz sessions, located in the basement of fellow student Ritsuko Mukae's family-owned record shop. As he discovers the immense joy of using his musical talents to bring enjoyment to himself and others, Kaoru's summer might just crescendo into one that he will remember forever.",
        studio='MAPPA',
        year='2012',
        # video_url='https://www.youtube.com/watch?v=jRHJntLYMh0'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Sakamichi+no+Apollon+-+Medley.mp4'
    )
    jujutsu = Show(
        name='Jujutsu Kaisen',
        thumbnail_url='https://i.ibb.co/YQdTLdx/jujutsu-kaisen-61024e6b98cbf.jpg',
        title_pic_url='https://i.ibb.co/xq2Zfkp/AAAABen-F3-Unaazjv-Wtx-Jrkg-O66-DOTKi-Mqa-HO4k-Wi1-Hs5-T2-Hm-Ctjw-Vopyt-B2-Vk9mdqe-Iit-U3-Bwv-USs-Mm.png',
        background_art_url=f'https://i.ibb.co/VxgrXvz/6652232.jpg',
        details_body="Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.",
        studio='MAPPA',
        year='2020',
        # video_url='https://www.youtube.com/watch?v=NyPf5ipLFkU'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Gojo+vs+Sukuna+_+JUJUTSU+KAISEN.mp4'
    )
    mob = Show(
        name='Mob Psycho 100',
        thumbnail_url='https://i.ibb.co/pLzjtRx/mob-psycho-100-60f8bcfb5a81d.jpg',
        title_pic_url='https://i.ibb.co/ncqT664/222-2227848-mob-psycho-100-english-logo-mob-psycho-100-1.png',
        background_art_url=f'https://i.ibb.co/jZ0qhFZ/1338448.png',
        details_body='The story revolves around "Mob," a boy who will explode if his emotional capacity reaches 100%. This boy with psychic powers earned his nickname "Mob" because he does not stand out among other people. He keeps his psychic powers bottled up so he can live normally, but if his emotional level reaches 100, something will overwhelm his entire body.',
        studio='bones',
        year='2016',
        # video_url='https://www.youtube.com/watch?v=SSV2KUMf3aQ'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/My+Animosity+_+Mob+Psycho+100.mp4'
    )
    opm = Show(
        name='One Punch Man',
        thumbnail_url='https://i.ibb.co/rQFTmYP/54a25fcf-a472-4d40-9968-13e2957e5abf-base-image-bucket-name-image-manager-base-image-7fe5491a-1ac9-4.jpg',
        title_pic_url='https://i.ibb.co/NSC719v/one-punch-man-large-title-logo-png-by-thequeenotaku-dadxdrz-fullview.png',
        background_art_url=f'https://i.ibb.co/tp32Zyd/3742277.jpg',
        details_body="Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch. The lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.",
        studio='Madhouse',
        year='2015',
        # video_url='https://www.youtube.com/watch?v=km2OPUctni4'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Saitama+vs+Genos+Fight+_+One+Punch+Man+(60FPS).mp4'
    )
    vinland = Show(
        name='Vinland Saga',
        thumbnail_url='https://i.ibb.co/ZBhYKp3/81-Aa-Er-Fc-DUL-RI.jpg',
        title_pic_url='https://i.ibb.co/c88M5Xq/AAAABT2-Ba-TVy-zjsp-Vi-S60-Zv-XOPhlxa-E9-DFhl-YGw-VTg-UVh-Pmc-s-F6v7-Dak-H4ad-H1c-Vv11-Un-Sj-D3p-Wu.png',
        background_art_url=f'https://i.ibb.co/DCk8FvL/ln6v0brzc4651.png',
        details_body="Thorfinn is son to one of the Vikings' greatest warriors, but when his father is killed in battle by the mercenary leader Askeladd, he swears to have his revenge. Thorfinn joins Askeladd's band in order to challenge him to a duel, and ends up caught in the middle of a war for the crown of England.",
        studio='Wit Studio',
        year='2019',
        # video_url='https://www.youtube.com/watch?v=7U7BDn-gU18'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Vinland+saga+OP+1+(720p).mp4'
    )
    hunter = Show(
        name='Hunter X Hunter',
        thumbnail_url='https://i.ibb.co/thhXdG4/4160deed-5e27-4f23-aa9a-a8e4f126e9cb-base-image-bucket-name-image-manager-base-image-86d73021-c991-4.jpg',
        title_pic_url='https://i.ibb.co/KFJVS18/462-4627708-hunter-x-hunter-hunter-x-hunter-title-hd.png',
        background_art_url=f'https://i.ibb.co/981LmVL/1078973.jpg',
        details_body="After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
        studio='Madhouse',
        year='2011',
        # video_url='https://www.youtube.com/watch?v=Txl2imn11bM'
        video_url='https://project-videos-ultraplus.s3.us-west-1.amazonaws.com/Gon+vs+Hisoka+_+Hunter+X+Hunter.mp4'
    )
    # placeholder = Show(
    #     name='',
    #     thumbnail_url='',
    #     title_pic_url='',
    #     background_art_url=f'',
    #     details_body="",
    #     studio='',
    #     year='',
    #     video_url=''
    # )

    db.session.add(attack_on_titan)
    db.session.add(dragonball)
    db.session.add(cowboy_bebop)
    db.session.add(demon_slayer)
    db.session.add(boruto)
    db.session.add(one_piece)
    db.session.add(my_hero)
    db.session.add(bleach)
    db.session.add(samurai_champloo)
    db.session.add(carole_and_tuesday)
    db.session.add(kids_on_the_slope)
    db.session.add(jujutsu)
    db.session.add(mob)
    db.session.add(opm)
    db.session.add(vinland)
    db.session.add(hunter)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_shows():
    db.session.execute('TRUNCATE shows RESTART IDENTITY CASCADE;')
    db.session.commit()
