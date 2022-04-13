import React from 'react';
import HomeCarousel from './HomeCarouselComponent';
import VideoCarousel from './VideoCarouselComponent';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'; 


function HomePage() {
return(
    <div className='App'>
        <HomeCarousel />
        <VideoCarousel />
        <Row>
            <Col sm={6} style={{ alignItems: 'left' }}>
                <div style={{ marginTop: 40, marginLeft: 40}}>
                    {/* soundcloud player */}
                    <iframe width="85%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1249308064&color=%2354041c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Walt &amp; Jackie cover You've Got A Friend"></iframe><div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate', fontWeight: 100 }}><a href="https://soundcloud.com/user-371562063" title="Walt &amp; Jackie" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Walt &amp; Jackie</a> · <a href="https://soundcloud.com/user-371562063/youve-got-a-friend" title="You&#x27;ve Got A Friend" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none'}}>You&#x27;ve Got A Friend</a></div>
                </div>
            </Col>
            <Col sm={6} style={{ marginTop: 60, paddingLeft: 60, textAlign: 'left'}}>               
                <h3 style={{ fontSize: '3rem' }}>Booking:</h3>
                <a className='email' style={{ fontFamily: 'Playfair Display', fontSize: '2rem', color: '#A3956D'}} href="mailto:waltandjackie@gmail.com">waltandjackie@gmail.com</a> 
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
                <h1 style={{ textAlign: 'left', marginLeft: 80, marginTop: 40}}>About Walt &amp; Jackie</h1>
                <p className='home-about-text' style={{ marginLeft: 60, marginBottom: 40 }}>Walt &amp; Jackie, voted "Simply the Best" Entertainers in Johnstown, PA, is an acoustic duo known for their excellent covers and engaging original songs. Their song selections, spanning over six decades of music, entertain audiences with music from artists like Elvis Presley, Adele, Neil Diamond, Carole King, Lady Antebellum, and so many more! Playing venues ranging from theaters to festivals to wineries to bars, Walt &amp; Jackie have a special chemistry and ease that captivates audiences to the last song. They play a variety of instruments, including piano, ukulele, guitar and Walt's famous bongos, and they move easily from old country to new pop, bringing a fresh take to live acoustic music.
                <br /> 
                <br /> 
                Walt &amp; Jackie have headlined shows at the Pasquerilla Performing Arts Center four times, presenting a popular holiday show, as well as a show that they created called "Legends", which was picked up by the Garrett Lakes Arts Festival in Maryland. They were also featured local artists at the Flood City Music Festival in 2018, and have performed at the PPG Paints Arena for a Pittsburgh Penguins fundraiser.
                <br />
                <br />
                Walt Churchey and Jackie Kopco are seasoned performers with a combined 60+ years of experience between them. They are dependable and charismatic - consummate professionals. Powerful vocalists and musicians in their own right, these two solo artists struck the perfect chord when they blended Jackie’s melodic range and soaring style with Walt’s raw passion and bold cadence for an unexpectedly original sound, one that’s built an enthusiastic following across Western Pennsylvania.
                </p>
            </Col>
            <Col sm={6} style={{ marginTop: 100 }}>
                {/* reverbnation email widget */}
                <div class="widget_iframe" style={{ display:'inline-block', width:'300px', height:'185px', margin:0, padding:0,border:0 }}><iframe class="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_1090826?widget_id=54&amp;posted_by=artist_1090826&pwc[design]=customized&pwc[background_color]=%23666666&pwc[size]=custom" width="100%" height="100%" frameborder="0" scrolling="no" title="Reverbnation email list signup" ></iframe><div class="footer_branding" style={{ marginTop:'-5px', fontSize: '10px', fontFamily: 'Arial' }} ><center><a href="https://www.reverbnation.com/band-promotion/fanreach?utm_campaign=a_features_fanreach&utm_medium=widget&utm_source=HTML5_Fan_Collector&utm_content=widgetfooter_Email newsletters for bands at ReverbNation.com" target="_blank" rel="noreferrer" style={{ textDecoration:'none', color:'#444' }}>Email newsletters for bands at ReverbNation.com</a></center></div></div>
                <br />
                <br />
                <SocialIcon url= 'https://www.facebook.com/waltandjackie' style={{ margin: 9 }}/>
                <SocialIcon url= 'https://www.bandsintown.com/a/4261532-walt-and-jackie?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar' style={{ margin: 9 }}/>
                <SocialIcon url= 'https://www.youtube.com/channel/UClZEqPxlRZEqVerkh2MYiFQ' style={{ margin: 9 }}/>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <p className='photo-credits'>Photo credits: <a style={{ color: '#7d7c7c'}} href='https://www.scottmillerphotography.com/' target='blank'>Scott Miller Photography</a> ~ <a style={{ color: '#7d7c7c'}} href='https://www.lynncraneportrait.com/' target='blank'>Lynn Crane Portrait</a> ~ <a style={{ color: '#7d7c7c'}} href='http://philipbalko.com/' target='blank'>Photography By Balko</a> ~  Jennifer Solensky  ~  Drawing by Jim Price
                </p>
            </Col>
        </Row>
        <Row>
            <Col>

            <script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script>
  <a class="bit-widget-initializer"
    
	data-artist-name="id_4261532"
	
	data-background-color="#ffffff"
	data-separator-color="#DDDDDD"
	data-text-color="#424242"
	data-font="Helvetica"
	data-auto-style="true"
	
	data-display-local-dates="true"
	data-local-dates-position="tab"
	data-display-past-dates="true"
	data-display-details="true"
	data-display-lineup="true"
	data-display-start-time="true"
	data-social-share-icon="true"
	data-display-limit="all"
	
	data-date-format="MMM. D, YYYY"
	data-date-orientation="horizontal"
	data-date-border-color="#08C3BA"
	data-date-border-width="1px"
	data-date-border-radius="10px"
	
	data-event-ticket-cta-size="medium"
	data-event-ticket-text="TICKETS"
	data-event-ticket-icon="false"
	data-event-ticket-cta-text-color="#FFFFFF"
	data-event-ticket-cta-bg-color="#08C3BA"
	data-event-ticket-cta-border-color="#08C3BA"
	data-event-ticket-cta-border-width="0px"
	data-event-ticket-cta-border-radius="4px"
	
	data-sold-out-button-text-color="#FFFFFF"
	data-sold-out-button-background-color="#9B9B9B"
	data-sold-out-button-border-color="#08C3BA"
	data-sold-out-button-clickable="true"
	
	data-event-rsvp-position="left"
	data-event-rsvp-cta-size="medium"
	data-event-rsvp-text="SET REMINDER"
	data-event-rsvp-icon="false"
	data-event-rsvp-cta-text-color="#08C3BA"
	data-event-rsvp-cta-bg-color="#FFFFFF"
	data-event-rsvp-cta-border-color="#08C3BA"
	data-event-rsvp-cta-border-width="1px"
	data-event-rsvp-cta-border-radius="4px"
	
	data-follow-section-position="top"
	data-follow-section-alignment="center"
	data-follow-section-header-text="Get updates on new shows, new music, and more."
	data-follow-section-cta-size="medium"
	data-follow-section-cta-text="FOLLOW"
	data-follow-section-cta-icon="true"
	data-follow-section-cta-text-color="#FFFFFF"
	data-follow-section-cta-bg-color="#08C3BA"
	data-follow-section-cta-border-color="#08C3BA"
	data-follow-section-cta-border-width="0px"
	data-follow-section-cta-border-radius="4px"
	
	data-play-my-city-position="bottom"
	data-play-my-city-alignment="Center"
	data-play-my-city-header-text="Don’t see a show near you?"
	data-play-my-city-cta-size="medium"
	data-play-my-city-cta-text="REQUEST A SHOW"
	data-play-my-city-cta-icon="true"
	data-play-my-city-cta-text-color="#FFFFFF"
	data-play-my-city-cta-bg-color="#08C3BA"
	data-play-my-city-cta-border-color="#08C3BA"
	data-play-my-city-cta-border-width="0px"
	data-play-my-city-cta-border-radius="4px"
	
	data-language="en"
	data-widget-width=""
	data-div-id=""
	data-app-id=""
	data-affil-code="undefined"
	data-bit-logo-position="bottomCenter"
	data-bit-logo-color="#CCCCCC"
	
    ></a>
            </Col>
        </Row>
        
    </div>
    );
}

export default HomePage;