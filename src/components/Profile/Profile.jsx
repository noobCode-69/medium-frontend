import React from "react";
import { useQuery } from "react-query";
import style from "./Profile.module.css";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
const fakeData = {
  name: "MD SOHEL",
  joiningDate: "20 Dec, 2001",
  profileImg:
    "https://th.bing.com/th/id/OIP.FK05bsc_EKBWE1yDnbl8swHaDt?pid=ImgDet&rs=1",
  likesCount: 10,
  articleCount: 20,
  followersCount: 10,
  followingCount: 50,

  articles: [
    {
      id: 1,
      title: "12 AI Websites That Will Blow Your Mind",
      description:
        "Get Ready to have your mind blown There are countless websites today that use artificial intelligence (AI). From bespoke news recommendations to smarter search engines, these websites change",
      articleImgUrl:
        "https://thumbs.dreamstime.com/b/random-shot-goose-head-yellow-beak-farm-209772525.jpg",
    },
    {
      id: 1,
      title: "12 AI Websites That Will Blow Your Mind",
      description:
        "Get Ready to have your mind blown There are countless websites today that use artificial intelligence (AI). From bespoke news recommendations to smarter search engines, these websites change",
      articleImgUrl:
        "https://thumbs.dreamstime.com/b/random-shot-goose-head-yellow-beak-farm-209772525.jpg",
    },
    {
      id: 1,
      title: "12 AI Websites That Will Blow Your Mind",
      description:
        "Get Ready to have your mind blown There are countless websites today that use artificial intelligence (AI). From bespoke news recommendations to smarter search engines, these websites change",
      articleImgUrl:
        "https://thumbs.dreamstime.com/b/random-shot-goose-head-yellow-beak-farm-209772525.jpg",
    },
    {
      id: 1,
      title: "12 AI Websites That Will Blow Your Mind",
      description:
        "Get Ready to have your mind blown There are countless websites today that use artificial intelligence (AI). From bespoke news recommendations to smarter search engines, these websites change",
      articleImgUrl:
        "https://thumbs.dreamstime.com/b/random-shot-goose-head-yellow-beak-farm-209772525.jpg",
    },
    {
      id: 1,
      title: "12 AI Websites That Will Blow Your Mind",
      description:
        "Get Ready to have your mind blown There are countless websites today that use artificial intelligence (AI). From bespoke news recommendations to smarter search engines, these websites change",
      articleImgUrl:
        "https://thumbs.dreamstime.com/b/random-shot-goose-head-yellow-beak-farm-209772525.jpg",
    },
    {
      id: 1,
      title: "12 AI Websites That Will Blow Your Mind",
      description:
        "Get Ready to have your mind blown There are countless websites today that use artificial intelligence (AI). From bespoke news recommendations to smarter search engines, these websites change",
      articleImgUrl:
        "https://thumbs.dreamstime.com/b/random-shot-goose-head-yellow-beak-farm-209772525.jpg",
    },
  ],
};

const Profile = () => {
  const { data, isLoading, isError } = useQuery(["profile", 1], () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fakeData);
      }, 1000);
    });
  });

  return (
    <div className={style["profile-parent-container"]}>
      {isLoading == true ? (
        <Loading message="Please Wait, while we are fetching data" />
      ) : (
        <div className={style["profile-container"]}>


          <div className={style["profile-info"]}>
            <img className={style["profile-img"]} src={data.profileImg} />
            <div className={style["profile-info-left"]}>
              <p className={style["profile-name"]}>{data.name}</p>
              <p className={style["profile-joining-date"]}>
                Member since, {data.joiningDate}
              </p>
              <Link className={style["edit-profile-button"]} to="/edit-profile">
                Edit
              </Link>
            </div>
          </div>

          <div className={style["articles-container"]}>
            {data.articles.map((article) => {
              return (
                <div className={style["article"]}>
                  <div className={style["article-left"]}>
                    <h2 className={style["article-title"]}>{article.title}</h2>
                    <p className={style["article-description"]}>
                      {article.description}
                    </p>
                    <div className={style["buttons-container"]}>
                      <Link
                        className={`${style["button"]} ${style["button-read"]}`}
                        to="/article/1"
                      >
                        Read
                      </Link>
                      <button
                        className={`${style["button"]} ${style["button-delete"]}`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className={style["article-right"]}>
                    <img src={article.articleImgUrl} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
