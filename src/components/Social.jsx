import React from 'react';
import facebook from '../../src/facebook.png';
import twitter from '../../src/twitter.png';
import instagram from '../../src/instagram.png';
import youtube from '../../src/youtube.png';


export default function Social(props) {

  return (
    <div className="social-tag-div">

      {props.strFacebook
        &&
        <div className="social-logo-div">
          < a href={"http://" + props.strFacebook}
            target="_blank"
            rel="noopener noreferrer"><img src={facebook} /></a>
        </div>
      }
      {props.strTwitter
        &&
        <div className="social-logo-div">
          < a href={"http://" + props.strTwitter}
            target="_blank" rel="noopener noreferrer"><img src={twitter} /></a>
        </div>
      }
      {props.strInstagram
        &&
        < div className="social-logo-div">
          <a href={"http://" + props.strInstagram}
            target="_blank" rel="noopener noreferrer"><img src={instagram} /></a>
        </div>
      }

      {
        props.strYoutube
        &&
        <div className="social-logo-div">
          <a href={"http://" + props.strYoutube}
            target="_blank" rel="noopener noreferrer"><img src={youtube} /></a>
        </div>
      }

    </div >
  );
}