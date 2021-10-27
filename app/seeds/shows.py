from app.models import db, Show


# Adds a demo user, you can add other users here if you want
def seed_shows():
    attack_on_titan = Show(
        name='Attack On Titan',
        thumbnail_url='https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=747157b1-4581-414a-959f-c4956ebc3349&region=US&format=jpeg&size=952x536',
        title_pic_url='https://www.pngmart.com/files/13/Attack-On-Titan-Word-Logo-Transparent-PNG.png',
        background_art_url=f'https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=ee6e6d5b-49e6-4bb9-b8d8-fabe139cf2e0&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%20768w,https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=ee6e6d5b-49e6-4bb9-b8d8-fabe139cf2e0&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201024w,https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=ee6e6d5b-49e6-4bb9-b8d8-fabe139cf2e0&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201280w,https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=ee6e6d5b-49e6-4bb9-b8d8-fabe139cf2e0&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201440w,https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=ee6e6d5b-49e6-4bb9-b8d8-fabe139cf2e0&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201600w,https://img3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=ee6e6d5b-49e6-4bb9-b8d8-fabe139cf2e0&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201920w',
        details_body="It's been four years since the Scout Regiment reached the shoreline, and the world looks different now. Things are heating up as the fate of the Scout Regiment—and the people of Paradis—are determined at last. However, Eren is missing. Will he reappear before age-old tensions between Marleyans and Eldians result in the war of all wars?",
        studio='Kodansha',
        year='2013',
        video_url='https://www.youtube.com/watch?v=4XoWJV88_MA'
    )
    dragonball = Show(
        name='DragonBall Super',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=c6182167-be22-4128-aa41-c52261c53837&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/4Kkv22k/dragon-ball-super-717243.png',
        background_art_url=f'https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=9733f863-85d8-4ea2-91ac-ba9c2de04d9b&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%20768w,https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=9733f863-85d8-4ea2-91ac-ba9c2de04d9b&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201024w,https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=9733f863-85d8-4ea2-91ac-ba9c2de04d9b&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201280w,https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=9733f863-85d8-4ea2-91ac-ba9c2de04d9b&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201440w,https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=9733f863-85d8-4ea2-91ac-ba9c2de04d9b&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201600w,https://img4.hulu.com/user/v3/artwork/0921b58c-bef9-4a4d-a677-03ec7745428c?base_image_bucket_name=image_manager&base_image=9733f863-85d8-4ea2-91ac-ba9c2de04d9b&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201920w',
        details_body="With Majin Buu defeated, Goku has taken a completely new role as a…radish farmer?! With Earth at peace, our heroes have settled into normal lives. But they can’t get too comfortable. Far away, a powerful God awakens to a prophecy revealing his demise at the hands of a formidable being. When his search for the Saiyan God brings him to Earth, can Goku and his friends take on their strongest foe yet?",
        studio='TOEI ANIMATION',
        year='2015',
        video_url='https://www.youtube.com/watch?v=oYWL1hgPIuM'
    )
    cowboy_bebop = Show(
        name='Cowboy Bebop',
        thumbnail_url='https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=9c7dd5d7-6578-41d9-abd4-57d410e62ea1&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/xm3sf9c/png-clipart-spike-spiegel-youtube-logo-television-show-anime-youtube-cowboy-text.png',
        background_art_url=f'https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=d911f830-8157-4b82-b72a-e92b1f973ed0&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%20768w,https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=d911f830-8157-4b82-b72a-e92b1f973ed0&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201024w,https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=d911f830-8157-4b82-b72a-e92b1f973ed0&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201280w,https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=d911f830-8157-4b82-b72a-e92b1f973ed0&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201440w,https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=d911f830-8157-4b82-b72a-e92b1f973ed0&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201600w,https://img1.hulu.com/user/v3/artwork/af54be93-ee11-475c-b786-3543a9a7d4ba?base_image_bucket_name=image_manager&base_image=d911f830-8157-4b82-b72a-e92b1f973ed0&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201920w',
        details_body="Explore the galaxy in this undeniably hip series that inspired a generation - and redefined anime as an indisputable art form. The Bebop crew is just trying to make a buck, and they're the most entertaining gang of bounty hunters in the year 2071.",
        studio='Sunrise Inc.',
        year='1998',
        # video_url='https://r2---sn-jvhj5nu-nh4e.googlevideo.com/videoplayback?expire=1635141140&ei=tPF1YeexMI2Jkwar16CADQ&ip=2601:205:4200:f850:511:6e51:50a2:c1e2&id=o-AMWQjvAn0XZTIcteWMstMfXo1pTNB_3e5ZIQ-aHGj-0U&itag=22&source=youtube&requiressl=yes&mh=yz&mm=31,29&mn=sn-jvhj5nu-nh4e,sn-n4v7sne7&ms=au,rdu&mv=m&mvi=2&pl=34&gcr=us&initcwndbps=1977500&vprv=1&mime=video/mp4&ns=47jJRpLK8_4Kd_eFU8nYT-kG&ratebypass=yes&dur=89.954&lmt=1632597267820555&mt=1635119336&fvip=2&fexp=24001373,24007246&beids=9466585&c=WEB&txp=5532434&n=VNYlXLQZu4sM1jp766_&sparams=expire,ei,ip,id,itag,source,requiressl,gcr,vprv,mime,ns,ratebypass,dur,lmt&sig=AOq0QJ8wRgIhAPTiLAF1xn34X_CD2NiIURVGkMd8I7-S-UaEA6NUzioVAiEAoBgrb0Loys3IxXiwkR20FnbVGWaJjuJLP_F4Uoz5-Ko=&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRgIhAM3Y3DlVAlj8FrVCHAUynAl9SCwrK8FCFFBOouSiOJkaAiEA4SNxzbEBzYt46RmpMy9BO_h8ZpYd0J8eYYZUj2TVGVU='
        video_url='https://www.youtube.com/watch?v=EL-D9LrFJd4'
    )
    demon_slayer = Show(
        name='Demon Slayer',
        thumbnail_url='https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=8940a6b8-788b-4683-af9e-b65a3c7fa279&region=US&format=jpeg&size=952x536',
        title_pic_url='https://i.ibb.co/7r47MJD/5ede4a3fb760540004f2c5e9.png',
        background_art_url='https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=8940a6b8-788b-4683-af9e-b65a3c7fa279&region=US&format=jpeg&size=952x536',
        details_body="It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a demon slayer so that he can turn his sister back into a human, and kill the demon that massacred his family. A sorrowful tale of siblings in which the fates of humans and demons intertwine... begins now!",
        studio='Aniplex',
        year='2019',
        video_url='https://www.youtube.com/watch?v=N_PDjHF_jWo&t=21s'
    )
    boruto = Show(
        name='Boruto: Naruto Next Generations',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=a91d87f4-f239-4792-9266-b047a2546dea&region=US&format=jpeg&size=952x536',
        title_pic_url='https://i.ibb.co/27YR9f3/Boruto-logo.png',
        background_art_url=f'https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=4b2f4d3c-c143-44d5-823f-2ab15e76d358&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%20768w,https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=4b2f4d3c-c143-44d5-823f-2ab15e76d358&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201024w,https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=4b2f4d3c-c143-44d5-823f-2ab15e76d358&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201280w,https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=4b2f4d3c-c143-44d5-823f-2ab15e76d358&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201440w,https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=4b2f4d3c-c143-44d5-823f-2ab15e76d358&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201600w,https://img4.hulu.com/user/v3/artwork/e567be4f-2fd8-4127-bc08-580baad908e3?base_image_bucket_name=image_manager&base_image=4b2f4d3c-c143-44d5-823f-2ab15e76d358&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201920w',
        details_body="The life of the shinobi is beginning to change. Boruto Uzumaki, son of Seventh Hokage Naruto Uzumaki, has enrolled in the Ninja Academy to learn the ways of the ninja. Now, as a series of mysterious events unfolds, Boruto’s story is about to begin!",
        studio='Studio Pierrot',
        year='2017',
        video_url='https://www.youtube.com/watch?v=_ZJ10oZvY2o&list=PLRe9ARNnYSY6gxEr7iDQZWx6lFbuy0QgB&index=38'
    )
    one_piece = Show(
        name='One Piece',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=31f90904-d759-496c-82e2-b4c9c145f36a&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/yRZXNfm/file-history-one-piece-logo-11563071942adcognuldv.png',
        background_art_url=f'https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=dba1d02f-c6df-4273-b9fa-e755e23d8116&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D 768w,https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=dba1d02f-c6df-4273-b9fa-e755e23d8116&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D 1024w,https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=dba1d02f-c6df-4273-b9fa-e755e23d8116&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D 1280w,https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=dba1d02f-c6df-4273-b9fa-e755e23d8116&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D 1440w,https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=dba1d02f-c6df-4273-b9fa-e755e23d8116&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D 1600w,https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=dba1d02f-c6df-4273-b9fa-e755e23d8116&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D 1920w',
        details_body="Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become king of all pirates. With a course charted for the treacherous waters of the Grand Line, this is one captain who’ll never drop anchor until he’s claimed the greatest treasure on Earth—the Legendary One Piece!",
        studio='TOEI ANIMATION',
        year='1999',
        video_url='https://www.youtube.com/watch?v=Yu4V3iTjpeY'
    )
    my_hero = Show(
        name='My Hero Academia',
        thumbnail_url='https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=2d0d3308-9323-4716-b7d8-03f171c844af&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/vqShQbf/20-201997-my-hero-academia-title-hd-png-download.png',
        background_art_url=f'https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=bcbe4d74-87fb-4c3e-9591-63ea1c3eab3b&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%20768w,https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=bcbe4d74-87fb-4c3e-9591-63ea1c3eab3b&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201024w,https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=bcbe4d74-87fb-4c3e-9591-63ea1c3eab3b&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201280w,https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=bcbe4d74-87fb-4c3e-9591-63ea1c3eab3b&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201440w,https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=bcbe4d74-87fb-4c3e-9591-63ea1c3eab3b&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201600w,https://img1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=bcbe4d74-87fb-4c3e-9591-63ea1c3eab3b&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201920w',
        details_body="Despite being born powerless into a super-powered world, Izuku refuses to give up on his dream of becoming a hero. He enrolls himself in a prestigious hero academy with a deadly entrance exam. To make the grade, he’ll have to put in some serious study time with the mightiest hero of all.",
        studio='Toho Co Ltd',
        year='2016',
        video_url='https://www.youtube.com/watch?v=wpOhT35YtWg'
    )
    bleach = Show(
        name='Bleach',
        thumbnail_url='https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=6cb25676-17fe-4ed0-8a3b-bac21face511&region=US&format=jpeg&size=952x536',
        title_pic_url='https://i.ibb.co/vYmF3HS/AAAABe-GNPBj9-p-Ne9-U5-W3twm-U7-LOTCaciafgun8hlkpi-DN0l4w-PXQHRKc-3da-EI9vr2g-JMSVHx-Tz1wti-G3-Cv-Md.png',
        background_art_url=f'https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=7b879dca-d690-42c8-a2d8-05fa7d6dce85&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%20768w,https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=7b879dca-d690-42c8-a2d8-05fa7d6dce85&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201024w,https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=7b879dca-d690-42c8-a2d8-05fa7d6dce85&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201280w,https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=7b879dca-d690-42c8-a2d8-05fa7d6dce85&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201440w,https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=7b879dca-d690-42c8-a2d8-05fa7d6dce85&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201600w,https://img1.hulu.com/user/v3/artwork/0c265948-3450-40ad-89b4-883af457f36d?base_image_bucket_name=image_manager&base_image=7b879dca-d690-42c8-a2d8-05fa7d6dce85&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201920w',
        details_body="For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever…",
        studio='Viz',
        year='2004',
        video_url='https://www.youtube.com/watch?v=kBPWn6PjPIc&t=42s'
    )
    samurai_champloo = Show(
        name='Samurai Champloo',
        thumbnail_url='https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=44651417-ab88-4504-a37b-b55e953271d4&size=1200x630&format=jpeg',
        title_pic_url='https://i.ibb.co/S50JzPJ/AAAABTh0z4qm-Ynto-NRs-TA4-FIRXLdb-Ho-Xu-KFgm-z-o-D-o-Cef9-Ojn-EOhng-FP7-HMT0tk-Yo-V7sf-Ybyzy-Pj-v-Mu.png',
        background_art_url=f'https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=ee2099db-e040-4cff-b247-50ad87533b0f&operations=%5B%7B%22resize%22:%22768x768%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%20768w,https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=ee2099db-e040-4cff-b247-50ad87533b0f&operations=%5B%7B%22resize%22:%221024x1024%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201024w,https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=ee2099db-e040-4cff-b247-50ad87533b0f&operations=%5B%7B%22resize%22:%221280x1280%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201280w,https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=ee2099db-e040-4cff-b247-50ad87533b0f&operations=%5B%7B%22resize%22:%221440x1440%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201440w,https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=ee2099db-e040-4cff-b247-50ad87533b0f&operations=%5B%7B%22resize%22:%221600x1600%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201600w,https://img4.hulu.com/user/v3/artwork/77477b5f-905c-492f-a6a2-087fd4f85a15?base_image_bucket_name=image_manager&base_image=ee2099db-e040-4cff-b247-50ad87533b0f&operations=%5B%7B%22resize%22:%221920x1920%7Cmax%22%7D,%7B%22format%22:%22jpeg%22%7D%5D%201920w',
        details_body="Mugen is a ferocious, animalistic warrior with a fighting style inspired by break-dancing. Jin is a ronin samurai who wanders the countryside alone. They may not be friends, but their paths continually cross. And when ditzy waitress Fuu gets them out of hot water with the local magistrate, they agree to join her search for the samurai who smells like sunflowers.",
        studio='FlyingDog Inc.',
        year='2004',
        video_url='https://www.youtube.com/watch?v=hficV9yr2mA'
    )

    db.session.add(attack_on_titan)
    db.session.add(dragonball)
    db.session.add(cowboy_bebop)
    db.session.add(demon_slayer)
    db.session.add(boruto)
    db.session.add(one_piece)
    db.session.add(my_hero)
    db.session.add(bleach)
    db.session.add(samurai_champloo)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_shows():
    db.session.execute('TRUNCATE shows RESTART IDENTITY CASCADE;')
    db.session.commit()
