import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import { Comments } from "../Comments/Comments";

const CommentsGroup = ({ element, index, comments }) => {
  const [tabActive, seTabActive] = useState('');
  const [showActiveTab, setActiveTab] = useState(false);

  const renderComments = (el, idx) => {
    return comments[el].map((el, idx) => (
      <CSSTransition
        key={idx}
        in={showActiveTab}
        timeout={100}
        classNames="my-node"
        unmountOnExit
      >
        <Comments
          key={idx}
          indice={idx}
          name={el.name}
          email={el.email}
          comment={el.body}
        />
      </CSSTransition>
    ));
  };
  useEffect(() => {
    // console.log('montado');
    return () => {
      // console.log('desmontado');
    }
  }, [tabActive]);
  const hundleTabs = () => {
    (!tabActive) ? seTabActive('active') : seTabActive('');
    (!showActiveTab) ? setActiveTab(true) : setActiveTab(false);
  };
  return (
    <React.Fragment>
      <li key={index}>
        <ul className={"second-list"}>
          <li className={'headerComments list-item ' + tabActive}>
            <button className="actionTabs has-text-white" onClick={hundleTabs}>
              Estos son los comentarios para el post con id {index}
            </button>
          </li>
          {renderComments(element, index)}
        </ul>
      </li>
    </React.Fragment>
  );
};
export { CommentsGroup };
