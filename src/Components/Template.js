import React from "react";

class Template extends React.Component {
  render() {
    const {
      onChangeName,
      onChangeNumber,
      onInputData,
      inputName,
      inputNumber,
      check
    } = this.props;

    return (
      <div>
        <input
          type="text"
          className="name"
          placeholder="이름"
          onChange={onChangeName}
          value={inputName}
        />
        <input
          type="text"
          className="number"
          placeholder="연락처"
          onChange={onChangeNumber}
          value={inputNumber}
        />
        <button onClick={onInputData}>연락처 추가</button>
        <button onClick={check}>로그 출력</button>
      </div>
    );
  }
}
export default Template;
