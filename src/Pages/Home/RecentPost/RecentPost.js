import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
var Duration = require("duration");


const RecentPost = () => {
  const [posts, setPost] = useState([]);

  const getUploded = (uplodedAt) => {
    var duration = new Duration(new Date(uplodedAt), new Date());
    let unit = "";
    let renderView = "";
    if (duration.years >= 1) {
      renderView = duration.years;
      unit = "Years Ago";
    } else if (duration.months >= 1) {
      renderView = duration.months;
      unit = "Months Ago";
    } else if (duration.days >= 1) {
      renderView = duration.days;
      unit = "Days Ago";
    } else if (duration.days <= 1) {
      renderView = "";
      unit = "Today";
    } else {
      renderView = "";
      unit = "";
    }
    return `${renderView} ${unit}`;
  };

  useEffect(() => {
    fetch("https://calm-eyrie-50135.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => setPost(data.reverse()));
  }, []);
  console.log(posts);
  const recent = posts.slice(0, 6);
  return (
    <div className="recent">
      <Container>
        <Row xs={1} md={3} className="g-4">
          {recent.map((post) => (
            <Col>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={`data:image/png;base64,${post.image}`}
                  width="100%"
                  height="250px"
                />
                <Card.Body>
                  <Card.Title>{post?.title.slice(0, 40)}</Card.Title>
                  <Card.Text>
                    <div className="details">
                      {" "}
                      {post?.description.slice(0, 100)}...
                    </div>{" "}
                    <br />
                    <div className="Date_see">
                      <span className="date">{getUploded(post?.date)}</span>{" "}
                      <Link to={`blogDetails/${post?._id}`}>
                        <button>see more</button>
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RecentPost;
