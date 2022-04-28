import React from 'react';
import HomeCarousel from './HomeCarouselComponent';
import VideoCarousel from './VideoCarouselComponent';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons'; 
import BandsInTownWidget from './BandsInTownWidgetComponent';


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
            <Col sm={6} style={{ marginTop: 60, paddingLeft: 60, textAlign: 'center'}}>               
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
                <div class="widget_iframe" style={{ display:'inline-block', width:'300px', height:'185px', marginLeft: 50 }}><iframe class="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_1090826?widget_id=54&amp;posted_by=artist_1090826&pwc[design]=customized&pwc[background_color]=%23666666&pwc[size]=custom" width="100%" height="100%" frameborder="0" scrolling="no" title="Reverbnation email list signup" ></iframe><div class="footer_branding" style={{ marginTop:'-5px', fontSize: '10px', fontFamily: 'Arial' }} ><center><a href="https://www.reverbnation.com/band-promotion/fanreach?utm_campaign=a_features_fanreach&utm_medium=widget&utm_source=HTML5_Fan_Collector&utm_content=widgetfooter_Email newsletters for bands at ReverbNation.com" target="_blank" rel="noreferrer" style={{ textDecoration:'none', color:'#444' }}>Email newsletters for bands at ReverbNation.com</a></center></div></div>
                <br />
                <br />
                <div style={{ marginLeft: 50 }}>
                    <SocialIcon url= 'https://www.facebook.com/waltandjackie' style={{ margin: 9 }}/>
                    <SocialIcon url= 'https://www.bandsintown.com/a/4261532-walt-and-jackie?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar' style={{ margin: 9 }}/>
                    <SocialIcon url= 'https://www.youtube.com/channel/UClZEqPxlRZEqVerkh2MYiFQ' style={{ margin: 9 }}/>
                </div>
            </Col>
        </Row>
        <Row style={{ marginBottom: 20 }}>
            <Col sm={12}>
                <p className='photo-credits'>Photo credits: <a style={{ color: '#7d7c7c'}} href='https://www.scottmillerphotography.com/' target='blank'>Scott Miller Photography</a> ~ <a style={{ color: '#7d7c7c'}} href='https://www.lynncraneportrait.com/' target='blank'>Lynn Crane Portrait</a> ~ <a style={{ color: '#7d7c7c'}} href='http://philipbalko.com/' target='blank'>Photography By Balko</a> ~  Jennifer Solensky  ~  Drawing by Jim Price
                </p>
            </Col>
        </Row>
		<div style={{ marginTop: 20 }} className='shows'>
			<Row style={{ marginBottom: 10 }}>
				<h2>Shows</h2>
			</Row>
			<hr />
			<Row style={{ marginTop: 20 }}>
				<Col style={{ alignItems: 'right' }}>
					<h4>10 July</h4>
					<h5>12:00pm - 2:00pm</h5>
				</Col>
				<Col>
					<h4>St. Benedict Church Reunion Festival</h4>
					<p>2310 Bedford St, Johnstown, PA</p>
				</Col>
			</Row>
			<hr />
			<Row style={{ marginTop: 20 }}>
				<Col>
					<h4>16 July</h4>
					<h5>2:00pm - 3:30pm</h5>
				</Col>
				<Col>
					<h4>PennCrest Bank Music Festival @ Cresson Lake Playhouse</h4>
					<p>279 Shapiro Road, Loretto, PA</p>
				</Col>
			</Row>
			<hr />
		</div>
        <div>
            <BandsInTownWidget />
        </div>
    </div>
    );
}

export default HomePage;