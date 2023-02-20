import React from "react";
import { Link } from "react-router-dom";
import style from './FeedItem.module.css'
const FeedItem = ({feedItem}) => {
    return (
        <div className={style["feed_item"]}>
          <div className={style["feed_metadata"]}>
            <img
              className={style["profile-img"]}
              src={feedItem.creatorImageUrl}
            />
            <p className={style["profile-name"]}>{feedItem.creatorName}</p>
            <p className={style["feed-timestamp"]}>
              {"  "}
              {feedItem.timestamp}
            </p>
          </div>
          <div className={style["feed_data"]}>
            <div className={style["feed_data_left"]}>
              <h2 className={style["feed_title"]}>{feedItem.title}</h2>
              <p className={style["feed_description"]}>
                {feedItem.description}
              </p>

              <div className={style["feed_icons"]}>
                <div className={style["feed_icon_like"]}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                </div>

                <div className={style['feed_icon_read']}>
                  <Link to={`/article/${feedItem.id}`}>
                    Read
                  </Link>
                </div>


              </div>
            </div>
            <div className={style["feed_data_right"]}>
              <img
                className={style["feed-item-article-url"]}
                src={feedItem.articleImageUrl}
              />
            </div>
          </div>
        </div>
    )
}

export default FeedItem;