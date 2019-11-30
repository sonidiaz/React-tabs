import React, { useEffect, useState } from "react";
import { Comments } from "../Comments/Comments";
import { resolve } from "q";

const Accordion = () => {
  const [list, setList] = useState({});
  let [keyList, setTkeyList] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com";

  async function getList() {
    let response = await fetch(`${baseUrl}/posts/1/comments`);
    let data = await response.json();
    return data;
  }
  useEffect(() => {
    async function getAllList() {
      const response = await getList();
      let group = response.reduce((r, a) => {
        r[a.postId] = [...(r[a.postId] || []), a];
        console.log("primero ");
        return r;
      }, {});
      keyList = Object.keys(group);
      setList(group);
      setTkeyList(keyList);
    }
    getAllList();
  }, []);
  const renderComments = (el, idx) => {
    return list[el].map((el, idx) => (
      <Comments key={idx} name={el.name} email={el.email} comment={el.body} />
    ));
  };
  return (
    <ul>
      {keyList.map((elem, index) => {
        return (
          <li className="headerList">
            <ul>
              <li className="headerComments">
                <h2>Header List {index}</h2>
              </li>
              {renderComments(elem, index)}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export { Accordion };
