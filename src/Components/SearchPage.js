import React from 'react';

export default ()=>{
    return(
        <div className="main-div">
      <div className="top-nav">
        <ul className="topOuterList">
          <li className="topInnerList">Gmail</li>
          <li className="topInnerList">Images</li>
          <li className="topInnerList contain"><img src={require('../assets/grid.png')} alt="Google" height="20"/></li>
          <li className="topInnerList btn">Sign in</li>
        </ul>
      </div>
      <div className="google-logo">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" height="92"/>
      </div>
      <div className="search-bar">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" className="text-box" />
        <img src={require('../assets/mike.png')} alt="Google" height="20"/>
      </div>
      <div className="btns">
        <button className="search-btn">Google Search</button>
        <div className="space"></div>
        <button className="feel-lky">I'm Feeling Lucky</button>
      </div>
      <div className="cont">
        <p>To all packaging, shipping, and delivery workers, thank you</p>
      </div>
      <div className="lang">
        <p>Google offered in: 
          <div className="sp"></div>
          <div className="diff-lang"> 
            <div className="sp">हिन्दी </div> 
            <div className="sp">বাংলা </div>
            <div className="sp">తెలుగు</div> 
            <div className="sp">मराठी</div> 
            <div className="sp">தமிழ்</div> 
            <div className="sp">ગુજરાતી</div> 
            <div className="sp">ಕನ್ನಡ</div> 
            <div className="sp">മലയാളം</div> 
            <div className="sp">ਪੰਜਾਬੀ</div> 
          </div>
        </p>
      </div>
      <div className="bottom-nav">
        <div className="location">
          India
        </div>
        <div className="bottom-nav-list">
          <ul className="list-left">
            <li>Advertising</li>
            <li>Business</li>
            <li>About</li>
            <li>How Search works</li>
          </ul>
          <ul className="list-right">
            <li>Privacy</li>
            <li>About</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </div>
    )
}
