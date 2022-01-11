import {findImagePath} from  '../../functions.js'

export var Content =  function content() {
    return <div>
        <div id="templatemo_main">
            <div className="post_section">
                <span className="comment"><a href="blog_post.html">128</a></span>
                <h2><a href="blog_post.html">Aliquam lorem ante dapibus</a></h2>

                December 28, 2048 | <strong>Author:</strong> John | <strong>Category:</strong> <a href="#">Freebies</a>

                <img src={findImagePath(`templatemo_image_01.jpg`)} alt="image 1"/>

                <p>Clean Blog is a <a href="http://www.templatemo.com" target="_parent">Free HTML-CSS
                    Template</a> provided by <a href="#">templatemo.com</a> for everyone. Validate <a
                    href="http://validator.w3.org/check?uri=referer" rel="nofollow">XHTML</a> &amp; <a
                    href="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow">CSS</a>. Donec enim enim,
                    imperdiet quis, mollis a, elementum a, diam. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                    Nulla et nunc commodo ante ornare imperdiet.</p>
                <a href="blog_post.html">Continue reading...</a>

            </div>

            <div className="post_section">

                <span className="comment"><a href="blog_post.html">256</a></span>

                <h2><a href="blog_post.html">Lorem ipsum dolor sit amet</a></h2>

                December 24, 2048 | <strong>Author:</strong> Steve | <strong>Category:</strong> <a href="#">Web
                Design</a>

                <img src={findImagePath('templatemo_image_02.jpg')} alt="image 2"/>

                <p>Credits go to <a href="http://www.smashingmagazine.com/2008/09/23/practika-a-free-icon-set/"
                                    target="_blank">Smashing Magazine</a> for icons, <a href="http://www.photovaco.com"
                                                                                        target="_blank">Free
                    photos</a> for photos, and <a href="http://www.serie3.info/s3slider/" target="_blank">Serie3</a> for
                    the
                    slider. Ut nec vestibulum odio. Vivamus vitae nibh eu sem malesuada rutrum et sit amet magna. Cum
                    sociis
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <a href="blog_post.html">Continue reading...</a>
            </div>
        </div>
    </div>;
}