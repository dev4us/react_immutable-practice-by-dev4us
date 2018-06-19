import React from "react";
import ReactDOM from "react-dom";
import { Map, List } from "immutable";

import Template from "./Components/Template";
import BookList from "./Components/BookList";

import "./styles.css";

class App extends React.Component {
  id = 2;
  state = {
    data: Map({
      inputName: "",
      inputNumber: "",
      keyword: "",
      profile: List([
        Map({
          id: 0,
          name: "오박사",
          number: "010-2255-3306",
          bookMarker: false
        }),
        Map({
          id: 1,
          name: "홍길동",
          number: "010-1234-5678",
          bookMarker: true
        })
      ])
    })
  };

  handleChangeName = e => {
    const { data } = this.state;
    const { value } = e.target;

    this.setState({
      data: data.set("inputName", value)
    });
  };

  handleChangeNumber = e => {
    const { data } = this.state;
    const { value } = e.target;
    this.setState({
      data: data.set("inputNumber", value)
    });
  };

  check = () => {
    const { data } = this.state;

    console.log(data.toJS());
  };

  handleInputData = () => {
    //const { inputName, inputNumber, profile } = this.state;
    const { data } = this.state;

    /*this.setState({
      inputName: "",
      inputNumber: "",
      profile: profile.concat({
        id: this.id++,
        name: inputName,
        number: inputNumber,
        bookMarker: false
      })
    });
    this.setState({
      data: data.set("inputName", "").set("inputNumber", "")
    });

    console.log(data.toJS());
    /*
    this.setState({
      data: data.update("profile", profile =>
        profile.push(
          Map({
            id: this.id++,
            name: data.get("inputName"),
            number: data.get("inputNumber"),
            bookMarker: false
          })
        )
      )
    });*/

    this.setState({
      data: data
        .set("inputName", "")
        .set("inputNumber", "")
        .update("profile", profile =>
          profile.push(
            Map({
              id: this.id++,
              name: data.get("inputName"),
              number: data.get("inputNumber"),
              bookMarker: false
            })
          )
        )
    });
  };

  handleBookMarker = id => {
    /*const { data } = this.state;
    const index = data.get('profile').findIndex(profiles => profiles.id === id);

    //const selected = profile[index];
    const nextProfile = [...profile];

    nextProfile[index] = {
      ...nextProfile[index],
      bookMarker: !nextProfile[index].bookMarker
    };

    this.setState({
      profile: nextProfile
    });*/
    const { data } = this.state;
    const bookMarker = data.getIn(["profile", id, "bookMarker"]);

    this.setState({
      data: data.setIn(["profile", id, "bookMarker"], !bookMarker)
    });
    //console.log(id + "번째 즐겨찾기 여부 변경 완료" + bookMarker);
    //console.log(data.toJS());
  };

  inputKeyword = e => {
    const { data } = this.state;
    const { value } = e.target;

    this.setState({
      data: data.set("keyword", value)
    });
  };

  render() {
    const { data } = this.state;
    const keyword = data.get("keyword");

    const profile = data
      .get("profile")
      .filter(profiles => profiles.get("name").indexOf(keyword) !== -1);
    //const profile = data.get("profile");

    const inputName = data.get("inputName");
    const inputNumber = data.get("inputNumber");

    const {
      handleChangeName,
      handleChangeNumber,
      handleInputData,
      handleBookMarker,
      inputKeyword,
      check
    } = this;

    return (
      <div>
        <Template
          onChangeName={handleChangeName}
          onChangeNumber={handleChangeNumber}
          onInputData={handleInputData}
          inputName={inputName}
          inputNumber={inputNumber}
          inputKeyword={inputKeyword}
          check={check}
        />
        <BookList listArray={profile} onBookMarker={handleBookMarker} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
