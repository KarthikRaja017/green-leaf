import React from "react";
import { Card, Avatar, Rate } from "antd";

const { Meta } = Card;

const TestimonialCard = ({ testimonial, user, rating, text }) => {
  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: "#ffffff",
        margin: "0",
        textAlign: "left",
        borderRadius: "8px",
        padding: "16px",
        width:'400px',
        height:'200px'
      }}
    >
      <Rate
        disabled
        defaultValue={rating}
        style={{ marginBottom: "10px", color: "#faad14" }}
      />
      <p
        style={{
          fontSize: "14px",
          color: "#333333",
          lineHeight: "1.5",
          marginBottom: "15px",
        }}
      >
        {text}
      </p>
      <Meta
        avatar={<Avatar src={user.avatar} />}
        title={testimonial}
        style={{ fontWeight: "600" }}
      />
    </Card>
  );
};

export default TestimonialCard;
