import React from "react";

class BookList extends React.Component {
  render() {
    const { listArray, onBookMarker } = this.props;
    let markerStar = null;

    function bookMarkerView(param) {
      if (param === true) {
        markerStar = "★";
      } else {
        markerStar = "☆";
      }

      return markerStar;
    }
    //{ id, name, number, bookMarker }
    const listView = listArray.map(list => (
      <div key={list.get("id")}>
        <a
          className="star"
          title="클릭시 즐겨찾기가 설정/해제됩니다"
          onClick={() => onBookMarker(list.get("id"))}
        >
          {bookMarkerView(list.get("bookMarker"))}
        </a>
        {list.get("id")} :: &nbsp;
        {list.get("name")}&nbsp;//&nbsp;
        {list.get("number")}
      </div>
    ));

    return <div>{listView}</div>;
  }
}

export default BookList;
