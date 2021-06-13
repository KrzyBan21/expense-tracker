import React from "react";
import "./MainForm.scss";

import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

const types = ["", "expense", "income"];
const categories = ["", "category1", "category2"];

const MainForm = () => {
  return (
    <form className="main-form">
      <Select inpFor="type" options={types}>
        Type
      </Select>
      <Select inpFor="category" options={categories}>
        Category
      </Select>
      <Input inpFor="amount" type="number">
        Amount
      </Input>
      <Input inpFor="date-picker" type="date">
        Date
      </Input>
      <div className="button-wrapper">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default MainForm;
