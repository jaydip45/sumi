import { useNavigate } from "react-router-dom";
import "./Notification1.css";

const Notification1 = () => {
  const navigate = useNavigate ();
  const notify = () =>{
    navigate('/home')
  }
  return (
    <div className='main-notification'>
        <div className='noti-div'>
    <div className="notification-1">
      <div className="header">
        <img
          className="linesystemarrow-left-line-icon"
          alt=""
          src="/linesystemarrowleftline.svg"
        onClick={notify}/>
        <div className="notification">Notification</div>
        {/* <img
          className="linesystemsearch-line-icon"
          alt=""
          src="/linesystemsearchline.svg"
        /> */}
      </div>
      <div className="component-8">
        <div className="component-47">
          <div className="component-1">
            <img
              className="component-1-child"
              alt=""
              src="/rectangle-2@4X.png"
            />
          </div>
          <div className="you-received-a-container">
            <span className="you-received-a-payment-of-780">
              <span>{`You received a payment of `}</span>
              <span className="span">$780.1</span>
              <span>{` from  `}</span>
            </span>
            <span>
              <b>Justin Westervelt</b>
            </span>
          </div>
          <div className="am">9:01am</div>
          <div className="component-47-child" />
          <img
            className="linesystemstar-line-icon"
            alt=""
            src="/linesystemstarline.svg"
          />
        </div>
      </div>
      <div className="component-9">
        <div className="component-47">
          <div className="component-1">
            <img
              className="component-1-child"
              alt=""
              src="/rectangle-1@2x.png"
            />
          </div>
          <div className="you-received-a-container1">
            <span>
              <b className="lindsey-culhane">Lindsey Culhane</b>
              <span className="span">{` requested a payment of `}</span>
            </span>
            <span className="span">
              <span>$780.1</span>
              <span className="span2">{` `}</span>
            </span>
          </div>
          <div className="button">
            <div className="button1">PAY</div>
          </div>
          <div className="am">9:01am</div>
          <div className="component-47-child" />
          <img
            className="linesystemstar-line-icon"
            alt=""
            src="/linesystemstarline.svg"
          />
        </div>
      </div>
      <div className="component-10">
        <div className="component-47">
          <div className="component-1">
            <img
              className="component-1-child"
              alt=""
              src="/rectangle-1@2x.png"
            />
          </div>
          <div className="you-received-a-container1">
            <span>
              <b className="lindsey-culhane">Lincoln Carder</b>
              <span className="span">{` requested a payment of `}</span>
            </span>
            <span className="span">
              <span>$1,780.1</span>
              <span className="span2">{` `}</span>
            </span>
          </div>
          <div className="button">
            <div className="button1">PAY</div>
          </div>
          <div className="am">9:01am</div>
          <div className="component-47-child" />
          <img
            className="linesystemstar-line-icon"
            alt=""
            src="/linesystemstarline.svg"
          />
        </div>
      </div>
      <div className="component-111">
        <div className="component-47">
          <div className="component-1">
            <img
              className="component-1-child"
              alt=""
              src="/rectangle-2@4X.png"
            />
          </div>
          <div className="you-received-a-container">
            <span className="you-received-a-payment-of-780">
              <span>{`You received a payment of `}</span>
              <span className="span">$780.1</span>
              <span>{` from  `}</span>
            </span>
            <span>
              <b>Justin Westervelt</b>
            </span>
          </div>
          <div className="am">9:01am</div>
          <div className="component-47-child" />
          <img
            className="linesystemstar-line-icon"
            alt=""
            src="/linesystemstarline.svg"
          />
        </div>
      </div>
      <div className="component-121">
        <div className="component-47">
          <div className="component-1">
            <img
              className="component-1-child"
              alt=""
              src="/rectangle-1@2x.png"
            />
          </div>
          <div className="you-received-a-container1">
            <span>
              <b className="lindsey-culhane">Lindsey Culhane</b>
              <span className="span">{` requested a payment of `}</span>
            </span>
            <span className="span">
              <span>$780.1</span>
              <span className="span2">{` `}</span>
            </span>
          </div>
          <div className="button">
            <div className="button1">PAY</div>
          </div>
          <div className="am">9:01am</div>
          <div className="component-47-child" />
          <img
            className="linesystemstar-line-icon"
            alt=""
            src="/linesystemstarline.svg"
          />
        </div>
      </div>
      <div className="component-131">
        <div className="component-47">
          <div className="component-1">
            <img
              className="component-1-child"
              alt=""
              src="/rectangle-2@4X.png"
            />
          </div>
          <div className="you-received-a-container">
            <span className="you-received-a-payment-of-780">
              <span>{`You received a payment of `}</span>
              <span className="span">$780.1</span>
              <span>{` from  `}</span>
            </span>
            <span>
              <b>Justin Westervelt</b>
            </span>
          </div>
          <div className="am">9:01am</div>
          <div className="component-47-child" />
          <img
            className="linesystemstar-line-icon"
            alt=""
            src="/linesystemstarline.svg"
          />
        </div>
      </div>
      <div className="component-141">
        <div className="component-47">
          <div className="component-1">
            <img
              className="component-1-child"
              alt=""
              src="/rectangle-2@4X.png"
            />
          </div>
          <div className="you-received-a-container">
            <span className="you-received-a-payment-of-780">
              <span>{`You received a payment of `}</span>
              <span className="span">$780.1</span>
              <span>{` from  `}</span>
            </span>
            <span>
              <b>Justin Westervelt</b>
            </span>
          </div>
          <div className="am">9:01am</div>
          <div className="component-47-child" />
          <img
            className="linesystemstar-line-icon"
            alt=""
            src="/linesystemstarline.svg"
          />
        </div>
      </div>
      <div className="today">Today</div>
      <div className="yesterday">Yesterday</div>
      <div className="this-week">This week</div>
     
      </div>
      </div>
    </div>
  );
};

export default Notification1;