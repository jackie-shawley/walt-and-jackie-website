import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';


export default function MusicPage(props) {
    return(
        <React.Fragment>
            <Row>
                <Col className='col-12'>
                    <div className='position-relative container'>
                        <img src='images/carousel photos/bongo-pic-summerhill.jpg' className='img-fluid rounded shadow-2-strong' style={{ height: '100%', width: '80%', justifyContent: 'center', marginTop: 10 }} alt='Walt &amp; Jackie playing bongos' />
                        <div className='centered fluid'>
                            <h1>Music</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <hr className='music-page-hr'></hr> */}
            <Row style={{ marginTop: 25 }}>
                <Container fluid className='d-flex justify-content-around'>
                    <Row>
                    <Col xs={12} md={6}>
                        <img src="images/album_covers/Home_cover.jpg" className='home-cover-image' alt="Walt Churchey playing guitar and singing" />
                    </Col>
                    <Col xs={12} md={6} className='home-player'>
                        {/* soundcloud player Home */}
                        <iframe width="100%" height="150" scrolling="no" frameborder="yes" allow="autoplay" download='true' title='Home player' src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1683818547&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <div style={{ fontSize: '10px', color: '#cccccc',lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden',whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate', fontWeight: 100 }}>
                            <a href="https://soundcloud.com/user-371562063" title="Walt Churchey" target="_blank" rel='noreferrer' style={{ color: '#cccccc', textDecoration: 'none'}} >Walt Churchey</a> · <a href="https://soundcloud.com/user-371562063/home" title="Home" target="_blank" rel='noreferrer' style={{ color: '#cccccc', textDecoration: 'none',}} >Home</a></div>
                        <div>
                            <Button 
                                className='btn-download-home'
                                variant="success"
                                style={{ color: "white", borderColor: 'green', fontFamily: "Avenir-light", fontSize: '1.25rem', margin: 16 }}
                                size="lg"
                                href="https://drive.google.com/file/d/17AuvojoCDeb4W9k4OCrT4h4xyaexRWLU/view?usp=sharing">
                                Download 'Home'
                            </Button>
                        </div>                    
                    </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container fluid className='d-flex justify-content-around'>
                    <Row>
                        <Col xs={12} md={4}>
                            <Card className='album-card' style={{ justifyContent: 'flex-end' }}>
                                <Card.Img variant='top' src='images/album_covers/BARE_album_cover.jpeg' />
                                <Card.Body>
                                    <Card.Text>Walt &amp; Jackie's flagship album as a duo, Bare is an album that tells story after story about life through the eyes of a small town dreamer.
                                    </Card.Text>
                                    <div>
                                        {/* soundcloud player Bare */}
                                        <iframe width="100%" height="600" scrolling="yes" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1453504408&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_reposts=false&amp;download=true&amp;" title="Walt &amp; Jackie flagship album Bare">
                                        </iframe>
                                        <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate', fontWeight: 100 }}>
                                            <a href="https://soundcloud.com/user-371562063" title="Walt &amp;amp; Jackie" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Walt &amp; Jackie: </a> ·
                                            <a href="https://soundcloud.com/user-371562063/sets/bare-1" title="Bare" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Bare</a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className='linktree-card' bg='dark' border='light'>
                                {/* <Card.Img variant='top' src='images/album_covers/BARE_album_cover.jpeg' /> */}
                                <Card.Body>
                                    <Card.Text className='linktree-card-text'>
                                        Want to purchase Walt &amp; Jackie's music or listen to it on your favorite platform?
                                    </Card.Text>
                                    {/* links */}
                                    <div className='d-grid gap-2'>
                                        <Button size='lg' href='https://music.apple.com/us/artist/walt-jackie/541092572' target='_blank' rel='noreferrer' className='button'>
                                            <img src='images/social_logos/apple music logo.png' alt='Apple Music logo' className='button-logo' />
                                            Apple Music
                                        </Button>
                                        <hr />
                                        <Button size='lg' href='https://www.amazon.com/music/player/artists/B008GNPLUW/walt-jackie' target='_blank' rel='noreferrer' className='button'>
                                            <img src='images/social_logos/amazon_music_logo.jpeg' alt='Amazon Music logo' className='button-logo' />
                                            Amazon Music
                                        </Button>
                                        <hr />
                                        <Button size='lg' href='https://soundcloud.com/user-371562063?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' target='_blank' rel='noreferrer' className='button'>
                                            <img src='images/social_logos/soundcloud logo.png' alt='Amazon Music logo' className='button-logo' />
                                            Soundcloud
                                        </Button>
                                        <hr />
                                        <Button size='lg' href='https://www.youtube.com/user/uflutterby33' target='_blank' rel='noreferrer' className='button'>
                                            <img src='images/social_logos/youtube logo.png' alt='Amazon Music logo' className='button-logo' />
                                            YouTube
                                        </Button>
                                        <hr />
                                        <Button size='lg' href="mailto:waltandjackie@gmail.com" target='_blank' rel='noreferrer' className='button'>
                                            <img src='images/social_logos/gmail_logo.png' alt='gmail logo' className='button-logo' />
                                            Email Us
                                        </Button>
                                        <hr />
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className='album-card'>
                                <Card.Img variant='top' src='images/album_covers/Take_Time_Album_Cover-.jpeg' />
                                <Card.Body>
                                    <Card.Text>Walt &amp; Jackie's collection of holiday songs. With originals like the thoughtful title track, “Take Time,” and the heart-felt and haunting, “Christmas Day,” Walt &amp; Jackie bring the sights and emotions of the holidays back home to their roots.
                                    </Card.Text>
                                    <div>
                                        {/* soundcloud player Take Time */}
                                        <iframe width="100%" height="600" scrolling="yes" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1447863946&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;" title="Walt &amp; Jackie holiday album Take Time"></iframe>
                                        <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate', fontWeight: 100 }}>
                                            <a href="https://soundcloud.com/user-371562063" title="Walt &amp;amp; Jackie" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Walt &amp; Jackie: </a>
                                            <a href="https://soundcloud.com/user-371562063/sets/take-time" title="Take Time" target="_blank" rel="noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Take Time</a></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>          
        </React.Fragment>
    )
}