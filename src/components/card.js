import React from "react";
// Styled
import { Article, CardContent } from "../styles/article";
// Components
import { Tag } from "../components/tag";

export const Card = ({ item }) => {
  return (
    <Article>
      <img src={item.photo} alt="bedroom" />
      <CardContent>
        {item.beds ? (
          <div>
            <Tag text="SUPER HOST" />
            <span>
              {item.type}. {item.beds} beds
            </span>
          </div>
        ) : (
          <div>
            <span>{item.type}</span>
          </div>
        )}
        <div>
          <span>⭐{item.rating}</span>
        </div>
      </CardContent>
      <CardContent>
        <strong>{item.title}</strong>
      </CardContent>
    </Article>
  );
};
